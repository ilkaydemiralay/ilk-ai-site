/* ilk.ai — içerik sözlüğü (TR + EN). Tüm metin/link/görsel tek yerde.
   Kurallar: maliyet/birim ekonomisi YOK; işleyiş yüzeysel (üretim yöntemi ifşa edilmez). */

export type Lang = "tr" | "en";
// Desteklenen diller. Yeni dil eklemek için: bu listeye kod ekle + aşağıdaki
// UI/HOME/PROJECTS sözlüklerine aynı kodla çeviri ekle.
export const LANGS: Lang[] = ["tr", "en"];

export const SITE = {
  brand: "ilk.ai",
  email: "info@ilk.ai",
  year: 2026,
};

export const LINKS: Record<string, string> = {
  wsdYouTube: "https://youtube.com/@worldsportdaily",
  wsdInstagram: "https://instagram.com/world_sport_daily",
  ostomyfanSite: "https://ostomyfan.com",
  dreamercellYouTube: "https://www.youtube.com/@dreamercell",
};

export const ASSETS: Record<string, { avatar: string; banner: string }> = {
  wsd: { avatar: "/img/projects/wsd-avatar.jpg", banner: "/img/projects/wsd-banner.jpg" },
  osto: { avatar: "/img/projects/osto-avatar.jpg", banner: "/img/projects/osto-banner.jpg" },
  dreamercell: { avatar: "/img/projects/dreamercell-avatar.jpg", banner: "/img/projects/dreamercell-banner.jpg" },
};

export const UI = {
  tr: {
    nav: { home: "Ana Sayfa", projects: "Projeler", contact: "İletişim" },
    langLabel: "EN",
    backHome: "← Ana sayfa",
    contactCta: "İletişime geç",
    footerTag: "Markalar için içerik üreten yapay zeka stüdyosu.",
    footerRights: "Tüm hakları saklıdır.",
    live: "Canlı",
    viewDetails: "Detayı gör",
    approach: "Yaklaşım",
    portfolio: "Portföy",
    value: "Değer",
  },
  en: {
    nav: { home: "Home", projects: "Projects", contact: "Contact" },
    langLabel: "TR",
    backHome: "← Home",
    contactCta: "Get in touch",
    footerTag: "An AI studio that creates content for brands.",
    footerRights: "All rights reserved.",
    live: "Live",
    viewDetails: "View details",
    approach: "Approach",
    portfolio: "Portfolio",
    value: "Value",
  },
};

export const HOME = {
  tr: {
    heroKicker: "ilk.ai · yapay zeka içerik stüdyosu",
    heroTitle: "Markalar için içerik üreten bir yapay zeka stüdyosu.",
    heroSub:
      "Fikirden yayına kadar tüm süreci biz yürütüyoruz. Sizin işiniz hikâyenizi anlatmak; üretimi, tutarlılığı ve büyümeyi bize bırakın.",
    heroPrimary: "Projeleri gör",
    heroSecondary: "İletişim",
    heroNote: "3 marka canlı yayında",
    howTitle: "Ne yapıyoruz",
    howBody:
      "Her marka için baştan sona bir içerik dünyası kuruyoruz: kimlik, format ve sesi tanımlıyor, düzenli içeriği üretiyor ve doğru kanallarda yayınlıyoruz. Tek tek videolar değil; kendi başına dönen, tutarlı bir yayın akışı.",
    pillars: [
      { title: "Fikir & yön", body: "Her markaya özel konsept, görsel kimlik ve içerik takvimi." },
      { title: "Üretim", body: "Senaryodan görsele kadar içeriğin tamamı; siz sadece onaylıyorsunuz." },
      { title: "Yayın & büyüme", body: "Doğru platformda, doğru ritimde, düzenli yayın ve takip." },
    ],
    proofTitle: "Canlı projeler",
    proofBody: "Üç marka şu anda bizim yürüttüğümüz akışla üretimde ve yayında.",
    whyTitle: "Neden ilk.ai",
    whyBody:
      "Çoğu marka içerikte tıkanır: zaman yok, tutarlılık yok, ekip pahalı. Biz bunu bir sisteme çeviriyoruz. Aldığınız şey ucuz içerik değil; markanızı her gün besleyen, ölçeklenebilen ve sizi düşündürmeyen bir yayın motoru.",
    whyPoints: [
      { k: "Tutarlılık", v: "Marka her gün, aynı kalitede sahnede." },
      { k: "Hız", v: "Haftalar süren süreç günlere iner." },
      { k: "Ölçek", v: "Tek marka da, on marka da aynı kolaylıkla." },
      { k: "Odak", v: "Siz işinize bakın; üretim bizde." },
    ],
    ctaTitle: "Markanızı konuşalım",
    ctaBody: "İş birliği, ortaklık veya bir pilot proje için bize ulaşın.",
    ctaPoints: ["Markaya özel içerik dünyası", "Düzenli ve tutarlı yayın", "Tek elden üretim + dağıtım"],

    statsEyebrow: "Sürekli üretim",
    statsTitle: "Her gün dönen bir yayın motoru",
    stats: [
      { v: "3", l: "Canlı marka" },
      { v: "3", l: "Yayın platformu" },
      { v: "Günlük", l: "Yeni içerik" },
      { v: "7/24", l: "Otomatik akış" },
    ],
    platformsTitle: "Markalarımızın yayınlandığı yerler",
    platforms: ["YouTube", "Instagram", "TikTok", "ve dahası"],

    faqEyebrow: "SSS",
    faqTitle: "Sık sorulan sorular",
    faq: [
      { q: "İçeriği siz mi üretiyorsunuz?", a: "Evet. Fikirden yayına kadar tüm süreci biz yürütüyoruz; siz sadece onaylıyorsunuz." },
      { q: "Hangi platformlarda yayın yapıyorsunuz?", a: "YouTube, Instagram ve TikTok başta olmak üzere markanıza uygun kanallarda." },
      { q: "Ne kadar sürede başlarız?", a: "Marka kurulumu (kimlik, format, takvim) kısa sürer; ardından düzenli yayına geçeriz." },
      { q: "Üretilen içerik bize mi ait?", a: "Evet. Markanız için ürettiğimiz her şey size aittir." },
      { q: "Sadece üretim mi, yayın da dahil mi?", a: "İkisi de. Üretim, çok platformlu yayın ve takip tek elden bizde." },
      { q: "Hangi tür markalarla çalışıyorsunuz?", a: "Niş otoriteden spora ve müziğe; canlı portföyümüz çalışma tarzımızın örneğidir." },
    ],
  },
  en: {
    heroKicker: "ilk.ai · AI content studio",
    heroTitle: "An AI studio that builds content for brands.",
    heroSub:
      "We run the whole journey, from idea to publishing. Your job is to tell your story; leave production, consistency and growth to us.",
    heroPrimary: "View projects",
    heroSecondary: "Contact",
    heroNote: "3 brands live right now",
    howTitle: "What we do",
    howBody:
      "For each brand we build a complete content world: we define identity, format and voice, produce a steady stream of content, and publish on the right channels. Not one-off videos, but a consistent publishing engine that runs on its own.",
    pillars: [
      { title: "Idea & direction", body: "Bespoke concept, visual identity and content calendar per brand." },
      { title: "Production", body: "Everything from script to visuals; you simply approve." },
      { title: "Publish & grow", body: "The right platform, the right rhythm, steady publishing and follow-through." },
    ],
    proofTitle: "Live projects",
    proofBody: "Three brands are producing and publishing right now through the flow we run.",
    whyTitle: "Why ilk.ai",
    whyBody:
      "Most brands stall on content: no time, no consistency, teams are expensive. We turn it into a system. What you get isn't cheap content, it's a publishing engine that feeds your brand every day, scales, and never makes you think about it.",
    whyPoints: [
      { k: "Consistency", v: "Your brand on stage every day, same quality." },
      { k: "Speed", v: "What takes weeks now takes days." },
      { k: "Scale", v: "One brand or ten, with the same ease." },
      { k: "Focus", v: "You run your business; production is on us." },
    ],
    ctaTitle: "Let's talk about your brand",
    ctaBody: "Reach out for collaboration, partnership, or a pilot project.",
    ctaPoints: ["A content world built for your brand", "Steady, consistent publishing", "Production + distribution, one hand"],

    statsEyebrow: "Always producing",
    statsTitle: "A publishing engine that runs every day",
    stats: [
      { v: "3", l: "Live brands" },
      { v: "3", l: "Platforms" },
      { v: "Daily", l: "New content" },
      { v: "24/7", l: "Automated flow" },
    ],
    platformsTitle: "Where our brands publish",
    platforms: ["YouTube", "Instagram", "TikTok", "and more"],

    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    faq: [
      { q: "Do you produce the content yourselves?", a: "Yes. We run the whole journey from idea to publishing; you simply approve." },
      { q: "Which platforms do you publish on?", a: "YouTube, Instagram and TikTok first, plus whatever channels fit your brand." },
      { q: "How fast can we start?", a: "Brand setup (identity, format, calendar) is quick; then we move to steady publishing." },
      { q: "Do we own the content?", a: "Yes. Everything we produce for your brand belongs to you." },
      { q: "Is it just production, or publishing too?", a: "Both. Production, multi-platform publishing and follow-through, all in one hand." },
      { q: "What kind of brands do you work with?", a: "From niche authority to sports and music; our live portfolio shows how we work." },
    ],
  },
};

export type ProjectKey = "wsd" | "osto" | "dreamercell";
export const PROJECT_ORDER: ProjectKey[] = ["wsd", "osto", "dreamercell"];
export const SLUG: Record<ProjectKey, string> = {
  wsd: "world-sport-daily",
  osto: "ostomyfan",
  dreamercell: "dreamercell",
};
export const KEY_BY_SLUG: Record<string, ProjectKey> = {
  "world-sport-daily": "wsd",
  ostomyfan: "osto",
  dreamercell: "dreamercell",
};

type ProjLang = {
  cardTag: string; cardDesc: string;
  kicker: string; title: string; sub: string;
  ctaPrimary: string; ctaSecondary?: string;
  whatTitle: string; whatBody: string;
  highlightsTitle: string; highlights: { t: string; d: string }[];
  proofTitle: string; proofLinks: { label: string; key: string }[];
};

export const PROJECTS: Record<ProjectKey, { assetKey: string; tr: ProjLang; en: ProjLang }> = {
  wsd: {
    assetKey: "wsd",
    tr: {
      cardTag: "Spor",
      cardDesc: "Her gün otomatik üretilen, çok platformlu bir spor içerik kanalı.",
      kicker: "Canlı proje · Spor",
      title: "World Sport Daily",
      sub: "Her gün taze spor içeriği üreten, birden çok platformda yayın yapan bir kanal. 2026 Dünya Kupası ile sahaya çıktı.",
      ctaPrimary: "YouTube'da gör",
      ctaSecondary: "Instagram'da gör",
      whatTitle: "Kısaca",
      whatBody:
        "Günün spor gündemini her gün izleyiciye taşıyan, kendi görsel kimliğiyle yayın yapan bir kanal. Tamamen bizim yürüttüğümüz akışla üretiliyor ve dağıtılıyor.",
      highlightsTitle: "Öne çıkanlar",
      highlights: [
        { t: "Günlük tempo", d: "Her gün yeni içerik, kesintisiz bir yayın ritmi." },
        { t: "Çok platform", d: "Tek üretim, birden çok kanalda yayın." },
        { t: "Özgün kimlik", d: "Telif sorunu olmayan, markaya özel görsel dil." },
        { t: "Büyümeye dönük", d: "Duygusal hikâye odağıyla kitle ve abone büyütme." },
      ],
      proofTitle: "Canlıyı gör",
      proofLinks: [
        { label: "YouTube · @worldsportdaily", key: "wsdYouTube" },
        { label: "Instagram · @world_sport_daily", key: "wsdInstagram" },
      ],
    },
    en: {
      cardTag: "Sports",
      cardDesc: "A multi-platform sports channel producing fresh content every day.",
      kicker: "Live project · Sports",
      title: "World Sport Daily",
      sub: "A channel producing fresh sports content every day, publishing across multiple platforms. Launched with the 2026 World Cup.",
      ctaPrimary: "View on YouTube",
      ctaSecondary: "View on Instagram",
      whatTitle: "In short",
      whatBody:
        "A channel that brings the day's sports stories to viewers daily, with its own visual identity. Produced and distributed entirely through the flow we run.",
      highlightsTitle: "Highlights",
      highlights: [
        { t: "Daily cadence", d: "New content every day, an uninterrupted rhythm." },
        { t: "Multi-platform", d: "One production, published across several channels." },
        { t: "Original identity", d: "A copyright-clean, brand-specific visual language." },
        { t: "Built to grow", d: "Audience and subscriber growth through emotional storytelling." },
      ],
      proofTitle: "See it live",
      proofLinks: [
        { label: "YouTube · @worldsportdaily", key: "wsdYouTube" },
        { label: "Instagram · @world_sport_daily", key: "wsdInstagram" },
      ],
    },
  },
  osto: {
    assetKey: "osto",
    tr: {
      cardTag: "Sağlık",
      cardDesc: "15 yıllık gerçek sağlık markası; çok platformlu yayın + canlı haber sitesi.",
      kicker: "Canlı proje · Sağlık",
      title: "ostomyfan",
      sub: "15 yıllık gerçek bir sağlık markası: birden çok platformda düzenli yayın ve canlı bir haber sitesi.",
      ctaPrimary: "ostomyfan.com'u ziyaret et",
      whatTitle: "Kısaca",
      whatBody:
        "Sağlık nişinde gerçek bir kitleye hizmet eden, köklü bir marka. Günlük içeriği üretip birden çok platforma taşıyor; ayrıca güncel haberleri toplayan canlı bir web sitesi yürütüyor.",
      highlightsTitle: "Öne çıkanlar",
      highlights: [
        { t: "Kanıtlanmış marka", d: "15 yıllık geçmiş, mevcut güven ve niş otorite." },
        { t: "Niş derinliği", d: "Sağlık alanında gerçek, sadık bir topluluk." },
        { t: "Çok platform", d: "Tek üretim, birden çok kanala düzenli dağıtım." },
        { t: "Canlı vitrin", d: "Çalışan, referans verilebilir bir web ürünü." },
      ],
      proofTitle: "Canlıyı gör",
      proofLinks: [{ label: "ostomyfan.com", key: "ostomyfanSite" }],
    },
    en: {
      cardTag: "Health",
      cardDesc: "A 15-year-old real health brand; multi-platform publishing + a live news site.",
      kicker: "Live project · Health",
      title: "ostomyfan",
      sub: "A 15-year-old real health brand: steady publishing across multiple platforms and a live news site.",
      ctaPrimary: "Visit ostomyfan.com",
      whatTitle: "In short",
      whatBody:
        "An established brand serving a real audience in the health niche. It produces daily content across multiple platforms and runs a live website aggregating current news.",
      highlightsTitle: "Highlights",
      highlights: [
        { t: "Proven brand", d: "15 years of history, existing trust and niche authority." },
        { t: "Niche depth", d: "A real, loyal community in health." },
        { t: "Multi-platform", d: "One production, steady distribution to several channels." },
        { t: "Live showcase", d: "A working, referenceable web product." },
      ],
      proofTitle: "See it live",
      proofLinks: [{ label: "ostomyfan.com", key: "ostomyfanSite" }],
    },
  },
  dreamercell: {
    assetKey: "dreamercell",
    tr: {
      cardTag: "Müzik & Atmosfer",
      cardDesc: "Rüyamsı, estetik bir müzik dünyası — uzun dinlemelik atmosferik akışlar.",
      kicker: "Canlı proje · Müzik & Atmosfer",
      title: "dreamercell",
      sub: "Rüyamsı, estetik bir müzik dünyası — dreamy chillwave ve ambient. Saatlerce dinlenmek için tasarlanmış atmosferik akışlar.",
      ctaPrimary: "YouTube'da dinle",
      whatTitle: "Kısaca",
      whatBody:
        "Estetik bir görsel kimlikle eşleşen, uzun-form atmosferik müzik akışları üreten bir marka. Çalışma, dinlenme ve odaklanma anları için tasarlanmış, kendine ait bir his dünyası.",
      highlightsTitle: "Öne çıkanlar",
      highlights: [
        { t: "Özgün estetik", d: "Müzik kadar güçlü, tutarlı bir görsel dünya." },
        { t: "Uzun dinleme", d: "Tek videolar değil, saatlerce süren akışlar." },
        { t: "Atmosfer odaklı", d: "Bir ruh hali yaratan, sahiplenilebilir bir kimlik." },
        { t: "Ölçeklenebilir", d: "Sürekli yenilenen tema ve koleksiyonlar." },
      ],
      proofTitle: "Canlıyı gör",
      proofLinks: [{ label: "YouTube · @dreamercell", key: "dreamercellYouTube" }],
    },
    en: {
      cardTag: "Music & Atmosphere",
      cardDesc: "A dreamy, aesthetic music world — long-listen atmospheric streams.",
      kicker: "Live project · Music & Atmosphere",
      title: "dreamercell",
      sub: "A dreamy, aesthetic music world — dreamy chillwave and ambient. Atmospheric streams designed for hours of listening.",
      ctaPrimary: "Listen on YouTube",
      whatTitle: "In short",
      whatBody:
        "A brand producing long-form atmospheric music streams matched with an aesthetic visual identity. A world of its own, designed for moments of work, rest and focus.",
      highlightsTitle: "Highlights",
      highlights: [
        { t: "Original aesthetic", d: "A visual world as strong and consistent as the music." },
        { t: "Long listening", d: "Not single videos, but streams that run for hours." },
        { t: "Atmosphere-first", d: "An ownable identity that creates a mood." },
        { t: "Scalable", d: "Continuously refreshed themes and collections." },
      ],
      proofTitle: "See it live",
      proofLinks: [{ label: "YouTube · @dreamercell", key: "dreamercellYouTube" }],
    },
  },
};
