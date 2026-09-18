"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/providers/AppProvider";
import { fetchLeagueCohort } from "@/lib/progress/league";
import { DEMOTE_FROM, LEAGUES, LEAGUE_SIZE, PROMOTE, weekEnd, weekKey } from "@/lib/gamification";
import type { LeagueRow } from "@/types/user";

const AVATARS = ["🧑‍💼", "👩‍💻", "🧔", "👩‍🏫", "🧑‍🔧", "👨‍💼", "👩‍⚖️", "🧑‍🎓", "👨‍🏫", "👩‍🔬"];
const avatarFor = (id: string) => AVATARS[id.split("").reduce((s, ch) => s + ch.charCodeAt(0), 0) % AVATARS.length];

export default function LeagueScreen() {
  const { profile, user } = useApp();
  const L = profile?.league || 0;
  const [rows, setRows] = useState<LeagueRow[] | null>(null);
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const tick = () => { const ms = weekEnd().getTime() - Date.now(); const d = Math.floor(ms / 864e5), h = Math.floor((ms % 864e5) / 36e5), m = Math.floor((ms % 36e5) / 6e4); setTimer(`⏱ ${d}d ${h}h ${m}m left this week`); };
    tick(); const id = setInterval(tick, 30000); return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!profile || !user) return;
    let cancelled = false;
    (async () => {
      let r: LeagueRow[] = [];
      try { r = await fetchLeagueCohort(L, weekKey(), LEAGUE_SIZE); } catch (e) { console.warn("league query failed (index needed?)", e); }
      if (!r.some((x) => x.id === user.uid)) r.push({ id: user.uid, name: profile.name, weekXp: profile.weekXp || 0 });
      r.sort((a, b) => (b.weekXp || 0) - (a.weekXp || 0));
      if (!cancelled) setRows(r);
    })();
    return () => { cancelled = true; };
  }, [L, profile, user]);

  if (!profile || !user) return null;
  const top = L === LEAGUES.length - 1;
  const items: React.ReactNode[] = [];
  (rows || []).forEach((r, i) => {
    if (i === 0 && !top) items.push(<li key="z-up" className="zone up">Promotion zone</li>);
    if (i === PROMOTE && !top) items.push(<li key="z-stay" className="zone">Stay zone</li>);
    if (i === DEMOTE_FROM && L > 0) items.push(<li key="z-down" className="zone down">Demotion zone</li>);
    const me = r.id === user.uid;
    const cls = [me ? "me" : "", i < PROMOTE && !top ? "promo" : "", i >= DEMOTE_FROM && L > 0 ? "demo" : ""].join(" ");
    items.push(<li key={r.id} className={cls}><span className="rank">{["🥇", "🥈", "🥉"][i] || i + 1}</span><span className="av">{avatarFor(r.id || "")}</span><span className="nm">{r.name || "Learner"}{me ? " (you)" : ""}</span><span className="xp">{r.weekXp || 0} XP</span></li>);
  });
  if (rows && rows.length < 5) items.push(<li key="invite" className="muted" style={{ justifyContent: "center", border: 0 }}>Invite friends — leagues fill as more learners join this week.</li>);

  return (
    <main id="screen-league" className="screen">
      <div className="league-card">
        <div className="league-tiers" id="league-tiers">{LEAGUES.map(([n, e], i) => <div key={n} className={"tier " + (i === L ? "active" : i < L ? "passed" : "")} title={n}>{e}</div>)}</div>
        <h2 id="league-title">{LEAGUES[L][0]} League</h2>
        <p className="muted" id="league-sub">{top ? `Top league! Stay out of the bottom ${LEAGUE_SIZE - DEMOTE_FROM} to keep your spot` : `Top ${PROMOTE} advance to ${LEAGUES[L + 1][0]}${L > 0 ? ` · Bottom ${LEAGUE_SIZE - DEMOTE_FROM} drop to ${LEAGUES[L - 1][0]}` : ""}`}</p>
        <p className="league-timer" id="league-timer">{timer}</p>
        <ol className="league-list" id="league-list">{rows === null ? <li className="muted">Loading…</li> : items}</ol>
        <Link href="/" className="btn btn-ghost" id="btn-league-back">← Back to lessons</Link>
      </div>
    </main>
  );
}
