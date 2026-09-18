"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <main id="screen-results" className="screen">
      <div className="results-card">
        <div className="big-emoji">😵</div>
        <h2>Something went wrong</h2>
        <p className="muted">Your progress is safe. Try again or head back to your lessons.</p>
        <button className="btn btn-primary" onClick={reset}>Try again</button>
        <Link href="/" className="btn btn-ghost">Back to lessons</Link>
      </div>
    </main>
  );
}
