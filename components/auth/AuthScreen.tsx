"use client";
import { useState, type FormEvent } from "react";
import { useApp } from "@/components/providers/AppProvider";
import { useAuth } from "@/hooks/useAuth";

export default function AuthScreen() {
  const { theme, toggleTheme } = useApp();
  const a = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [pass, setPass] = useState("");

  const run = async (fn: () => Promise<void>) => { setMsg(""); setBusy(true); try { await fn(); } catch (err) { setMsg(a.friendlyAuthError(err)); } finally { setBusy(false); } };
  const submit = (e: FormEvent) => { e.preventDefault(); void run(() => mode === "signup" ? a.signUpWithEmail(email.trim(), pass, name.trim()) : a.signInWithEmail(email.trim(), pass)); };

  return (
    <section id="screen-auth" className="screen">
      <div className="auth-card">
        <button className="avatar auth-theme" id="auth-theme" title="Toggle dark mode" onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
        <div className="logo">📒</div>
        <h1>LedgerLingo</h1>
        <p className="sub">The fun, free way to learn bookkeeping &amp; payroll.</p>
        <div className="auth-tabs">
          <button className={"tab" + (mode === "login" ? " active" : "")} onClick={() => { setMode("login"); setMsg(""); }}>Log in</button>
          <button className={"tab" + (mode === "signup" ? " active" : "")} onClick={() => { setMode("signup"); setMsg(""); }}>Sign up</button>
        </div>
        <form id="auth-form" onSubmit={submit}>
          <input id="auth-name" type="text" placeholder="Display name" style={{ display: mode === "signup" ? "block" : "none" }} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          <input id="auth-email" type="email" placeholder="Email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input id="auth-pass" type="password" placeholder="Password (6+ chars)" required minLength={6} autoComplete="current-password" value={pass} onChange={(e) => setPass(e.target.value)} />
          <button type="submit" className="btn btn-primary" id="auth-submit" disabled={busy}>{mode === "signup" ? "Create account" : "Log in"}</button>
        </form>
        <div className="divider"><span>or</span></div>
        <button className="btn btn-white" id="btn-google" disabled={busy} onClick={() => run(a.signInWithGoogle)}>
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.5l6.7-6.7C35.6 2.6 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.8 6C12.3 13.4 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4 7.1-10 7.1-17.5z"/><path fill="#FBBC05" d="M10.4 28.8A14.5 14.5 0 0 1 9.5 24c0-1.7.3-3.3.9-4.8l-7.8-6A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.8-6z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.7-4-13.6-9.7l-7.8 6C6.5 42.6 14.6 48 24 48z"/></svg>
          Continue with Google
        </button>
        <button className="btn btn-ghost" id="btn-guest" disabled={busy} onClick={() => run(a.signInAsGuest)}>Try as guest</button>
        <p className="auth-msg" id="auth-msg">{msg}</p>
      </div>
    </section>
  );
}
