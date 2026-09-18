"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/providers/AppProvider";
import { useAuth } from "@/hooks/useAuth";
import { useGamification } from "@/hooks/useGamification";
import { LEAGUES } from "@/lib/gamification";

export default function ProfileScreen() {
  const router = useRouter();
  const { profile, user } = useApp();
  const { signOut } = useAuth();
  const { achievements } = useGamification();
  if (!profile || !user) return null;
  const lessonsDone = Object.keys(profile.completed).length;
  const league = LEAGUES[profile.league || 0];
  const hist = (profile.leagueHistory || []).slice(-4).map((h) => `${h.week}: ${h.xp} XP ${h.result === "up" ? "⬆️" : h.result === "down" ? "⬇️" : "➡️"}`).join(" · ");
  const emailLine = user.isAnonymous ? "Guest account — sign up to keep progress across devices" : (user.email || "");
  return (
    <main id="screen-profile" className="screen">
      <div className="profile-card">
        <div className="big-emoji">🧑‍💼</div>
        <h2 id="pf-name">{profile.name}</h2>
        <p className="muted" id="pf-email" style={{ whiteSpace: "pre-line" }}>{emailLine}{hist ? `\n${league[1]} ${league[0]} League · ${hist}` : ` · ${league[1]} ${league[0]} League`}</p>
        <div className="res-stats">
          <div className="res-stat gold"><small>TOTAL XP</small><b id="pf-xp">{profile.xp} · 💎{profile.gems || 0}</b></div>
          <div className="res-stat blue"><small>LESSONS</small><b id="pf-lessons">{lessonsDone}</b></div>
          <div className="res-stat green"><small>BEST STREAK</small><b id="pf-best">{profile.bestStreak || 0}</b></div>
        </div>
        <h3>Achievements</h3>
        <div className="badges" id="pf-badges">{achievements.map((b) => <span key={b.name} className={"badge" + (b.earned ? " earned" : "")}>{b.name}</span>)}</div>
        <Link href="/" className="btn btn-ghost" id="btn-back-home">← Back</Link>
        <button className="btn btn-danger" id="btn-logout" onClick={async () => { await signOut(); router.push("/"); }}>Log out</button>
        <p className="muted small">Sources: AccountingCoach.com (33-topic outline), IRS Pubs 15/15-T/946/542, IRC &amp; OBBBA, ASC 740, SSA 2026 wage base. Educational only — not tax advice.</p>
      </div>
    </main>
  );
}
