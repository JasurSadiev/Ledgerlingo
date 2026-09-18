import type { UserProfile } from "@/types/user";
import { HEART_MS, MAX_HEARTS } from "./constants";

/** Pure: returns a regenerated copy (1 heart / 30 min, keeps remainder) or the same object if nothing changed. */
export function regenHearts(p: UserProfile): UserProfile {
  if (p.hearts < MAX_HEARTS && p.heartsLostAt) {
    const gained = Math.floor((Date.now() - p.heartsLostAt) / HEART_MS);
    if (gained > 0) {
      const hearts = Math.min(MAX_HEARTS, p.hearts + gained);
      return { ...p, hearts, heartsLostAt: hearts < MAX_HEARTS ? p.heartsLostAt + gained * HEART_MS : null };
    }
  }
  return p;
}

export const nextHeartMs = (p: UserProfile): number | null => (p.hearts >= MAX_HEARTS || !p.heartsLostAt) ? null : p.heartsLostAt + HEART_MS - Date.now();
export const fullHeartsMs = (p: UserProfile): number | null => (p.hearts >= MAX_HEARTS || !p.heartsLostAt) ? null : p.heartsLostAt + (MAX_HEARTS - p.hearts) * HEART_MS - Date.now();

export function loseHeart(p: UserProfile): UserProfile {
  return { ...p, hearts: Math.max(0, p.hearts - 1), heartsLostAt: p.heartsLostAt || Date.now() };
}

export function refillHearts(p: UserProfile, cost: number): UserProfile {
  return { ...p, gems: p.gems - cost, hearts: MAX_HEARTS, heartsLostAt: null };
}
