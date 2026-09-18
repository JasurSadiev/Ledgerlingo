import { fetchLeagueCohort } from "@/lib/firebase/users";
import { DEMOTE_FROM, LEAGUES, LEAGUE_SIZE, PROMOTE, PROMOTION_GEMS, weekKey } from "@/lib/gamification";
import type { LeagueResult, UserProfile } from "@/types/user";

/** Weekly league rollover: on first load in a new week, resolve last week's result. Pure w.r.t. profile; caller saves. */
export async function rolloverLeague(uid: string, p: UserProfile): Promise<{ profile: UserProfile; result: LeagueResult | null }> {
  if (p.weekKey === weekKey()) return { profile: p, result: null };
  const n: UserProfile = { ...p };
  let result: LeagueResult = "stay";
  try {
    const rows = await fetchLeagueCohort(n.league, n.weekKey, LEAGUE_SIZE);
    const rank = rows.findIndex((d) => d.id === uid) + 1;
    if (rank > 0 && rank <= PROMOTE && n.weekXp > 0 && n.league < LEAGUES.length - 1) { n.league++; result = "up"; }
    else if ((rank === 0 || rank > DEMOTE_FROM || n.weekXp === 0) && n.league > 0) { n.league--; result = "down"; }
  } catch { if (n.weekXp === 0 && n.league > 0) { n.league--; result = "down"; } }
  n.leagueHistory = [...(n.leagueHistory || []), { week: n.weekKey, xp: n.weekXp, result }].slice(-12);
  n.weekKey = weekKey(); n.weekXp = 0;
  if (result === "up") n.gems = (n.gems || 0) + PROMOTION_GEMS;
  return { profile: n, result };
}

export { fetchLeagueCohort };
