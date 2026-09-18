"use client";
/**
 * App-wide client state: auth user, profile (progress + gamification), toast, theme, hearts modal.
 * Business logic lives in lib/*; this provider only orchestrates and persists.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { subscribeAuth } from "@/lib/firebase/auth";
import { LEAGUES, regenHearts } from "@/lib/gamification";
import { getUserProgress, saveUserProgress } from "@/lib/progress/profile";
import { rolloverLeague } from "@/lib/progress/league";
import type { AuthUser, Theme, UserProfile } from "@/types/user";

export interface PendingLesson { lessonId: string }

export interface AppState {
  user: AuthUser | null;
  /** undefined = auth still resolving */
  authReady: boolean;
  profile: UserProfile | null;
  profileLoading: boolean;
  /** Update + persist profile. `fn` receives current profile and returns the next one. */
  updateProfile: (fn: (p: UserProfile) => UserProfile, persist?: boolean) => UserProfile | null;
  toast: (msg: string, ms?: number) => void;
  theme: Theme;
  toggleTheme: () => void;
  heartsModal: { open: boolean; pending: PendingLesson | null };
  openHeartsModal: (pending?: PendingLesson | null) => void;
  closeHeartsModal: () => void;
}

const Ctx = createContext<AppState | null>(null);

const readTheme = (): Theme => { try { return localStorage.getItem("ll_theme") === "dark" ? "dark" : "light"; } catch { return "light"; } };

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [toastState, setToastState] = useState<{ msg: string; visible: boolean }>({ msg: "", visible: false });
  const [heartsModal, setHeartsModal] = useState<{ open: boolean; pending: PendingLesson | null }>({ open: false, pending: null });
  const profileRef = useRef<UserProfile | null>(null);
  const userRef = useRef<AuthUser | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toast = useCallback((msg: string, ms = 2200) => {
    setToastState({ msg, visible: true });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastState((t) => ({ ...t, visible: false })), ms);
  }, []);

  const applyTheme = useCallback((t: Theme) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("ll_theme", t); } catch { /* ignore */ }
  }, []);

  const updateProfile = useCallback((fn: (p: UserProfile) => UserProfile, persist = true) => {
    const cur = profileRef.current; if (!cur) return null;
    const next = fn(cur);
    if (next === cur) return cur;
    profileRef.current = next; setProfile(next);
    if (persist && userRef.current) void saveUserProgress(userRef.current.uid, next);
    return next;
  }, []);

  const toggleTheme = useCallback(() => {
    const t: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(t);
    updateProfile((p) => ({ ...p, theme: t }));
  }, [applyTheme, updateProfile]);

  // Initial theme (mirrors the inline script in legacy index.html)
  useEffect(() => { applyTheme(readTheme()); }, [applyTheme]);

  // Auth subscription → load profile (legacy onAuthStateChanged + loadProfile + rolloverLeague)
  useEffect(() => {
    let cancelled = false;
    const unsub = subscribeAuth(async (u) => {
      userRef.current = u; setUser(u); setAuthReady(true);
      if (!u) { profileRef.current = null; setProfile(null); return; }
      setProfileLoading(true);
      try {
        const { profile: loaded, offline } = await getUserProgress(u);
        if (cancelled) return;
        if (offline) toast("Offline mode — progress saved locally");
        const { profile: rolled, result } = await rolloverLeague(u.uid, loaded);
        if (cancelled) return;
        let p = regenHearts(rolled);
        if (p !== loaded) await saveUserProgress(u.uid, p);
        p = { ...p };
        profileRef.current = p; setProfile(p);
        applyTheme(p.theme || readTheme());
        if (result === "up") toast(`🎉 Promoted to the ${LEAGUES[p.league][0]} League!`, 4000);
        if (result === "down") toast(`📉 Demoted to the ${LEAGUES[p.league][0]} League. New week, fresh start!`, 4000);
      } finally { if (!cancelled) setProfileLoading(false); }
    });
    return () => { cancelled = true; unsub(); };
  }, [applyTheme, toast]);

  // Heart regeneration tick (legacy setInterval(heartTick, 1000))
  useEffect(() => {
    const id = setInterval(() => { updateProfile((p) => regenHearts(p)); }, 1000);
    return () => clearInterval(id);
  }, [updateProfile]);

  const openHeartsModal = useCallback((pending: PendingLesson | null = null) => setHeartsModal({ open: true, pending }), []);
  const closeHeartsModal = useCallback(() => setHeartsModal({ open: false, pending: null }), []);

  const value = useMemo<AppState>(() => ({ user, authReady, profile, profileLoading, updateProfile, toast, theme, toggleTheme, heartsModal, openHeartsModal, closeHeartsModal }),
    [user, authReady, profile, profileLoading, updateProfile, toast, theme, toggleTheme, heartsModal, openHeartsModal, closeHeartsModal]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <div id="toast" className={"toast" + (toastState.visible ? "" : " hidden")}>{toastState.msg}</div>
    </Ctx.Provider>
  );
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp must be used inside <AppProvider>");
  return v;
}
