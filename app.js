/* LedgerLingo — main app logic */
(function () {
  "use strict";

  // ---------- Firebase ----------
  firebase.initializeApp(window.firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

  const $ = (s) => document.querySelector(s);
  const C = window.CURRICULUM;
  const XP_PER_LESSON = 10, MAX_HEARTS = 5, HEART_MS = 30 * 60e3, REFILL_COST = 50;
  const LEAGUES = [["Bronze", "🥉"], ["Silver", "🥈"], ["Gold", "🥇"], ["Sapphire", "💎"], ["Ruby", "❤️‍🔥"], ["Emerald", "🟢"], ["Amethyst", "🟣"], ["Pearl", "⚪"], ["Obsidian", "⚫"], ["Diamond", "💠"]];
  const PROMOTE = 10, DEMOTE_FROM = 25, LEAGUE_SIZE = 30;
  // ISO week key (Monday start, UTC) e.g. 2026-W38
  const weekKey = (d = new Date()) => { const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); const day = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - day); const y = t.getUTCFullYear(); const w = Math.ceil(((t - Date.UTC(y, 0, 1)) / 864e5 + 1) / 7); return `${y}-W${String(w).padStart(2, "0")}`; };
  const weekEnd = () => { const n = new Date(); const day = n.getDay() || 7; const e = new Date(n); e.setHours(0, 0, 0, 0); e.setDate(n.getDate() + (8 - day)); return e; };

  // ---------- State ----------
  let user = null;
  let profile = null;            // { name, xp, streak, bestStreak, lastActive, hearts, heartsLostAt, completed:{lessonId:{crowns,best}}, track }
  let currentTrack = "bookkeeping";
  let lesson = null;             // active lesson session

  // ---------- Helpers ----------
  const todayStr = () => new Date().toISOString().slice(0, 10);
  const yesterdayStr = () => new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const toast = (msg, ms = 2200) => { const t = $("#toast"); t.textContent = msg; t.classList.remove("hidden"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.add("hidden"), ms); };
  const show = (id) => { document.querySelectorAll("#app > main").forEach((m) => m.classList.add("hidden")); $(id).classList.remove("hidden"); window.scrollTo(0, 0); };
  const allLessons = (track) => track.units.flatMap((u) => u.lessons.map((l) => ({ ...l, unit: u })));
  const defaultProfile = (u) => ({ name: u.displayName || (u.email ? u.email.split("@")[0] : "Guest"), email: u.email || "", xp: 0, streak: 0, bestStreak: 0, lastActive: null, hearts: MAX_HEARTS, heartsLostAt: null, completed: {}, track: "accounting", league: 0, weekKey: weekKey(), weekXp: 0, leagueHistory: [], gems: 0, theme: "light", createdAt: Date.now() });

  // ---------- Auth UI ----------
  let authMode = "login";
  document.querySelectorAll(".auth-tabs .tab").forEach((t) => t.addEventListener("click", () => {
    document.querySelectorAll(".auth-tabs .tab").forEach((x) => x.classList.remove("active"));
    t.classList.add("active"); authMode = t.dataset.mode;
    $("#auth-name").style.display = authMode === "signup" ? "block" : "none";
    $("#auth-submit").textContent = authMode === "signup" ? "Create account" : "Log in";
    $("#auth-msg").textContent = "";
  }));
  $("#auth-form").addEventListener("submit", async (e) => {
    e.preventDefault(); $("#auth-msg").textContent = "";
    const email = $("#auth-email").value.trim(), pass = $("#auth-pass").value;
    try {
      if (authMode === "signup") {
        const cred = await auth.createUserWithEmailAndPassword(email, pass);
        const name = $("#auth-name").value.trim();
        if (name) await cred.user.updateProfile({ displayName: name });
      } else await auth.signInWithEmailAndPassword(email, pass);
    } catch (err) { $("#auth-msg").textContent = friendlyAuthError(err); }
  });
  $("#btn-google").addEventListener("click", async () => {
    try { await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); }
    catch (err) { $("#auth-msg").textContent = friendlyAuthError(err); }
  });
  $("#btn-guest").addEventListener("click", async () => {
    try { await auth.signInAnonymously(); }
    catch (err) { $("#auth-msg").textContent = friendlyAuthError(err); }
  });
  function friendlyAuthError(err) {
    const m = { "auth/invalid-credential": "Wrong email or password.", "auth/user-not-found": "No account with that email.", "auth/wrong-password": "Wrong password.", "auth/email-already-in-use": "That email is already registered — try logging in.", "auth/weak-password": "Password must be at least 6 characters.", "auth/invalid-email": "Please enter a valid email.", "auth/operation-not-allowed": "This sign-in method isn't enabled in the Firebase console yet (Authentication → Sign-in method).", "auth/admin-restricted-operation": "Anonymous sign-in isn't enabled in the Firebase console yet.", "auth/popup-closed-by-user": "Popup closed before signing in.", "auth/unauthorized-domain": "This domain isn't authorized in Firebase Auth settings (add it under Authentication → Settings → Authorized domains)." };
    return m[err.code] || err.message;
  }
  $("#btn-logout").addEventListener("click", () => auth.signOut());

  // ---------- Auth state → load profile ----------
  auth.onAuthStateChanged(async (u) => {
    user = u;
    if (!u) { $("#app").classList.add("hidden"); $("#screen-auth").classList.remove("hidden"); profile = null; return; }
    $("#screen-auth").classList.add("hidden"); $("#app").classList.remove("hidden");
    await loadProfile();
    currentTrack = C.tracks.some((t) => t.id === profile.track) ? profile.track : C.tracks[0].id;
    renderHome();
  });

  async function loadProfile() {
    const ref = db.collection("ledgerlingo_users").doc(user.uid);
    try {
      const snap = await ref.get();
      profile = snap.exists ? { ...defaultProfile(user), ...snap.data() } : defaultProfile(user);
      if (!snap.exists) await ref.set(profile);
    } catch (err) {
      console.warn("Firestore unavailable, using local storage", err);
      profile = JSON.parse(localStorage.getItem("ll_" + user.uid) || "null") || defaultProfile(user);
      toast("Offline mode — progress saved locally");
    }
    // streak check: reset if a day was missed
    if (profile.lastActive && profile.lastActive !== todayStr() && profile.lastActive !== yesterdayStr()) profile.streak = 0;
    await rolloverLeague();
    if (profile.gems === undefined) profile.gems = 0;
    applyTheme(profile.theme || document.documentElement.dataset.theme || "light");
    regenHearts();
    updateTopbar();
  }
  // Weekly league rollover: on first load in a new week, resolve last week's result
  async function rolloverLeague() {
    if (profile.league === undefined) { profile.league = 0; profile.weekKey = weekKey(); profile.weekXp = 0; }
    if (profile.weekKey === weekKey()) return;
    let result = "stay";
    try {
      const snap = await db.collection("ledgerlingo_users").where("league", "==", profile.league).where("weekKey", "==", profile.weekKey).orderBy("weekXp", "desc").limit(LEAGUE_SIZE).get();
      const rank = snap.docs.findIndex((d) => d.id === user.uid) + 1;
      if (rank > 0 && rank <= PROMOTE && profile.weekXp > 0 && profile.league < LEAGUES.length - 1) { profile.league++; result = "up"; }
      else if ((rank === 0 || rank > DEMOTE_FROM || profile.weekXp === 0) && profile.league > 0) { profile.league--; result = "down"; }
    } catch (e) { if (profile.weekXp === 0 && profile.league > 0) { profile.league--; result = "down"; } }
    profile.leagueHistory = [...(profile.leagueHistory || []), { week: profile.weekKey, xp: profile.weekXp, result }].slice(-12);
    profile.weekKey = weekKey(); profile.weekXp = 0;
    await saveProfile();
    if (result === "up") { profile.gems = (profile.gems || 0) + 20; saveProfile(); }
    if (result === "up") toast(`🎉 Promoted to the ${LEAGUES[profile.league][0]} League!`, 4000);
    if (result === "down") toast(`📉 Demoted to the ${LEAGUES[profile.league][0]} League. New week, fresh start!`, 4000);
  }
  async function saveProfile() {
    localStorage.setItem("ll_" + user.uid, JSON.stringify(profile));
    try { await db.collection("ledgerlingo_users").doc(user.uid).set(profile, { merge: true }); } catch (e) { /* offline */ }
  }
  function regenHearts() {
    // 1 heart every 30 minutes
    if (profile.hearts < MAX_HEARTS && profile.heartsLostAt) {
      const gained = Math.floor((Date.now() - profile.heartsLostAt) / HEART_MS);
      if (gained > 0) { profile.hearts = Math.min(MAX_HEARTS, profile.hearts + gained); profile.heartsLostAt = profile.hearts < MAX_HEARTS ? profile.heartsLostAt + gained * HEART_MS : null; saveProfile(); }
    }
  }
  function updateTopbar() {
    $("#st-streak").textContent = profile.streak; $("#st-xp").textContent = profile.xp; $("#st-hearts").textContent = profile.hearts; $("#st-gems").textContent = profile.gems || 0;
    $("#btn-hearts").classList.toggle("empty", profile.hearts <= 0);
    heartTick();
  }
  const fmtMs = (ms) => { ms = Math.max(0, ms); const m = Math.floor(ms / 6e4), s = Math.floor((ms % 6e4) / 1e3); return `${m}:${String(s).padStart(2, "0")}`; };
  const nextHeartMs = () => (profile.hearts >= MAX_HEARTS || !profile.heartsLostAt) ? null : profile.heartsLostAt + HEART_MS - Date.now();
  const fullHeartsMs = () => (profile.hearts >= MAX_HEARTS || !profile.heartsLostAt) ? null : profile.heartsLostAt + (MAX_HEARTS - profile.hearts) * HEART_MS - Date.now();
  function heartTick() {
    if (!profile) return;
    const before = profile.hearts; regenHearts();
    if (profile.hearts !== before) { $("#st-hearts").textContent = profile.hearts; $("#btn-hearts").classList.toggle("empty", profile.hearts <= 0); if ($("#lesson-hearts")) $("#lesson-hearts").textContent = profile.hearts; }
    const ms = nextHeartMs();
    $("#st-heart-timer").textContent = ms === null ? "" : fmtMs(ms);
    if (!$("#hearts-modal").classList.contains("hidden")) renderHeartsModal();
  }
  setInterval(heartTick, 1000);

  // ---------- Hearts modal ----------
  $("#btn-hearts").addEventListener("click", () => openHeartsModal());
  $("#hearts-close").addEventListener("click", () => $("#hearts-modal").classList.add("hidden"));
  $("#hearts-modal").addEventListener("click", (e) => { if (e.target.id === "hearts-modal") $("#hearts-modal").classList.add("hidden"); });
  let pendingLesson = null; // lesson the user wanted to start when out of hearts
  function openHeartsModal(pending) { pendingLesson = pending || null; $("#hearts-modal").classList.remove("hidden"); renderHeartsModal(); }
  function renderHeartsModal() {
    const h = profile.hearts;
    $("#hm-emoji").textContent = h <= 0 ? "💔" : "❤️";
    $("#hm-title").textContent = h <= 0 ? "You're out of hearts!" : h === MAX_HEARTS ? "Hearts are full" : `${h} of ${MAX_HEARTS} hearts`;
    $("#hm-hearts").innerHTML = Array.from({ length: MAX_HEARTS }, (_, i) => `<span class="${i < h ? "" : "off"}">❤️</span>`).join("");
    const n = nextHeartMs(), f = fullHeartsMs();
    $("#hm-timer").textContent = n === null ? "Go make some journal entries!" : `Next heart in ${fmtMs(n)} · Full in ${fmtMs(f)}`;
    const gems = profile.gems || 0;
    $("#hm-refill").disabled = h >= MAX_HEARTS || gems < REFILL_COST;
    $("#hm-refill-cost").textContent = h >= MAX_HEARTS ? "Already full" : gems < REFILL_COST ? `Costs ${REFILL_COST} gems — you have ${gems}` : `Costs ${REFILL_COST} gems (you have ${gems})`;
    const hasPractice = C.tracks.some((t) => t.units.some((u) => u.lessons.some((l) => profile.completed[l.id])));
    $("#hm-practice").disabled = h >= MAX_HEARTS || !hasPractice;
    $("#hm-practice").querySelector("small").textContent = !hasPractice ? "Complete a lesson first to unlock practice" : "Review a completed lesson — free, +1 heart";
  }
  $("#hm-refill").addEventListener("click", async () => {
    if ((profile.gems || 0) < REFILL_COST || profile.hearts >= MAX_HEARTS) return;
    profile.gems -= REFILL_COST; profile.hearts = MAX_HEARTS; profile.heartsLostAt = null;
    await saveProfile(); updateTopbar(); $("#hearts-modal").classList.add("hidden"); toast("❤️ Hearts refilled!");
    if (pendingLesson) { const p = pendingLesson; pendingLesson = null; startLesson(p.l, p.u, p.t); }
  });
  $("#hm-practice").addEventListener("click", () => {
    // pick the completed lesson with the lowest best score (weakest skill), ties → least recently practiced
    const done = C.tracks.flatMap((t) => t.units.flatMap((u) => u.lessons.filter((l) => profile.completed[l.id]).map((l) => ({ l, u, t, c: profile.completed[l.id] }))));
    if (!done.length) return;
    done.sort((a, b) => (a.c.best - b.c.best) || ((a.c.last || 0) - (b.c.last || 0)));
    $("#hearts-modal").classList.add("hidden");
    startLesson(done[0].l, done[0].u, done[0].t, { earnHeart: true });
  });

  // ---------- Theme ----------
  function applyTheme(t) { document.documentElement.dataset.theme = t; $("#btn-theme").textContent = t === "dark" ? "☀️" : "🌙"; $("#auth-theme").textContent = t === "dark" ? "☀️" : "🌙"; try { localStorage.setItem("ll_theme", t); } catch (e) {} }
  $("#auth-theme").addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  applyTheme(document.documentElement.dataset.theme || "light");
  $("#btn-theme").addEventListener("click", () => { const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; applyTheme(t); if (profile) { profile.theme = t; saveProfile(); } });

  // ---------- Home / path ----------
  $("#go-home").addEventListener("click", renderHome);
  $("#btn-back-home").addEventListener("click", renderHome);

  function renderHome() {
    show("#screen-home");
    regenHearts(); updateTopbar();
    const sw = $("#track-switch"); sw.innerHTML = "";
    C.tracks.forEach((t) => {
      const done = allLessons(t).filter((l) => profile.completed[l.id]).length, total = allLessons(t).length;
      const b = document.createElement("button");
      b.className = "track-btn" + (t.id === currentTrack ? " active" : ""); b.style.setProperty("--c", t.color);
      b.innerHTML = `<span>${t.emoji} ${esc(t.title)}</span><small>${done}/${total} lessons</small>`;
      b.onclick = () => { currentTrack = t.id; profile.track = t.id; saveProfile(); renderHome(); };
      sw.appendChild(b);
    });
    const track = C.tracks.find((t) => t.id === currentTrack);
    const path = $("#path"); path.innerHTML = "";
    const summary = document.createElement("div"); summary.className = "track-summary"; summary.innerHTML = `<b>${esc(track.desc)}</b> · ${track.units.length} units · ${allLessons(track).length} lessons`; path.appendChild(summary);
    let unlocked = true, startShown = false, currentUnitEl = null;
    track.units.forEach((u, ui) => {
      const uDone = u.lessons.filter((l) => profile.completed[l.id]).length;
      const isCurrent = unlocked && uDone < u.lessons.length;
      const wrap = document.createElement("section"); wrap.className = "unit" + (isCurrent ? " open" : "");
      const h = document.createElement("div"); h.className = "unit-header"; h.style.background = unlocked ? track.color : "#afafaf";
      h.innerHTML = `<div><small>Unit ${ui + 1} · ${uDone}/${u.lessons.length}</small><h2>${esc(u.title)}</h2><p>${esc(u.desc)}</p></div><span class="chev">▾</span>`;
      h.onclick = () => wrap.classList.toggle("open");
      wrap.appendChild(h);
      const list = document.createElement("div"); list.className = "lessons";
      u.lessons.forEach((l) => {
        const done = profile.completed[l.id];
        const node = document.createElement("div");
        node.className = "node " + (done ? "done" : unlocked ? "current" : "locked"); node.style.setProperty("--c", track.color);
        const icon = done ? "👑" : unlocked ? "★" : "🔒";
        node.innerHTML = `${!done && unlocked && !startShown ? '<div class="start-badge">START</div>' : ""}<button class="circle">${icon}</button><div class="label">${esc(l.title)}</div>${done ? `<div class="crowns">Best: ${done.best}% · ${"👑".repeat(Math.min(done.crowns, 5))}</div>` : ""}`;
        if (!done && unlocked) { startShown = true; }
        if (done || unlocked) node.querySelector(".circle").onclick = () => startLesson(l, u, track);
        list.appendChild(node);
        if (!done) unlocked = false;
      });
      wrap.appendChild(list); path.appendChild(wrap);
      if (isCurrent && !currentUnitEl) currentUnitEl = wrap;
    });
    if (currentUnitEl && currentUnitEl.previousSibling !== summary) setTimeout(() => currentUnitEl.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  // ---------- Lesson engine ----------
  function startLesson(l, unit, track, opts = {}) {
    regenHearts();
    const practice = !!profile.completed[l.id];
    if (profile.hearts <= 0 && !practice) { openHeartsModal({ l, u: unit, t: track }); return; }
    lesson = { def: l, unit, track, queue: shuffle(l.exercises), idx: 0, correct: 0, total: l.exercises.length, wrongOnce: new Set(), answered: false, practice, earnHeart: !!opts.earnHeart && practice };
    if (lesson.earnHeart) toast("Practice mode: finish with ≥ 70% accuracy to earn a heart ❤️", 3500);
    $("#lesson-tip").innerHTML = `<b>💡 Tip:</b> ${esc(l.tip)}`;
    $("#lesson-hearts").textContent = profile.hearts;
    show("#screen-lesson");
    nextExercise();
  }
  $("#lesson-quit").addEventListener("click", () => { if (confirm("Quit this lesson? Progress in it will be lost.")) renderHome(); });

  function nextExercise() {
    const foot = $("#lesson-foot"); foot.className = "lesson-foot"; $("#feedback").innerHTML = "";
    const btn = $("#btn-check"); btn.textContent = "Check"; btn.disabled = true; btn.onclick = checkAnswer;
    $("#lesson-progress").style.width = (lesson.idx / lesson.total) * 100 + "%";
    if (lesson.idx >= lesson.queue.length) return finishLesson();
    lesson.answered = false;
    renderExercise(lesson.queue[lesson.idx]);
  }

  let getAnswer = null; // set per exercise → returns {ok, detail?}
  function renderExercise(ex) {
    const el = $("#exercise"); el.innerHTML = "";
    const h = document.createElement("h2"); h.textContent = ex.q; el.appendChild(h);
    const enable = () => { $("#btn-check").disabled = false; };

    if (ex.type === "mc") {
      const box = document.createElement("div"); box.className = "choices"; let sel = null;
      ex.choices.forEach((c, i) => { const b = document.createElement("button"); b.className = "choice"; b.innerHTML = `<span class="key">${i + 1}</span>${esc(c)}`; b.onclick = () => { if (lesson.answered) return; box.querySelectorAll(".choice").forEach((x) => x.classList.remove("selected")); b.classList.add("selected"); sel = i; enable(); }; box.appendChild(b); });
      el.appendChild(box);
      getAnswer = () => { const ok = sel === ex.answer; box.children[ex.answer].classList.add("correct"); if (!ok) box.children[sel].classList.add("wrong"); return ok; };
    }
    else if (ex.type === "tf") {
      const box = document.createElement("div"); box.className = "choices two"; let sel = null;
      [["True", true], ["False", false]].forEach(([t, v]) => { const b = document.createElement("button"); b.className = "choice"; b.textContent = t; b.onclick = () => { if (lesson.answered) return; box.querySelectorAll(".choice").forEach((x) => x.classList.remove("selected")); b.classList.add("selected"); sel = v; enable(); }; box.appendChild(b); });
      el.appendChild(box);
      getAnswer = () => { const ok = sel === ex.answer; box.children[ex.answer ? 0 : 1].classList.add("correct"); if (!ok) box.children[sel ? 0 : 1].classList.add("wrong"); return ok; };
    }
    else if (ex.type === "dc") {
      const box = document.createElement("div"); box.className = "choices dc-grid"; let sel = null;
      [["debit", "DEBIT", "left side"], ["credit", "CREDIT", "right side"]].forEach(([v, t, s]) => { const b = document.createElement("button"); b.className = "choice"; b.innerHTML = `${t}<small>${s}</small>`; b.onclick = () => { if (lesson.answered) return; box.querySelectorAll(".choice").forEach((x) => x.classList.remove("selected")); b.classList.add("selected"); sel = v; enable(); }; box.appendChild(b); });
      el.appendChild(box);
      getAnswer = () => { const ok = sel === ex.answer; box.children[ex.answer === "debit" ? 0 : 1].classList.add("correct"); if (!ok) box.children[sel === "debit" ? 0 : 1].classList.add("wrong"); return ok; };
    }
    else if (ex.type === "fill") {
      const row = document.createElement("div"); row.className = "fill-row";
      row.innerHTML = `<span>${ex.unit === "$" ? "$" : ""}</span><input type="number" step="any" inputmode="decimal" placeholder="0"><span>${ex.unit && ex.unit !== "$" ? esc(ex.unit) : ""}</span>`;
      el.appendChild(row); const inp = row.querySelector("input"); setTimeout(() => inp.focus(), 50);
      inp.oninput = () => { $("#btn-check").disabled = inp.value.trim() === ""; };
      inp.onkeydown = (e) => { if (e.key === "Enter" && !$("#btn-check").disabled) $("#btn-check").click(); };
      getAnswer = () => { const v = parseFloat(inp.value); const tol = ex.tolerance ?? 0.51; const ok = Math.abs(v - ex.answer) <= tol; inp.style.borderColor = ok ? "var(--green)" : "var(--red)"; inp.disabled = true; return ok; };
    }
    else if (ex.type === "je") {
      const wrap = document.createElement("div");
      wrap.innerHTML = `<div class="je"><div class="je-col debit" data-side="debit"><h4>Debit</h4></div><div class="je-col credit" data-side="credit"><h4>Credit</h4></div></div><div class="je-help">Tap an account to place it in Debit; tap again to move it to Credit; once more to remove.</div><div class="je-bank"></div>`;
      el.appendChild(wrap);
      const bank = wrap.querySelector(".je-bank"), cols = { debit: wrap.querySelector('[data-side="debit"]'), credit: wrap.querySelector('[data-side="credit"]') };
      const placement = {}; // account → side
      const chips = {};
      const rerender = () => {
        Object.values(cols).forEach((c) => { c.querySelectorAll(".chip").forEach((x) => x.remove()); });
        Object.entries(placement).forEach(([acc, side]) => { if (!side) return; const c = document.createElement("div"); c.className = "chip placed in-" + side; c.textContent = acc; cols[side].appendChild(c); });
        Object.entries(chips).forEach(([acc, chip]) => { chip.className = "chip" + (placement[acc] ? " in-" + placement[acc] : ""); });
        $("#btn-check").disabled = !Object.values(placement).some(Boolean);
      };
      shuffle(ex.accounts).forEach((acc) => { const b = document.createElement("button"); b.className = "chip"; b.textContent = acc; b.onclick = () => { if (lesson.answered) return; placement[acc] = placement[acc] === "debit" ? "credit" : placement[acc] === "credit" ? null : "debit"; rerender(); }; chips[acc] = b; bank.appendChild(b); });
      getAnswer = () => {
        const d = Object.entries(placement).filter(([, s]) => s === "debit").map(([a]) => a).sort(), c = Object.entries(placement).filter(([, s]) => s === "credit").map(([a]) => a).sort();
        const ok = JSON.stringify(d) === JSON.stringify([...ex.answer.debit].sort()) && JSON.stringify(c) === JSON.stringify([...ex.answer.credit].sort());
        cols.debit.style.borderColor = cols.credit.style.borderColor = ok ? "var(--green)" : "var(--red)";
        return ok;
      };
    }
    else if (ex.type === "match") {
      const grid = document.createElement("div"); grid.className = "match-grid";
      const lefts = shuffle(ex.pairs.map((p) => p[0])), rights = shuffle([...new Set(ex.pairs.map((p) => p[1]))]);
      const map = new Map(ex.pairs.map((p) => [p[0], p[1]]));
      let selL = null, selR = null, matched = 0, mistakes = 0;
      const mk = (txt, side) => { const b = document.createElement("button"); b.className = "choice"; b.textContent = txt; b.dataset.side = side; b.onclick = () => pick(b); return b; };
      const rows = Math.max(lefts.length, rights.length);
      for (let i = 0; i < rows; i++) { if (lefts[i] !== undefined) grid.appendChild(mk(lefts[i], "L")); if (rights[i] !== undefined) grid.appendChild(mk(rights[i], "R")); }
      const stillNeeded = (txt) => lefts.some((l) => map.get(l) === txt && !grid.querySelector(`[data-side="L"].matched[data-txt="${CSS.escape(l)}"]`));
      grid.querySelectorAll('[data-side="L"]').forEach((b) => b.dataset.txt = b.textContent);
      const pick = (b) => {
        if (lesson.answered) return;
        if (b.dataset.side === "L") { grid.querySelectorAll('[data-side="L"]').forEach((x) => x.classList.remove("selected")); selL = b; } else { grid.querySelectorAll('[data-side="R"]').forEach((x) => x.classList.remove("selected")); selR = b; }
        b.classList.add("selected");
        if (selL && selR) {
          const good = map.get(selL.textContent) === selR.textContent;
          const L = selL, R = selR; selL = selR = null;
          [L, R].forEach((x) => { x.classList.remove("selected"); x.classList.add(good ? "correct" : "wrong"); });
          if (good) {
            matched++;
            setTimeout(() => { L.classList.remove("correct"); L.classList.add("matched"); R.classList.remove("correct"); if (!stillNeeded(R.textContent)) R.classList.add("matched"); }, 350);
            if (matched === lefts.length) $("#btn-check").disabled = false;
          } else { mistakes++; setTimeout(() => [L, R].forEach((x) => x.classList.remove("wrong")), 500); }
        }
      };
      el.appendChild(grid);
      getAnswer = () => mistakes <= 1;
    }
    else if (ex.type === "order") {
      const list = document.createElement("div"); list.className = "order-list";
      let items = shuffle(ex.items); if (JSON.stringify(items) === JSON.stringify(ex.items)) items = [...items.slice(1), items[0]];
      const draw = () => {
        list.innerHTML = "";
        items.forEach((it, i) => { const row = document.createElement("div"); row.className = "order-item"; row.innerHTML = `<span class="num">${i + 1}</span><span>${esc(it)}</span><button data-d="-1" ${i === 0 ? "disabled" : ""}>▲</button><button data-d="1" ${i === items.length - 1 ? "disabled" : ""}>▼</button>`; row.querySelectorAll("button").forEach((b) => b.onclick = () => { if (lesson.answered) return; const d = +b.dataset.d; [items[i], items[i + d]] = [items[i + d], items[i]]; draw(); }); list.appendChild(row); });
      };
      draw(); el.appendChild(list); enable();
      getAnswer = () => { let ok = true; items.forEach((it, i) => { const good = it === ex.items[i]; if (!good) ok = false; list.children[i].classList.add(good ? "correct" : "wrong"); }); return ok; };
    }
  }

  function checkAnswer() {
    if (lesson.answered) return;
    lesson.answered = true;
    const ex = lesson.queue[lesson.idx];
    const ok = getAnswer();
    const foot = $("#lesson-foot"), fb = $("#feedback");
    if (ok) {
      if (!lesson.wrongOnce.has(ex)) lesson.correct++;
      foot.classList.add("ok"); fb.innerHTML = `<h3>${["Nice!", "Correct!", "Excellent!", "Balanced! ✔"][Math.floor(Math.random() * 4)]}</h3>${esc(ex.explain)}`;
    } else {
      foot.classList.add("bad"); fb.innerHTML = `<h3>Not quite.</h3>${esc(ex.explain)}`;
      if (!lesson.practice) { profile.hearts = Math.max(0, profile.hearts - 1); if (!profile.heartsLostAt) profile.heartsLostAt = Date.now(); $("#lesson-hearts").textContent = profile.hearts; updateTopbar(); saveProfile(); }
      if (!lesson.wrongOnce.has(ex)) { lesson.wrongOnce.add(ex); lesson.queue.push(ex); } // re-ask later
    }
    const btn = $("#btn-check"); btn.textContent = "Continue"; btn.disabled = false;
    btn.onclick = () => {
      lesson.idx++;
      if (profile.hearts <= 0 && !lesson.practice) { renderHome(); openHeartsModal({ l: lesson.def, u: lesson.unit, t: lesson.track }); return; }
      nextExercise();
    };
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Enter" && !$("#screen-lesson").classList.contains("hidden") && document.activeElement.tagName !== "INPUT" && !$("#btn-check").disabled) $("#btn-check").click(); });

  async function finishLesson() {
    const acc = Math.round((lesson.correct / lesson.total) * 100);
    let xp = XP_PER_LESSON + (acc === 100 ? 5 : 0);
    if (lesson.practice) xp = Math.round(xp / 2);
    profile.xp += xp;
    let gems = 5 + (acc === 100 ? 5 : 0); if (lesson.practice) gems = Math.round(gems / 2);
    profile.gems = (profile.gems || 0) + gems;
    let heartMsg = "";
    if (lesson.earnHeart && acc >= 70 && profile.hearts < MAX_HEARTS) { profile.hearts++; if (profile.hearts >= MAX_HEARTS) profile.heartsLostAt = null; heartMsg = " · ❤️ +1 heart"; }
    else if (lesson.earnHeart && acc < 70) heartMsg = " · No heart (need ≥ 70%)";
    if (profile.weekKey !== weekKey()) { profile.weekKey = weekKey(); profile.weekXp = 0; }
    profile.weekXp = (profile.weekXp || 0) + xp;
    const prev = profile.completed[lesson.def.id];
    profile.completed[lesson.def.id] = { crowns: (prev ? prev.crowns : 0) + 1, best: Math.max(prev ? prev.best : 0, acc), last: Date.now() };
    const t = todayStr();
    if (profile.lastActive !== t) { profile.streak = profile.lastActive === yesterdayStr() ? profile.streak + 1 : 1; profile.lastActive = t; }
    profile.bestStreak = Math.max(profile.bestStreak || 0, profile.streak);
    await saveProfile(); updateTopbar();
    $("#res-emoji").textContent = acc === 100 ? "🏆" : acc >= 70 ? "🎉" : "💪";
    $("#res-title").textContent = acc === 100 ? "Perfect lesson!" : lesson.practice ? "Practice complete!" : "Lesson complete!";
    $("#res-xp").textContent = "+" + xp; $("#res-acc").textContent = acc + "%"; toast(`💎 +${gems} gems${heartMsg}`, 3500); $("#res-streak").textContent = profile.streak + " 🔥";
    show("#screen-results");
  }
  $("#btn-continue").addEventListener("click", renderHome);

  // ---------- Leagues ----------
  $("#btn-league").addEventListener("click", renderLeague);
  $("#btn-league-back").addEventListener("click", renderHome);
  async function renderLeague() {
    show("#screen-league");
    const L = profile.league || 0;
    $("#league-tiers").innerHTML = LEAGUES.map(([n, e], i) => `<div class="tier ${i === L ? "active" : i < L ? "passed" : ""}" title="${n}">${e}</div>`).join("");
    $("#league-title").textContent = `${LEAGUES[L][0]} League`;
    $("#league-sub").textContent = L === LEAGUES.length - 1 ? `Top league! Stay out of the bottom ${LEAGUE_SIZE - DEMOTE_FROM} to keep your spot` : `Top ${PROMOTE} advance to ${LEAGUES[L + 1][0]}${L > 0 ? ` · Bottom ${LEAGUE_SIZE - DEMOTE_FROM} drop to ${LEAGUES[L - 1][0]}` : ""}`;
    const tick = () => { const ms = weekEnd() - new Date(); const d = Math.floor(ms / 864e5), h = Math.floor((ms % 864e5) / 36e5), m = Math.floor((ms % 36e5) / 6e4); $("#league-timer").textContent = `⏱ ${d}d ${h}h ${m}m left this week`; };
    tick(); clearInterval(renderLeague._t); renderLeague._t = setInterval(tick, 30000);
    const list = $("#league-list"); list.innerHTML = '<li class="muted">Loading…</li>';
    let rows = [];
    try {
      const snap = await db.collection("ledgerlingo_users").where("league", "==", L).where("weekKey", "==", weekKey()).orderBy("weekXp", "desc").limit(LEAGUE_SIZE).get();
      rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (e) { console.warn("league query failed (index needed?)", e); }
    if (!rows.some((r) => r.id === user.uid)) rows.push({ id: user.uid, name: profile.name, weekXp: profile.weekXp || 0 });
    rows.sort((a, b) => (b.weekXp || 0) - (a.weekXp || 0));
    const avatars = ["🧑‍💼", "👩‍💻", "🧔", "👩‍🏫", "🧑‍🔧", "👨‍💼", "👩‍⚖️", "🧑‍🎓", "👨‍🏫", "👩‍🔬"];
    let html = "";
    rows.forEach((r, i) => {
      if (i === 0 && L < LEAGUES.length - 1) html += '<li class="zone up">Promotion zone</li>';
      if (i === PROMOTE && L < LEAGUES.length - 1) html += '<li class="zone">Stay zone</li>';
      if (i === DEMOTE_FROM && L > 0) html += '<li class="zone down">Demotion zone</li>';
      const cls = [r.id === user.uid ? "me" : "", i < PROMOTE && L < LEAGUES.length - 1 ? "promo" : "", i >= DEMOTE_FROM && L > 0 ? "demo" : ""].join(" ");
      const av = avatars[(r.id || "").split("").reduce((s, ch) => s + ch.charCodeAt(0), 0) % avatars.length];
      html += `<li class="${cls}"><span class="rank">${["🥇", "🥈", "🥉"][i] || i + 1}</span><span class="av">${av}</span><span class="nm">${esc(r.name || "Learner")}${r.id === user.uid ? " (you)" : ""}</span><span class="xp">${r.weekXp || 0} XP</span></li>`;
    });
    if (rows.length < 5) html += `<li class="muted" style="justify-content:center;border:0">Invite friends — leagues fill as more learners join this week.</li>`;
    list.innerHTML = html;
  }

  // ---------- Profile ----------
  $("#btn-profile").addEventListener("click", async () => {
    show("#screen-profile");
    $("#pf-name").textContent = profile.name; $("#pf-email").textContent = user.isAnonymous ? "Guest account — sign up to keep progress across devices" : (user.email || "");
    const lessonsDone = Object.keys(profile.completed).length;
    $("#pf-xp").textContent = `${profile.xp} · 💎${profile.gems || 0}`; $("#pf-lessons").textContent = lessonsDone; $("#pf-best").textContent = profile.bestStreak || 0;
    const acct = allLessons(C.tracks.find((t) => t.id === "accounting")), tax = allLessons(C.tracks.find((t) => t.id === "tax"));
    const unitDone = (uid) => { const u = C.tracks.flatMap((t) => t.units).find((x) => x.id === uid); return u && u.lessons.every((l) => profile.completed[l.id]); };
    const badges = [
      ["🐣 First Entry", lessonsDone >= 1], ["⚖️ Debits & Credits", unitDone("t02")], ["📊 Statement Builder", ["t09", "t10", "t12", "t13"].every(unitDone)],
      ["💵 Payroll Pro", unitDone("t20")], ["🧮 Cost Accountant", ["t30", "t31", "t32", "t33"].every(unitDone)], ["📒 AccountingCoach 33", acct.every((l) => profile.completed[l.id])],
      ["🏛️ Tax Pro", tax.every((l) => profile.completed[l.id])], ["🔥 7-Day Streak", (profile.bestStreak || 0) >= 7], ["⚡ 500 XP", profile.xp >= 500],
      ["🏆 Perfectionist", Object.values(profile.completed).some((c) => c.best === 100)], ["🎓 Graduate", [...acct, ...tax].every((l) => profile.completed[l.id])]
    ];
    $("#pf-badges").innerHTML = badges.map(([n, e]) => `<span class="badge ${e ? "earned" : ""}">${n}</span>`).join("");
    const hist = (profile.leagueHistory || []).slice(-4).map((h) => `${h.week}: ${h.xp} XP ${h.result === "up" ? "⬆️" : h.result === "down" ? "⬇️" : "➡️"}`).join(" · ");
    $("#pf-email").textContent += (hist ? `\n${LEAGUES[profile.league || 0][1]} ${LEAGUES[profile.league || 0][0]} League · ${hist}` : ` · ${LEAGUES[profile.league || 0][1]} ${LEAGUES[profile.league || 0][0]} League`);
  });
})();
