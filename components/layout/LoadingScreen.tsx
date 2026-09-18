export default function LoadingScreen({ label = "Loading…" }: { label?: string }) {
  return (
    <section id="screen-auth" className="screen">
      <div className="auth-card"><div className="logo">📒</div><h1>LedgerLingo</h1><p className="sub">{label}</p></div>
    </section>
  );
}
