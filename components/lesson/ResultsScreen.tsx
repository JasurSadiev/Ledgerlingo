"use client";
import Link from "next/link";
import type { LessonOutcome } from "@/lib/gamification/lessonResult";

export default function ResultsScreen({ outcome, practice }: { outcome: LessonOutcome; practice: boolean }) {
  const { acc, xp, profile } = outcome;
  return (
    <main id="screen-results" className="screen">
      <div className="results-card">
        <div className="big-emoji" id="res-emoji">{acc === 100 ? "🏆" : acc >= 70 ? "🎉" : "💪"}</div>
        <h2 id="res-title">{acc === 100 ? "Perfect lesson!" : practice ? "Practice complete!" : "Lesson complete!"}</h2>
        <div className="res-stats">
          <div className="res-stat gold"><small>TOTAL XP</small><b id="res-xp">+{xp}</b></div>
          <div className="res-stat green"><small>ACCURACY</small><b id="res-acc">{acc}%</b></div>
          <div className="res-stat blue"><small>STREAK</small><b id="res-streak">{profile.streak} 🔥</b></div>
        </div>
        <Link href="/" className="btn btn-primary" id="btn-continue">Continue</Link>
      </div>
    </main>
  );
}
