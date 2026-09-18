# Migration map — legacy static app → Next.js

| Old functionality | New location | Verified |
|---|---|---|
| `index.html` auth screen | `components/auth/AuthScreen.tsx` | ✅ screenshot diff + e2e signup/login/logout |
| `index.html` topbar | `components/layout/TopBar.tsx` | ✅ e2e (streak/xp/hearts/timer/gems/theme) |
| `index.html` home/path | `components/home/LearningPath.tsx` | ✅ pixel-identical screenshot |
| `index.html` lesson screen | `components/lesson/LessonPlayer.tsx` | ✅ e2e all 7 activity types |
| `index.html` results | `components/lesson/ResultsScreen.tsx` | ✅ e2e |
| `index.html` hearts modal | `components/hearts/HeartsModal.tsx` | ✅ e2e (open from topbar, out-of-hearts mid-lesson) |
| `index.html` league screen | `components/league/LeagueScreen.tsx` | ✅ e2e (Firestore cohort query) |
| `index.html` profile | `components/profile/ProfileScreen.tsx` | ✅ e2e (badges, league history) |
| `index.html` toast | `AppProvider` (`#toast`) | ✅ |
| `index.html` inline theme script | `app/layout.tsx` | ✅ dark persisted across reload |
| `styles.css` (verbatim) | `app/globals.css` | ✅ unchanged file |
| `app.js` Firebase init/persistence | `lib/firebase/client.ts` | ✅ |
| `app.js` auth handlers + friendly errors | `lib/firebase/auth.ts`, `hooks/useAuth.ts` | ✅ |
| `app.js` loadProfile/saveProfile (+localStorage fallback) | `lib/progress/profile.ts` | ✅ |
| `app.js` rolloverLeague | `lib/progress/league.ts` | ✅ (logic ported 1:1) |
| `app.js` regenHearts/heartTick/nextHeartMs | `lib/gamification/hearts.ts`, `AppProvider` 1s tick | ✅ timer shown |
| `app.js` startLesson/nextExercise/checkAnswer/finishLesson | `hooks/useLesson.ts`, `lib/gamification/lessonResult.ts` | ✅ XP/gems/streak/crowns match |
| `app.js` renderExercise (mc/tf/dc/fill/je/match/order) | `components/lesson/activities/*` | ✅ |
| `app.js` badges | `lib/gamification/achievements.ts` | ✅ |
| `app.js` theme toggle | `AppProvider.toggleTheme` | ✅ |
| `curriculum.js` helpers/registry | `data/curriculum/authoring.ts` | ✅ |
| `curriculum-acct-1/2/3.js`, `curriculum-tax.js`, `curriculum-acct-more-1..4.js` | `data/curriculum/*.ts` (content verbatim) | ✅ `npm run verify:curriculum` deep-equal, 146 lessons / 1,267 exercises |
| `firebase-config.js` + `build-config.js` + `.env` | `lib/firebase/config.ts` + `NEXT_PUBLIC_*` env vars | ✅ |
| `firestore.rules`, `firestore.indexes.json` | copied unchanged | ✅ |
| `package.json` static scripts | Next.js scripts | ✅ build passes |
| `netlify` (none) | `netlify.toml` + `@netlify/plugin-nextjs` | — (config added; deploy not run from sandbox) |
