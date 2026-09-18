# LedgerLingo — Next.js edition

Duolingo-style bookkeeping, payroll and tax trainer. Same design, same 146 lessons / 1,267 exercises,
same Firebase backend as the original static app — now on Next.js 15 (App Router) + React 19 + TypeScript.

## Run locally
```bash
npm install
cp .env.example .env.local     # fill in Firebase values (already filled in this repo)
npm run dev                    # http://localhost:3000
```
Production: `npm run build && npm start`.

## Scripts
| script | purpose |
|---|---|
| `npm run dev` | dev server |
| `npm run build` | production build (pre-renders all 146 lesson routes) |
| `npm start` | serve production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run verify:curriculum` | proves the TS curriculum is deep-equal to `legacy/curriculum-*.js` |

## Environment variables
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```
Firebase web config is public by design; security comes from `firestore.rules` + Auth authorized domains.

## Netlify
`netlify.toml` is included: build command `npm run build`, publish `.next`, plugin `@netlify/plugin-nextjs`.
Set the six env vars in Site settings → Environment variables. Add your Netlify domain to
Firebase → Authentication → Settings → Authorized domains.

## Firebase (unchanged)
- Collection `ledgerlingo_users/{uid}` — same document shape, existing data works as-is.
- `firestore.rules` and `firestore.indexes.json` unchanged (deploy with `firebase deploy --only firestore`).
- Enable Email/Password, Google and (optionally) Anonymous sign-in in the console.

## Architecture
```
app/                 routes (layout, /, /lesson/[lessonId], /league, /profile, not-found, error)
components/
  providers/         AppProvider — auth user, profile, theme, toast, hearts modal
  layout/            AppShell (auth gate), TopBar, LoadingScreen
  auth/ home/ lesson/ hearts/ league/ profile/
  lesson/activities/ ActivityRenderer + MultipleChoice, TrueFalse, DebitCredit, FillBlank,
                     JournalEntry, Matching, Ordering
hooks/               useAuth, useLesson, useProgress, useGamification
lib/
  firebase/          client (app/auth/firestore singletons), auth, users (Firestore access)
  curriculum/        getCourses / getCourse / getUnit / getLesson / getActivity
  gamification/      constants, hearts, achievements, lessonResult (pure functions), time
  progress/          profile (load/save w/ localStorage fallback), league (weekly rollover)
data/curriculum/     authoring.ts (typed helpers) + 8 content files (verbatim content) + index.ts
types/               curriculum.ts, user.ts
legacy/              original static app, kept for reference (not built or served)
```

## Routes
| URL | screen |
|---|---|
| `/` | auth screen (signed out) / learning path (signed in) |
| `/lesson/[lessonId]` | lesson player (`?practice=heart` = earn-a-heart practice) |
| `/league` | weekly league leaderboard |
| `/profile` | profile, achievements, log out |

## Gamification (unchanged)
XP 10/lesson (+5 perfect, halved in practice) · hearts 5 max, 1 per 30 min, live countdown ·
gems +5/lesson, +5 perfect, +20 promotion, refill = 50 · 10 leagues, top 10 promote, rank >25 demote ·
streaks, crowns, 11 achievements, dark mode.
