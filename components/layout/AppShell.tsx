"use client";
/** Gate: auth screen when signed out, top bar + content when signed in (legacy #screen-auth / #app toggle). */
import type { ReactNode } from "react";
import AuthScreen from "@/components/auth/AuthScreen";
import HeartsModal from "@/components/hearts/HeartsModal";
import { useApp } from "@/components/providers/AppProvider";
import TopBar from "./TopBar";
import LoadingScreen from "./LoadingScreen";

export default function AppShell({ children }: { children: ReactNode }) {
  const { user, authReady, profile, profileLoading } = useApp();
  if (!authReady) return <LoadingScreen />;
  if (!user) return <AuthScreen />;
  if (!profile || profileLoading) return <LoadingScreen label="Loading your progress…" />;
  return (
    <div id="app">
      <TopBar />
      {children}
      <HeartsModal />
    </div>
  );
}
