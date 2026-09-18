/** Firestore access for `ledgerlingo_users` — the only place that touches the collection. */
import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
import type { LeagueRow, UserProfile } from "@/types/user";
import { USERS_COLLECTION, getDb } from "./client";

export async function fetchUserDoc(uid: string): Promise<Partial<UserProfile> | null> {
  const snap = await getDoc(doc(getDb(), USERS_COLLECTION, uid));
  return snap.exists() ? (snap.data() as Partial<UserProfile>) : null;
}

export async function createUserDoc(uid: string, profile: UserProfile): Promise<void> {
  await setDoc(doc(getDb(), USERS_COLLECTION, uid), profile);
}

export async function mergeUserDoc(uid: string, profile: UserProfile): Promise<void> {
  await setDoc(doc(getDb(), USERS_COLLECTION, uid), profile, { merge: true });
}

/** Leaderboard cohort = league + weekKey, ordered by weekXp desc (needs the composite index in firestore.indexes.json). */
export async function fetchLeagueCohort(league: number, weekKey: string, size: number): Promise<LeagueRow[]> {
  const q = query(collection(getDb(), USERS_COLLECTION), where("league", "==", league), where("weekKey", "==", weekKey), orderBy("weekXp", "desc"), limit(size));
  const snap = await getDocs(q);
  return snap.docs.map((d) => { const data = d.data() as Partial<UserProfile>; return { id: d.id, name: data.name || "Learner", weekXp: data.weekXp || 0 }; });
}
