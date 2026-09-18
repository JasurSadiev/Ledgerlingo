# 📒 LedgerLingo — Duolingo for Bookkeeping & Payroll

A gamified, bite-sized learning app for bookkeeping and payroll accounting, built as a
static web app with **Firebase (Auth + Firestore)** as the backend.

## Features
- **2 tracks, 39 units, 146 lessons, ~1,270 exercises** — every topic has ≥3 lessons; core topics (Debits & Credits, Adjusting Entries, Income Statement, Payroll…) have 5
  - 📒 **Accounting** — all 33 AccountingCoach topics in their official order (01 Accounting Basics … 20 Payroll Accounting … 33 Standard Costing). Each unit is written so that finishing it makes you comfortable with any question on that topic: computations, journal entries, judgment calls, GAAP references.
  - 🏛️ **Tax Pro** — an advanced track for experienced accountants: ASC 740 provisions & valuation allowances, MACRS/§179/bonus (2026 figures, OBBBA), §1245/§1250 recapture & §1031, C/S/partnership taxation (E&P, basis ordering, §704(c), §199A), advanced individual (2026 standard deduction, SALT cap, NIIT, AMT, passive losses, §1202), payroll tax compliance (TFRP, §3509, VCSP, multi-state, fringes), accounting methods & M&A (§451, §461, §481(a), §338(h)(10), §1060, §382).
- **7 exercise types:** multiple choice, true/false, debit-or-credit tap, numeric fill-in, journal-entry builder, matching pairs, step ordering
- **Duolingo mechanics:** hearts (lose one per mistake, regen 1 per 30 min), XP, daily streaks, crowns per lesson, missed questions re-queued, unlockable path, achievements
- **Weekly Leagues (🏆):** Bronze → Silver → Gold → Sapphire → Ruby → Emerald → Amethyst → Pearl → Obsidian → Diamond. Learners compete on XP earned this week (Mon–Sun); top 10 promote, bottom 5 demote, zero-XP weeks demote. Resolved automatically on the learner's first visit of a new week.
- **Auth:** email/password, Google, and anonymous guest
- Offline fallback to localStorage if Firestore is unreachable

## Firebase setup (one-time, in the Firebase console for project `online-store-fc218`)
1. **Authentication → Sign-in method:** enable *Email/Password*, *Google*, and *Anonymous*.
2. **Authentication → Settings → Authorized domains:** add the domain you host on (and any preview domain).
3. **Firestore Database:** create a database (production mode), then paste `firestore.rules` into *Rules* and publish.
4. **Firestore → Indexes:** the league query needs a composite index on `ledgerlingo_users` (`league` ASC, `weekKey` ASC, `weekXp` DESC). Either deploy `firestore.indexes.json` (`firebase deploy --only firestore:indexes`) or click the link Firestore prints in the browser console the first time the query runs.

## Run locally
```bash
cd ledgerlingo
python3 -m http.server 8080
# open http://localhost:8080
```
Or deploy with `firebase deploy --only hosting` after `firebase init hosting` (public dir: `.`).

## Files
| File | Purpose |
|---|---|
| `index.html` | App shell / screens |
| `styles.css` | Duolingo-style UI |
| `app.js` | Auth, Firestore sync, lesson engine, gamification |
| `curriculum.js` | Track registry + authoring helpers (`mc, tf, dc, fill, je, match, order, unit`) |
| `curriculum-acct-1/2/3.js` | Accounting topics 01–08, 09–19, 20–33 |
| `curriculum-tax.js` | Tax Pro track |
| `curriculum-acct-more-1..4.js` | Scenario-based expansion lessons (added via `addLessons(unitId, [...])`) |
| `firestore.indexes.json` | Composite index for leagues |
| `firebase-config.js` | Firebase project config |
| `firestore.rules` | Security rules |

## Adding content
Call `unit(trackId, id, title, desc, [[lessonTitle, tip, [exercises...]], ...])` in any curriculum-*.js file using the helpers from `window.LL`. Run the validator: `node -e 'global.window={};["curriculum.js","curriculum-acct-1.js","curriculum-acct-2.js","curriculum-acct-3.js","curriculum-tax.js"].forEach(f=>require("./"+f));console.log(window.CURRICULUM.tracks.map(t=>t.title+": "+t.units.length+" units"))'`

## Sources
Content adapted from AccountingCoach.com's 33-topic outline, IRS Publications 15/15-T/946/542, the Internal Revenue Code incl. OBBBA (P.L. 119-21), Rev. Proc. 2025-32 (2026 inflation adjustments), ASC 740/842/606/360, and the SSA 2026 wage base ($184,500). Tax figures are for tax year 2026 unless stated. Educational purposes only — not tax or legal advice.

## Dark mode, hearts & gems
- Theme toggle (🌙/☀️) in the top bar / login screen; saved to localStorage and the Firestore profile.
- Hearts: max 5, one regenerates every 30 min; the top bar shows a live countdown. Click the hearts to open the recovery panel.
- Out of hearts? Practice your weakest completed lesson (≥70% accuracy earns +1 heart, free) or refill all hearts for 50 gems.
- Gems: +5 per lesson, +10 for a perfect score, +20 on league promotion; practice gives half.
