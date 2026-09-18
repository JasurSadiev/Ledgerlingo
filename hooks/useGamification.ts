"use client";
import { useCallback } from "react";
import { useApp } from "@/components/providers/AppProvider";
import { getAllLessons } from "@/lib/curriculum";
import { MAX_HEARTS, REFILL_COST, fullHeartsMs, getAchievements, loseHeart, nextHeartMs, refillHearts } from "@/lib/gamification";

/** Hearts, gems, achievements — thin wrappers around pure lib/gamification functions. */
export function useGamification() {
  const { profile, updateProfile, toast, heartsModal, openHeartsModal, closeHeartsModal } = useApp();

  const spendHeart = useCallback(() => updateProfile(loseHeart), [updateProfile]);

  const refill = useCallback(() => {
    if (!profile || (profile.gems || 0) < REFILL_COST || profile.hearts >= MAX_HEARTS) return false;
    updateProfile((p) => refillHearts(p, REFILL_COST));
    toast("❤️ Hearts refilled!");
    return true;
  }, [profile, updateProfile, toast]);

  /** Weakest completed lesson: lowest best score, ties → least recently practiced (legacy hm-practice). */
  const weakestCompletedLessonId = useCallback((): string | null => {
    if (!profile) return null;
    const done = getAllLessons().filter((r) => profile.completed[r.lesson.id]).map((r) => ({ id: r.lesson.id, c: profile.completed[r.lesson.id] }));
    if (!done.length) return null;
    done.sort((a, b) => (a.c.best - b.c.best) || ((a.c.last || 0) - (b.c.last || 0)));
    return done[0].id;
  }, [profile]);

  return {
    profile,
    hearts: profile?.hearts ?? MAX_HEARTS,
    gems: profile?.gems ?? 0,
    nextHeartMs: profile ? nextHeartMs(profile) : null,
    fullHeartsMs: profile ? fullHeartsMs(profile) : null,
    achievements: profile ? getAchievements(profile) : [],
    spendHeart, refill, weakestCompletedLessonId,
    heartsModal, openHeartsModal, closeHeartsModal,
    MAX_HEARTS, REFILL_COST,
  };
}
