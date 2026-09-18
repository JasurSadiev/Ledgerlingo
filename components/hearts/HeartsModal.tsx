"use client";
import { useRouter } from "next/navigation";
import { useGamification } from "@/hooks/useGamification";
import { fmtMs } from "@/lib/gamification";

export default function HeartsModal() {
  const router = useRouter();
  const g = useGamification();
  if (!g.heartsModal.open || !g.profile) return null;
  const h = g.hearts, gems = g.gems, MAX = g.MAX_HEARTS, COST = g.REFILL_COST;
  const hasPractice = g.weakestCompletedLessonId() !== null;
  const n = g.nextHeartMs, f = g.fullHeartsMs;
  const onRefill = () => {
    const pending = g.heartsModal.pending;
    if (!g.refill()) return;
    g.closeHeartsModal();
    if (pending) router.push(`/lesson/${pending.lessonId}`);
  };
  const onPractice = () => {
    const id = g.weakestCompletedLessonId(); if (!id) return;
    g.closeHeartsModal();
    router.push(`/lesson/${id}?practice=heart`);
  };
  return (
    <div id="hearts-modal" className="modal" onClick={(e) => { if ((e.target as HTMLElement).id === "hearts-modal") g.closeHeartsModal(); }}>
      <div className="modal-card">
        <button className="close modal-close" id="hearts-close" onClick={g.closeHeartsModal}>✕</button>
        <div className="big-emoji" id="hm-emoji">{h <= 0 ? "💔" : "❤️"}</div>
        <h2 id="hm-title">{h <= 0 ? "You're out of hearts!" : h === MAX ? "Hearts are full" : `${h} of ${MAX} hearts`}</h2>
        <div className="heart-row" id="hm-hearts">{Array.from({ length: MAX }, (_, i) => <span key={i} className={i < h ? "" : "off"}>❤️</span>)}</div>
        <p className="muted" id="hm-timer">{n === null || f === null ? "Go make some journal entries!" : `Next heart in ${fmtMs(n)} · Full in ${fmtMs(f)}`}</p>
        <div className="hm-options">
          <button className="btn btn-blue" id="hm-practice" disabled={h >= MAX || !hasPractice} onClick={onPractice}>
            📝 Practice to earn a heart<small>{!hasPractice ? "Complete a lesson first to unlock practice" : "Review a completed lesson — free, +1 heart"}</small>
          </button>
          <button className="btn btn-primary" id="hm-refill" disabled={h >= MAX || gems < COST} onClick={onRefill}>
            💎 Refill all hearts<small id="hm-refill-cost">{h >= MAX ? "Already full" : gems < COST ? `Costs ${COST} gems — you have ${gems}` : `Costs ${COST} gems (you have ${gems})`}</small>
          </button>
        </div>
        <p className="muted small">Hearts regenerate 1 every 30 minutes. Earn gems by completing lessons (+5, +10 for a perfect score, +20 for a promotion).</p>
      </div>
    </div>
  );
}
