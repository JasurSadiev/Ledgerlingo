import type { UserProfile } from "@/types/user";
import { EARN_HEART_MIN_ACC, MAX_HEARTS, XP_PER_LESSON } from "./constants";
import { todayStr, weekKey, yesterdayStr } from "./time";

export interface LessonOutcome {
  profile: UserProfile;
  xp: number;
  gems: number;
  acc: number;
  heartMsg: string;
}

/** Pure port of legacy finishLesson(): XP, gems, practice halving, earn-heart, weekly XP, crowns, streak. */
export function applyLessonResult(p: UserProfile, args: { lessonId: string; correct: number; total: number; practice: boolean; earnHeart: boolean }): LessonOutcome {
  const acc = Math.round((args.correct / args.total) * 100);
  let xp = XP_PER_LESSON + (acc === 100 ? 5 : 0);
  if (args.practice) xp = Math.round(xp / 2);
  let gems = 5 + (acc === 100 ? 5 : 0);
  if (args.practice) gems = Math.round(gems / 2);
  const n: UserProfile = { ...p, xp: p.xp + xp, gems: (p.gems || 0) + gems, completed: { ...p.completed } };
  let heartMsg = "";
  if (args.earnHeart && acc >= EARN_HEART_MIN_ACC && n.hearts < MAX_HEARTS) { n.hearts++; if (n.hearts >= MAX_HEARTS) n.heartsLostAt = null; heartMsg = " · ❤️ +1 heart"; }
  else if (args.earnHeart && acc < EARN_HEART_MIN_ACC) heartMsg = ` · No heart (need ≥ ${EARN_HEART_MIN_ACC}%)`;
  if (n.weekKey !== weekKey()) { n.weekKey = weekKey(); n.weekXp = 0; }
  n.weekXp = (n.weekXp || 0) + xp;
  const prev = p.completed[args.lessonId];
  n.completed[args.lessonId] = { crowns: (prev ? prev.crowns : 0) + 1, best: Math.max(prev ? prev.best : 0, acc), last: Date.now() };
  const t = todayStr();
  if (n.lastActive !== t) { n.streak = n.lastActive === yesterdayStr() ? n.streak + 1 : 1; n.lastActive = t; }
  n.bestStreak = Math.max(n.bestStreak || 0, n.streak);
  return { profile: n, xp, gems, acc, heartMsg };
}
