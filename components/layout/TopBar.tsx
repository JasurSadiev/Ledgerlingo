"use client";
import Link from "next/link";
import { useApp } from "@/components/providers/AppProvider";
import { fmtMs, nextHeartMs } from "@/lib/gamification";

export default function TopBar() {
  const { profile, theme, toggleTheme, openHeartsModal } = useApp();
  const ms = profile ? nextHeartMs(profile) : null;
  return (
    <header className="topbar">
      <Link href="/" className="brand" id="go-home" style={{ textDecoration: "none" }}>📒 <span>LedgerLingo</span></Link>
      <div className="stats">
        <span className="stat" title="Day streak">🔥 <b id="st-streak">{profile?.streak ?? 0}</b></span>
        <span className="stat" title="Total XP">⚡ <b id="st-xp">{profile?.xp ?? 0}</b></span>
        <button className={"stat stat-btn" + ((profile?.hearts ?? 5) <= 0 ? " empty" : "")} id="btn-hearts" title="Hearts" onClick={() => openHeartsModal()}>
          ❤️ <b id="st-hearts">{profile?.hearts ?? 5}</b><small id="st-heart-timer">{ms === null ? "" : fmtMs(ms)}</small>
        </button>
        <span className="stat" title="Gems">💎 <b id="st-gems">{profile?.gems ?? 0}</b></span>
        <button className="avatar" id="btn-theme" title="Toggle dark mode" onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
        <Link href="/league" className="avatar" id="btn-league" title="Leagues" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>🏆</Link>
        <Link href="/profile" className="avatar" id="btn-profile" title="Profile" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>👤</Link>
      </div>
    </header>
  );
}
