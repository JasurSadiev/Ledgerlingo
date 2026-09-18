import {
  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInAnonymously,
  signInWithEmailAndPassword, signInWithPopup, signOut as fbSignOut, updateProfile, type User,
} from "firebase/auth";
import type { AuthUser } from "@/types/user";
import { getFirebaseAuth } from "./client";

export const toAuthUser = (u: User): AuthUser => ({ uid: u.uid, email: u.email, displayName: u.displayName, isAnonymous: u.isAnonymous });

export function subscribeAuth(cb: (user: AuthUser | null) => void): () => void {
  return onAuthStateChanged(getFirebaseAuth(), (u) => cb(u ? toAuthUser(u) : null));
}

export async function signUpWithEmail(email: string, password: string, name: string): Promise<void> {
  const cred = await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
  if (name) await updateProfile(cred.user, { displayName: name });
}
export const signInWithEmail = (email: string, password: string) => signInWithEmailAndPassword(getFirebaseAuth(), email, password).then(() => undefined);
export const signInWithGoogle = () => signInWithPopup(getFirebaseAuth(), new GoogleAuthProvider()).then(() => undefined);
export const signInAsGuest = () => signInAnonymously(getFirebaseAuth()).then(() => undefined);
export const signOut = () => fbSignOut(getFirebaseAuth());

const MESSAGES: Record<string, string> = {
  "auth/invalid-credential": "Wrong email or password.",
  "auth/user-not-found": "No account with that email.",
  "auth/wrong-password": "Wrong password.",
  "auth/email-already-in-use": "That email is already registered — try logging in.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/invalid-email": "Please enter a valid email.",
  "auth/operation-not-allowed": "This sign-in method isn't enabled in the Firebase console yet (Authentication → Sign-in method).",
  "auth/admin-restricted-operation": "Anonymous sign-in isn't enabled in the Firebase console yet.",
  "auth/popup-closed-by-user": "Popup closed before signing in.",
  "auth/unauthorized-domain": "This domain isn't authorized in Firebase Auth settings (add it under Authentication → Settings → Authorized domains).",
};

export function friendlyAuthError(err: unknown): string {
  const e = err as { code?: string; message?: string };
  return (e.code && MESSAGES[e.code]) || e.message || "Something went wrong. Please try again.";
}
