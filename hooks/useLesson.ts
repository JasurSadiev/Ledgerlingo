"use client";
/**
 * Lesson session state machine — port of legacy startLesson/nextExercise/checkAnswer/finishLesson.
 * Queue is shuffled once; a missed exercise is re-queued at the end (only the first time) and
 * only first-try correct answers count toward accuracy.
 */
import { useCallback, useMemo, useRef, useState } from "react";
import { useApp } from "@/components/providers/AppProvider";
import { applyLessonResult, loseHeart, regenHearts, shuffle } from "@/lib/gamification";
import type { Activity, Lesson } from "@/types/curriculum";
import type { LessonOutcome } from "@/lib/gamification/lessonResult";

export type Phase = "question" | "feedback" | "finished" | "out-of-hearts";

export interface LessonSession {
  lesson: Lesson;
  queue: Activity[];
  idx: number;
  correct: number;
  total: number;
  practice: boolean;
  earnHeart: boolean;
}

export function useLesson(lesson: Lesson, opts: { earnHeart?: boolean } = {}) {
  const { profile, updateProfile, toast } = useApp();
  const practice = !!profile?.completed[lesson.id];
  const earnHeart = !!opts.earnHeart && practice;

  const [session, setSession] = useState<LessonSession>(() => ({
    lesson, queue: shuffle(lesson.exercises), idx: 0, correct: 0, total: lesson.exercises.length, practice, earnHeart,
  }));
  const [phase, setPhase] = useState<Phase>("question");
  const [lastOk, setLastOk] = useState<boolean | null>(null);
  const [outcome, setOutcome] = useState<LessonOutcome | null>(null);
  const wrongOnce = useRef(new Set<Activity>());
  const finishing = useRef(false);

  const current = session.queue[session.idx];
  const progress = (session.idx / session.total) * 100;

  const finish = useCallback((s: LessonSession) => {
    if (finishing.current) return; finishing.current = true;
    let res: LessonOutcome | null = null;
    updateProfile((p) => { res = applyLessonResult(p, { lessonId: s.lesson.id, correct: s.correct, total: s.total, practice: s.practice, earnHeart: s.earnHeart }); return res.profile; });
    if (res) { const r = res as LessonOutcome; setOutcome(r); toast(`💎 +${r.gems} gems${r.heartMsg}`, 3500); }
    setPhase("finished");
  }, [updateProfile, toast]);

  /** Called by the activity component with the graded result. */
  const submit = useCallback((ok: boolean) => {
    if (phase !== "question" || !current) return;
    setLastOk(ok);
    setSession((s) => {
      const n = { ...s, queue: [...s.queue] };
      if (ok) { if (!wrongOnce.current.has(current)) n.correct++; }
      else if (!wrongOnce.current.has(current)) { wrongOnce.current.add(current); n.queue.push(current); }
      return n;
    });
    if (!ok && !session.practice) updateProfile((p) => loseHeart(regenHearts(p)));
    setPhase("feedback");
  }, [phase, current, session.practice, updateProfile]);

  const next = useCallback(() => {
    if (phase !== "feedback") return;
    const hearts = profile?.hearts ?? 0;
    if (hearts <= 0 && !session.practice) { setPhase("out-of-hearts"); return; }
    const idx = session.idx + 1;
    if (idx >= session.queue.length) { finish({ ...session, idx }); return; }
    setSession((s) => ({ ...s, idx })); setLastOk(null); setPhase("question");
  }, [phase, profile?.hearts, session, finish]);

  return useMemo(() => ({ session, current, phase, progress, lastOk, outcome, submit, next, hearts: profile?.hearts ?? 0 }),
    [session, current, phase, progress, lastOk, outcome, submit, next, profile?.hearts]);
}
