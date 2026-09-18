/** Firebase client singletons (browser only). Same project/collection as the legacy app. */
import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, getFirestore, type Firestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

export const USERS_COLLECTION = "ledgerlingo_users";

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (!app) app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return app;
}

export function getFirebaseAuth(): Auth { return getAuth(getFirebaseApp()); }

export function getDb(): Firestore {
  if (db) return db;
  const a = getFirebaseApp();
  try {
    // Equivalent of legacy db.enablePersistence({ synchronizeTabs: true })
    db = initializeFirestore(a, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) });
  } catch {
    db = getFirestore(a);
  }
  return db;
}
