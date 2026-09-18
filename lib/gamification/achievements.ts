import { getCourse, getCourseLessons, getUnit } from "@/lib/curriculum";
import type { Achievement, UserProfile } from "@/types/user";

/** Same badge list and unlock rules as the legacy profile screen. */
export function getAchievements(profile: UserProfile): Achievement[] {
  const lessonsDone = Object.keys(profile.completed).length;
  const acctCourse = getCourse("accounting"), taxCourse = getCourse("tax");
  const acct = acctCourse ? getCourseLessons(acctCourse) : [], tax = taxCourse ? getCourseLessons(taxCourse) : [];
  const unitDone = (uid: string) => { const u = getUnit(uid); return !!u && u.lessons.every((l) => profile.completed[l.id]); };
  const rows: [string, boolean][] = [
    ["🐣 First Entry", lessonsDone >= 1], ["⚖️ Debits & Credits", unitDone("t02")], ["📊 Statement Builder", ["t09", "t10", "t12", "t13"].every(unitDone)],
    ["💵 Payroll Pro", unitDone("t20")], ["🧮 Cost Accountant", ["t30", "t31", "t32", "t33"].every(unitDone)], ["📒 AccountingCoach 33", acct.every((l) => profile.completed[l.lesson.id])],
    ["🏛️ Tax Pro", tax.every((l) => profile.completed[l.lesson.id])], ["🔥 7-Day Streak", (profile.bestStreak || 0) >= 7], ["⚡ 500 XP", profile.xp >= 500],
    ["🏆 Perfectionist", Object.values(profile.completed).some((c) => c.best === 100)], ["🎓 Graduate", [...acct, ...tax].every((l) => profile.completed[l.lesson.id])],
  ];
  return rows.map(([name, earned]) => ({ name, earned }));
}
