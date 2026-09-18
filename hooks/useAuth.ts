"use client";
import { useApp } from "@/components/providers/AppProvider";
import { friendlyAuthError, signInAsGuest, signInWithEmail, signInWithGoogle, signOut, signUpWithEmail } from "@/lib/firebase/auth";

export function useAuth() {
  const { user, authReady } = useApp();
  return { user, authReady, signInWithEmail, signUpWithEmail, signInWithGoogle, signInAsGuest, signOut, friendlyAuthError };
}
