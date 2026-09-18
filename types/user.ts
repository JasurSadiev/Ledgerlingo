/** User / progress / gamification types — mirrors the Firestore `ledgerlingo_users/{uid}` document. */

export interface LessonProgress {
  /** Times completed */
  crowns: number;
  /** Best accuracy % */
  best: number;
  /** Last completion timestamp (ms) */
  last?: number;
}

export type LeagueResult = "up" | "down" | "stay";

export interface LeagueHistoryEntry {
  week: string; // ISO week key e.g. 2026-W38
  xp: number;
  result: LeagueResult;
}

export type Theme = "light" | "dark";

export interface UserProfile {
  name: string;
  email: string;
  xp: number;
  streak: number;
  bestStreak: number;
  /** YYYY-MM-DD of last completed lesson */
  lastActive: string | null;
  hearts: number;
  /** Timestamp (ms) anchoring heart regeneration, null when full */
  heartsLostAt: number | null;
  completed: Record<string, LessonProgress>;
  /** Currently selected course/track id */
  track: string;
  league: number;
  weekKey: string;
  weekXp: number;
  leagueHistory: LeagueHistoryEntry[];
  gems: number;
  theme: Theme;
  createdAt: number;
}

/** Leaderboard row (subset of profile + document id). */
export interface LeagueRow {
  id: string;
  name: string;
  weekXp: number;
}

export interface Achievement {
  name: string;
  earned: boolean;
}

/** Minimal auth user shape used by the UI (decoupled from the Firebase SDK). */
export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  isAnonymous: boolean;
}
