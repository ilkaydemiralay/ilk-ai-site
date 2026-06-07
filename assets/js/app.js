/* ilk.ai — render + i18n. content.js'i okur, sayfayı kurar. */
(function () {
  "use strict";
  const S = window.SITE;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

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

  /* ---------- ortak ---------- */
  function header(page) {
    const t = S.ui[lang], n = t.nav, other = lang === "tr" ? "en" : "tr";
    const link = (href, key) => `<a href="${href}" class="${page === key ? "active" : ""}">${esc(n[key])}</a>`;
    return `
    <header class="site-header"><div class="wrap"><nav class="nav">
      <a class="logo" href="/" aria-label="ilk.ai"><img src="/assets/img/logo-dark.png" alt="ilk.ai" /></a>
      <button class="nav-toggle" aria-label="Menu" data-toggle>☰</button>
      <div class="nav-links" id="navlinks">
        ${link("/", "home")}
        ${link("/world-sport-daily", "wsd")}
        ${link("/ostomyfan", "osto")}
        ${link("/dreamercell", "dreamercell")}
        <a href="#contact">${esc(n.contact)}</a>
        <button class="lang-btn" data-lang="${other}">${esc(t.langLabel)}</button>
      </div>
    </nav></div></header>`;
  }

  function footer() {
    const t = S.ui[lang];
    return `
    <footer class="site-footer" id="contact"><div class="wrap"><div class="foot">
      <div class="foot-brand">
        <img src="/assets/img/logo-dark.png" alt="ilk.ai" class="foot-logo" />
        <div class="tag">${esc(t.footerTag)}</div>
      </div>
      <div class="right">
        <a class="mail" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
        <div class="small">© ${S.year} ${esc(S.brand)} — ${esc(t.footerRights)}</div>
      </div>
    </div></div></footer>`;
  }

  /* ---------- proje kartı (ana sayfa) ---------- */
  function projectCard(key) {
    const p = S[key], d = p[lang], a = S.assets[p.assetKey], t = S.ui[lang];
    const href = "/" + ({ wsd: "world-sport-daily", osto: "ostomyfan", dreamercell: "dreamercell" }[key]);
    return `
      <a class="project-card reveal" href="${href}">
        <div class="pc-media">
          <img class="banner" src="${a.banner}" alt="${esc(d.title)} banner" loading="lazy" />
          <img class="pc-avatar" src="${a.avatar}" alt="${esc(d.title)}" loading="lazy" />
        </div>
        <div class="pc-body">
          <div class="pc-tagrow"><span class="pc-tag">${esc(d.cardTag)}</span><span class="pc-live">${esc(t.liveTag)}</span></div>
          <h3>${esc(d.title)}</h3>
          <p class="pc-desc">${esc(d.cardDesc)}</p>
          <span class="more">${lang === "tr" ? "Detayı gör" : "View details"} →</span>
        </div>
      </a>`;
  }

  /* ---------- ANA SAYFA ---------- */
  function renderHome() {
    const d = S.home[lang], t = S.ui[lang];
    return `
    ${header("home")}
    <main>
      <section class="hero"><div class="wrap"><div class="hero-grid">
        <div>
          <span class="kicker">${esc(d.heroKicker)}</span>
          <h1>${esc(d.heroTitle)}</h1>
          <p class="sub">${esc(d.heroSub)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects">${esc(d.heroPrimary)}</a>
            <a class="btn btn-ghost" href="#contact">${esc(d.heroSecondary)}</a>
          </div>
        </div>
        <div class="hero-aside">
          <div class="hero-note"><span class="dot"></span><strong>${esc(d.heroNote)}</strong></div>
        </div>
      </div></div></section>

      <section class="section"><div class="wrap">
        <span class="eyebrow reveal">${lang === "tr" ? "Yaklaşım" : "Approach"}</span>
        <h2 class="reveal">${esc(d.howTitle)}</h2>
        <p class="lead reveal">${esc(d.howBody)}</p>
        <div class="pillars reveal">
          ${d.pillars.map((p, i) => `<div class="pillar"><span class="pn">0${i + 1}</span><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>`).join("")}
        </div>
      </div></section>

      <section class="section section-alt" id="projects"><div class="wrap">
        <span class="eyebrow reveal">${lang === "tr" ? "Portföy" : "Portfolio"}</span>
        <h2 class="reveal">${esc(d.proofTitle)}</h2>
        <p class="lead reveal">${esc(d.proofBody)}</p>
        <div class="projects">
          ${S.projectOrder.map(projectCard).join("")}
        </div>
      </div></section>

      <section class="section"><div class="wrap">
        <span class="eyebrow reveal">${lang === "tr" ? "Değer" : "Value"}</span>
        <h2 class="reveal">${esc(d.whyTitle)}</h2>
        <p class="lead reveal">${esc(d.whyBody)}</p>
        <div class="kv reveal">
          ${d.whyPoints.map((p) => `<div class="row"><div class="k">${esc(p.k)}</div><div class="v">${esc(p.v)}</div></div>`).join("")}
        </div>
      </div></section>

      <section class="cta-band"><div class="wrap reveal">
        <h2>${esc(d.ctaTitle)}</h2>
        <p>${esc(d.ctaBody)}</p>
        <a class="btn btn-primary" href="mailto:${esc(S.email)}">${esc(t.contactCta)}</a>
      </div></section>
    </main>
    ${footer()}`;
  }

  /* ---------- PROJE DETAY (wsd / osto / dreamercell — tek şablon) ---------- */
  function renderProject(key) {
    const p = S[key], d = p[lang], a = S.assets[p.assetKey], t = S.ui[lang], L = S.links;
    const primaryHref = L[d.proofLinks[0].key];
    const secondary = d.proofLinks[1];
    const actions = `
      <a class="btn btn-primary" href="${primaryHref}" target="_blank" rel="noopener">${esc(d.ctaPrimary)}</a>
      ${d.ctaSecondary && secondary ? `<a class="btn btn-ghost" href="${L[secondary.key]}" target="_blank" rel="noopener">${esc(d.ctaSecondary)}</a>` : ""}`;
    return `
    ${header(key)}
    <main>
      <section class="detail-hero"><div class="wrap">
        <a class="back" href="/">${esc(t.backHome)}</a>
        <div class="detail-banner"><img src="${a.banner}" alt="${esc(d.title)} banner" /></div>
        <div class="detail-head">
          <img class="detail-avatar" src="${a.avatar}" alt="${esc(d.title)}" />
          <div class="detail-titles">
            <span class="kicker">${esc(d.kicker)}</span>
            <h1>${esc(d.title)}</h1>
          </div>
        </div>
        <p class="sub">${esc(d.sub)}</p>
        <div class="detail-actions">${actions}</div>
      </div></section>

      <section class="detail-section"><div class="wrap">
        <h2 class="reveal">${esc(d.whatTitle)}</h2>
        <p class="lead reveal">${esc(d.whatBody)}</p>
      </div></section>

      <section class="detail-section"><div class="wrap">
        <h2 class="reveal">${esc(d.highlightsTitle)}</h2>
        <div class="highlights reveal">
          ${d.highlights.map((h) => `<div class="hl"><h4>${esc(h.t)}</h4><p>${esc(h.d)}</p></div>`).join("")}
        </div>
      </div></section>

      <section class="detail-section"><div class="wrap">
        <h2 class="reveal">${esc(d.proofTitle)}</h2>
        <div class="linklist reveal">
          ${d.proofLinks.map((x) => `<a href="${L[x.key]}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join("")}
        </div>
      </div></section>
    </main>
    ${footer()}`;
  }

  const RENDERERS = {
    home: renderHome,
    wsd: () => renderProject("wsd"),
    osto: () => renderProject("osto"),
    dreamercell: () => renderProject("dreamercell"),
  };

  function render() {
    const page = document.body.dataset.page || "home";
    document.body.innerHTML = (RENDERERS[page] || renderHome)();
    document.documentElement.lang = lang;
    wire();
    observeReveal();
  }

  function wire() {
    document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    const toggle = document.querySelector("[data-toggle]");
    if (toggle) toggle.addEventListener("click", () => document.getElementById("navlinks").classList.toggle("open"));
  }

  function observeReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((e) => io.observe(e));
  }

  document.addEventListener("DOMContentLoaded", render);
})();
