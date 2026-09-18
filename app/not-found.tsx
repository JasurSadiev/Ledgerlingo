import Link from "next/link";
export default function NotFound() {
  return (
    <main id="screen-results" className="screen">
      <div className="results-card">
        <div className="big-emoji">🔎</div>
        <h2>We couldn&apos;t find that lesson</h2>
        <p className="muted">It may have moved or never existed.</p>
        <Link href="/" className="btn btn-primary">Back to lessons</Link>
      </div>
    </main>
  );
}
