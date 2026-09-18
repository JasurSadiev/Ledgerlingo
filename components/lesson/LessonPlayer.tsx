"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/providers/AppProvider";
import { useLesson } from "@/hooks/useLesson";
import type { Lesson } from "@/types/curriculum";
import ActivityRenderer from "./activities";
import ResultsScreen from "./ResultsScreen";

const PRAISE = ["Nice!", "Correct!", "Excellent!", "Balanced! ✔"];

export default function LessonPlayer({ lesson, earnHeart }: { lesson: Lesson; earnHeart: boolean }) {
  const router = useRouter();
  const { toast, openHeartsModal } = useApp();
  const L = useLesson(lesson, { earnHeart });
  const graderRef = useRef<(() => boolean) | null>(null);
  const [canCheck, setCanCheck] = useState(false);
  const [praise, setPraise] = useState(PRAISE[0]);
  const shownEarnToast = useRef(false);

  useEffect(() => { if (L.session.earnHeart && !shownEarnToast.current) { shownEarnToast.current = true; toast("Practice mode: finish with ≥ 70% accuracy to earn a heart ❤️", 3500); } }, [L.session.earnHeart, toast]);

  const onReady = useCallback((g: (() => boolean) | null) => { graderRef.current = g; setCanCheck(!!g); }, []);

  const check = useCallback(() => {
    if (L.phase !== "question" || !graderRef.current) return;
    const ok = graderRef.current();
    setPraise(PRAISE[Math.floor(Math.random() * PRAISE.length)]);
    L.submit(ok);
  }, [L]);

  const primary = L.phase === "question" ? check : L.next;
  const primaryEnabled = L.phase === "question" ? canCheck : L.phase === "feedback";

  // Enter key = Check / Continue (unless typing in an input)
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Enter" && document.activeElement?.tagName !== "INPUT" && primaryEnabled) primary(); };
    document.addEventListener("keydown", h); return () => document.removeEventListener("keydown", h);
  }, [primary, primaryEnabled]);

  // Ran out of hearts mid-lesson → back home + hearts modal with this lesson pending (legacy behaviour)
  useEffect(() => {
    if (L.phase === "out-of-hearts") { router.replace("/"); openHeartsModal({ lessonId: lesson.id }); }
  }, [L.phase, router, openHeartsModal, lesson.id]);

  // Reset per-exercise state when the question changes
  useEffect(() => { graderRef.current = null; setCanCheck(false); }, [L.session.idx]);

  if (L.phase === "finished" && L.outcome) return <ResultsScreen outcome={L.outcome} practice={L.session.practice} />;
  if (!L.current) return null;

  const footCls = "lesson-foot" + (L.phase === "feedback" ? (L.lastOk ? " ok" : " bad") : "");
  return (
    <main id="screen-lesson" className="screen">
      <div className="lesson-top">
        <button className="close" id="lesson-quit" onClick={() => { if (confirm("Quit this lesson? Progress in it will be lost.")) router.push("/"); }}>✕</button>
        <div className="progress"><div className="progress-fill" id="lesson-progress" style={{ width: L.progress + "%" }} /></div>
        <span className="hearts">❤️ <b id="lesson-hearts">{L.hearts}</b></span>
      </div>
      <div className="tip" id="lesson-tip"><b>💡 Tip:</b> {lesson.title ? lesson.tip : ""}</div>
      <div className="exercise" id="exercise">
        <h2>{L.current.q}</h2>
        <ActivityRenderer key={L.session.idx} activity={L.current} locked={L.phase !== "question"} checked={L.phase === "feedback" ? L.lastOk : null} onReady={onReady} requestCheck={check} />
      </div>
      <footer className={footCls} id="lesson-foot">
        <div className="feedback" id="feedback">
          {L.phase === "feedback" && (<><h3>{L.lastOk ? praise : "Not quite."}</h3>{L.current.explain}</>)}
        </div>
        <button className="btn btn-primary" id="btn-check" disabled={!primaryEnabled} onClick={primary}>{L.phase === "question" ? "Check" : "Continue"}</button>
      </footer>
    </main>
  );
}
