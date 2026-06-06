/* ilk.ai — render + i18n. content.js'i okur, sayfayı kurar. */
(function () {
  "use strict";
  const S = window.SITE;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // dil: localStorage > tarayıcı > tr
  function getLang() {
    const saved = localStorage.getItem("ilkai_lang");
    if (saved === "tr" || saved === "en") return saved;
    return (navigator.language || "tr").toLowerCase().startsWith("en") ? "en" : "tr";
  }
  let lang = getLang();

  function setLang(l) {
    lang = l;
    localStorage.setItem("ilkai_lang", l);
    document.documentElement.lang = l;
    render();
  }

  /* ---------- ortak parçalar ---------- */
  function header(page) {
    const t = S.ui[lang], n = t.nav, other = lang === "tr" ? "en" : "tr";
    const link = (href, key) =>
      `<a href="${href}" class="${page === key ? "active" : ""}">${esc(n[key])}</a>`;
    return `
    <header class="site-header"><div class="wrap"><nav class="nav">
      <a class="logo" href="/">ilk<span class="dot">.ai</span></a>
      <button class="nav-toggle" aria-label="Menu" data-toggle>☰</button>
      <div class="nav-links" id="navlinks">
        ${link("/", "home")}
        ${link("/world-sport-daily", "wsd")}
        ${link("/ostomyfan", "osto")}
        <a href="#contact">${esc(n.contact)}</a>
        <button class="lang-btn" data-lang="${other}">${esc(t.langLabel)}</button>
      </div>
    </nav></div></header>`;
  }

  function footer() {
    const t = S.ui[lang];
    return `
    <footer class="site-footer" id="contact"><div class="wrap"><div class="foot">
      <div>
        <div class="brand">ilk<span style="background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent">.ai</span></div>
        <div class="tag">${esc(t.footerTag)}</div>
      </div>
      <div style="text-align:right">
        <div><a class="mail" href="mailto:${esc(S.email)}">${esc(S.email)}</a></div>
        <div class="small">© ${S.year} ${esc(S.brand)} — ${esc(t.footerRights)}</div>
      </div>
    </div></div></footer>`;
  }

  const statGrid = (stats) =>
    `<div class="stats">${stats
      .map((s) => `<div class="stat reveal"><div class="v grad">${esc(s.value)}</div><div class="l">${esc(s.label)}</div></div>`)
      .join("")}</div>`;

  /* ---------- ANA SAYFA ---------- */
  function renderHome() {
    const d = S.home[lang], t = S.ui[lang];
    return `
    ${header("home")}
    <main>
      <section class="hero"><div class="wrap">
        <span class="kicker">${esc(d.heroKicker)}</span>
        <h1>${esc(d.heroTitle).replace(/(AI)/, '<span class="grad">$1</span>')}</h1>
        <p class="sub">${esc(d.heroSub)}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/world-sport-daily">${esc(d.heroPrimary)}</a>
          <a class="btn btn-ghost" href="#contact">${esc(d.heroSecondary)}</a>
        </div>
        <div class="hero-note">${esc(d.heroNote)}</div>
      </div></section>

      <section class="section"><div class="wrap">
        ${statGrid(d.stats)}
      </div></section>

      <section class="section section-soft"><div class="wrap">
        <span class="eyebrow reveal">${esc(d.problemTitle)}</span>
        <h2 class="reveal">${esc(d.problemTitle)}</h2>
        <p class="lead reveal">${esc(d.problemBody)}</p>
      </div></section>

      <section class="section"><div class="wrap">
        <h2 class="reveal">${esc(d.howTitle)}</h2>
        <p class="lead reveal">${esc(d.howBody)}</p>
        <div class="grid grid-3">
          ${d.pipeline
            .map(
              (p) =>
                `<div class="feature reveal"><div class="ic">${esc(p.icon)}</div><h4>${esc(p.title)}</h4><p>${esc(p.body)}</p></div>`
            )
            .join("")}
        </div>
      </div></section>

      <section class="section section-soft"><div class="wrap">
        <h2 class="reveal">${esc(d.proofTitle)}</h2>
        <p class="lead reveal">${esc(d.proofBody)}</p>
        <div class="grid grid-2">
          ${d.projects
            .map(
              (p) =>
                `<a class="card project reveal" href="${p.href}">
                  <span class="tag">${esc(p.tag)}</span>
                  <h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p>
                  <span class="more">${esc(p.cta)}</span>
                </a>`
            )
            .join("")}
        </div>
      </div></section>

      <section class="section"><div class="wrap">
        <h2 class="reveal">${esc(d.econTitle)}</h2>
        <p class="lead reveal">${esc(d.econBody)}</p>
        <div class="kv">
          ${d.econPoints.map((p) => `<div class="row reveal"><div class="k">${esc(p.k)}</div><div class="v">${esc(p.v)}</div></div>`).join("")}
        </div>
      </div></section>

      <section class="section section-soft"><div class="wrap">
        <h2 class="reveal">${esc(d.visionTitle)}</h2>
        <p class="lead reveal">${esc(d.visionBody)}</p>
        <div class="timeline">
          ${d.visionSteps
            .map((s) => `<div class="tnode reveal"><span class="phase">${esc(s.phase)}</span><h4>${esc(s.title)}</h4><p>${esc(s.body)}</p></div>`)
            .join("")}
        </div>
      </div></section>

      <section class="section"><div class="wrap">
        <div class="cta-band reveal">
          <h2>${esc(d.ctaTitle)}</h2>
          <p>${esc(d.ctaBody)}</p>
          <a class="btn btn-primary" href="mailto:${esc(S.email)}">${esc(t.contactCta)}</a>
        </div>
      </div></section>
    </main>
    ${footer()}`;
  }

  /* ---------- WORLD SPORT DAILY ---------- */
  function renderWSD() {
    const d = S.wsd[lang], t = S.ui[lang], L = S.links;
    return `
    ${header("wsd")}
    <main>
      <section class="detail-hero"><div class="wrap">
        <a class="back" href="/">${esc(t.backHome)}</a>
        <span class="kicker">${esc(d.kicker)}</span>
        <h1>${esc(d.title)}</h1>
        <p class="sub">${esc(d.sub)}</p>
        <div class="detail-actions">
          <a class="btn btn-primary" href="${L.wsdYouTube}" target="_blank" rel="noopener">${esc(d.ctaPrimary)}</a>
          <a class="btn btn-ghost" href="${L.wsdInstagram}" target="_blank" rel="noopener">${esc(d.ctaSecondary)}</a>
        </div>
      </div></section>

      <section class="section"><div class="wrap">${statGrid(d.stats)}</div></section>

      <section class="section section-soft"><div class="wrap">
        <h2 class="reveal">${esc(d.whatTitle)}</h2>
        <p class="lead reveal">${esc(d.whatBody)}</p>
      </div></section>

      <section class="section"><div class="wrap">
        <h2 class="reveal">${esc(d.sigTitle)}</h2>
        <p class="lead reveal">${esc(d.sigBody)}</p>
      </div></section>

      <section class="section section-soft"><div class="wrap">
        <h2 class="reveal">${esc(d.howTitle)}</h2>
        <div class="steps">
          ${d.steps
            .map((s) => `<div class="step reveal"><div class="num">${esc(s.n)}</div><div class="body"><h4>${esc(s.t)}</h4><p>${esc(s.d)}</p></div></div>`)
            .join("")}
        </div>
      </div></section>

      <section class="section"><div class="wrap">
        <h2 class="reveal">${esc(d.moatTitle)}</h2>
        <ul class="bullets reveal">${d.moatPoints.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div></section>

      <section class="section section-soft"><div class="wrap">
        <h2 class="reveal">${esc(d.proofTitle)}</h2>
        <p class="lead reveal">${esc(d.proofBody)}</p>
        <div class="linklist reveal">
          ${d.proofLinks.map((p) => `<a href="${L[p.key]}" target="_blank" rel="noopener">${esc(p.label)}</a>`).join("")}
        </div>
      </div></section>
    </main>
    ${footer()}`;
  }

  /* ---------- OSTOMYFAN ---------- */
  function renderOsto() {
    const d = S.osto[lang], t = S.ui[lang], L = S.links;
    return `
    ${header("osto")}
    <main>
      <section class="detail-hero"><div class="wrap">
        <a class="back" href="/">${esc(t.backHome)}</a>
        <span class="kicker">${esc(d.kicker)}</span>
        <h1>${esc(d.title)}</h1>
        <p class="sub">${esc(d.sub)}</p>
        <div class="detail-actions">
          <a class="btn btn-primary" href="${L.ostomyfanSite}" target="_blank" rel="noopener">${esc(d.ctaPrimary)}</a>
        </div>
      </div></section>

      <section class="section"><div class="wrap">${statGrid(d.stats)}</div></section>

      <section class="section section-soft"><div class="wrap">
        <h2 class="reveal">${esc(d.whatTitle)}</h2>
        <p class="lead reveal">${esc(d.whatBody)}</p>
      </div></section>

      <section class="section"><div class="wrap">
        <h2 class="reveal">${esc(d.whyTitle)}</h2>
        <p class="lead reveal">${esc(d.whyBody)}</p>
      </div></section>

      <section class="section section-soft"><div class="wrap">
        <h2 class="reveal">${esc(d.strengthsTitle)}</h2>
        <div class="grid grid-2">
          ${d.strengths.map((s) => `<div class="card reveal"><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div>`).join("")}
        </div>
      </div></section>

      <section class="section"><div class="wrap">
        <h2 class="reveal">${esc(d.proofTitle)}</h2>
        <p class="lead reveal">${esc(d.proofBody)}</p>
        <div class="linklist reveal">
          ${d.proofLinks.map((p) => `<a href="${L[p.key]}" target="_blank" rel="noopener">${esc(p.label)}</a>`).join("")}
        </div>
      </div></section>
    </main>
    ${footer()}`;
  }

  const RENDERERS = { home: renderHome, wsd: renderWSD, osto: renderOsto };

  function render() {
    const page = document.body.dataset.page || "home";
    document.body.innerHTML = (RENDERERS[page] || renderHome)();
    document.documentElement.lang = lang;
    wire();
    observeReveal();
  }

  function wire() {
    document.querySelectorAll("[data-lang]").forEach((b) =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );
    const toggle = document.querySelector("[data-toggle]");
    if (toggle) toggle.addEventListener("click", () => document.getElementById("navlinks").classList.toggle("open"));
  }

  function observeReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
  }

  document.addEventListener("DOMContentLoaded", render);
})();
