/** Profile persistence: Firestore first, localStorage fallback/mirror — same behaviour as legacy loadProfile/saveProfile. */
import { createUserDoc, fetchUserDoc, mergeUserDoc } from "@/lib/firebase/users";
import { MAX_HEARTS, weekKey, todayStr, yesterdayStr } from "@/lib/gamification";
import type { AuthUser, UserProfile } from "@/types/user";

const LS_KEY = (uid: string) => "ll_" + uid;

export const defaultProfile = (u: AuthUser): UserProfile => ({
  name: u.displayName || (u.email ? u.email.split("@")[0] : "Guest"), email: u.email || "", xp: 0, streak: 0, bestStreak: 0, lastActive: null,
  hearts: MAX_HEARTS, heartsLostAt: null, completed: {}, track: "accounting", league: 0, weekKey: weekKey(), weekXp: 0, leagueHistory: [], gems: 0, theme: "light", createdAt: Date.now(),
});

function readLocal(uid: string): UserProfile | null {
  try { return JSON.parse(localStorage.getItem(LS_KEY(uid)) || "null"); } catch { return null; }
}

export interface LoadResult { profile: UserProfile; offline: boolean }

export async function getUserProgress(user: AuthUser): Promise<LoadResult> {
  let profile: UserProfile; let offline = false;
  try {
    const data = await fetchUserDoc(user.uid);
    profile = data ? { ...defaultProfile(user), ...data } : defaultProfile(user);
    if (!data) await createUserDoc(user.uid, profile);
  } catch (err) {
    console.warn("Firestore unavailable, using local storage", err);
    profile = readLocal(user.uid) || defaultProfile(user);
    offline = true;
  }
  // streak check: reset if a day was missed
  if (profile.lastActive && profile.lastActive !== todayStr() && profile.lastActive !== yesterdayStr()) profile.streak = 0;
  if (profile.gems === undefined) profile.gems = 0;
  if (profile.league === undefined) { profile.league = 0; profile.weekKey = weekKey(); profile.weekXp = 0; }
  return { profile, offline };
}

export async function saveUserProgress(uid: string, profile: UserProfile): Promise<void> {
  try { localStorage.setItem(LS_KEY(uid), JSON.stringify(profile)); } catch { /* quota / private mode */ }
  try { await mergeUserDoc(uid, profile); } catch { /* offline — mirrored locally */ }
}
