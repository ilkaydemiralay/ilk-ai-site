/* ilk.ai — site içeriği (TR + EN). Tüm metin, link ve metrik tek yerde.
   Düzenleme: sadece bu dosyayı değiştir; app.js render eder. */

window.SITE = {
  brand: "ilk.ai",
  domain: "ilk.ai",
  email: "ilkay@demiralay.net",
  year: 2026,

  // Gerçek, doğrulanabilir metrikler (abartısız)
  metrics: {
    liveBrands: "2",
    shotsPerDay: "~10",
    platforms: "3",
    costPerShort: "~$0.005",
  },

  links: {
    wsdYouTube: "https://youtube.com/@worldsportdaily",
    wsdInstagram: "https://instagram.com/world_sport_daily",
    wsdReel: "https://www.instagram.com/reel/DZPZUkrj-LH/",
    wsdVideo: "https://youtu.be/D2yxrpGWZxg",
    ostomyfanSite: "https://ostomyfan.com",
  },

  ui: {
    tr: {
      nav: { home: "Ana Sayfa", wsd: "World Sport Daily", osto: "ostomyfan", contact: "İletişim" },
      langLabel: "EN",
      backHome: "← Ana sayfa",
      contactCta: "İletişime geç",
      viewLive: "Canlıyı gör",
      footerTag: "Çok-markalı AI içerik üretim motoru.",
      footerRights: "Tüm hakları saklıdır.",
    },
    en: {
      nav: { home: "Home", wsd: "World Sport Daily", osto: "ostomyfan", contact: "Contact" },
      langLabel: "TR",
      backHome: "← Home",
      contactCta: "Get in touch",
      viewLive: "View live",
      footerTag: "A multi-brand AI content production engine.",
      footerRights: "All rights reserved.",
    },
  },

  /* ===================== ANA SAYFA ===================== */
  home: {
    tr: {
      heroKicker: "ilk.ai",
      heroTitle: "İçerik üretimini fabrikalaştıran çok-markalı AI motoru",
      heroSub:
        "Tek bir çekirdek üretim hattı; üzerinde çok sayıda marka. Fikirden çok-platform yayına kadar her adım otomatik — insan sadece onaylar.",
      heroPrimary: "Projeleri gör",
      heroSecondary: "İletişim",
      heroNote: "Şu an 2 marka canlı yayında.",

      statsTitle: "Bugün çalışan sistem",
      stats: [
        { value: "2", label: "Canlı marka" },
        { value: "~10", label: "Günlük içerik / marka" },
        { value: "3", label: "Dağıtım platformu" },
        { value: "~$0.005", label: "İçerik başına maliyet" },
      ],

      problemTitle: "Fırsat",
      problemBody:
        "Sosyal içerik üretimi pahalı ve yavaş: senaryo, seslendirme, kurgu, küçük resim, çok-platform yayın — her biri ayrı emek. AI bu adımların hepsini otomatikleştirebilir, ama dağınık araçları uçtan uca, güvenilir ve telif-temiz bir hatta dizmek asıl zor kısım. ilk.ai tam burada: çalışan bir üretim hattı, deney değil.",

      howTitle: "Tek çekirdek, çok marka",
      howBody:
        "Aynı üretim hattı her markaya hizmet eder; markalar arası fark sadece konfigürasyon (kimlik, format, ses, platform, takvim). Yeni bir marka eklemek = yeni bir config dosyası, yeni bir kod tabanı değil.",
      pipeline: [
        { icon: "①", title: "Veri / Fikir", body: "Açık veri kaynakları ve yönlendirilmiş üretim ile günün konuları belirlenir." },
        { icon: "②", title: "Metin", body: "Senaryo ve seslendirme metni LLM ile üretilir; doğruluk kontrolü gömülü." },
        { icon: "③", title: "Ses", body: "Nöral seslendirme + telifsiz/sahipli müzik altlığı." },
        { icon: "④", title: "Görsel", body: "AI üretimi veya telifsiz stok görsel/video; markaya özel kimlik." },
        { icon: "⑤", title: "Video", body: "Kelime-senkron altyazılı, dikey (9:16) video otomatik montajlanır." },
        { icon: "⑥", title: "Yayın", body: "YouTube + Instagram + TikTok'a otomatik dağıtım; isteğe bağlı insan onayı." },
      ],

      proofTitle: "Kanıt: canlı projeler",
      proofBody: "İki marka şu anda otomatik üretim ve yayında. Deney değil, çalışan sistem.",
      projects: [
        {
          tag: "Faceless · Spor",
          name: "World Sport Daily",
          desc: "2026 Dünya Kupası boyunca günde ~10 kısa video üreten, 3 platformda yayın yapan tam otomatik spor kanalı. \"Country Stories\" imza formatı.",
          cta: "Detay →",
          href: "/world-sport-daily",
        },
        {
          tag: "Niş Otorite · Sağlık",
          name: "ostomyfan",
          desc: "15 yıllık gerçek sağlık markası: çok-platform günlük otomatik yayın + canlı haber sitesi. Motorun doğduğu, kanıtlandığı yer.",
          cta: "Detay →",
          href: "/ostomyfan",
        },
      ],

      econTitle: "Birim ekonomisi",
      econBody:
        "İçerik başına maliyet AI çağrılarıyla kuruşun altında; çoğu adım yerel ve sahipli araçlarla sıfır marjinal maliyetle çalışır. Bu, içeriği hacimle ölçeklenebilir bir varlık haline getirir.",
      econPoints: [
        { k: "Maliyet", v: "İçerik başına ~yarım sent" },
        { k: "Emek", v: "Üretim tamamen otomatik; insan sadece onay" },
        { k: "Telif", v: "Yalnızca veri + kendi grafik + telifsiz/sahipli medya" },
        { k: "Ölçek", v: "Yeni marka = yeni config, ekstra altyapı yok" },
      ],

      visionTitle: "Yol haritası: Hizmet → SaaS",
      visionBody:
        "Kısa vade: kanıtlanmış motorla markalara \"anahtar teslim AI içerik üretimi\" hizmeti. Orta vade: tekrar eden kalıpları çok-kiracılı bir SaaS ürününe dönüştürmek. Altyapı bugün çalışıyor; büyüme dağıtım ve ortaklıkla geliyor.",
      visionSteps: [
        { phase: "Bugün", title: "Çalışan motor", body: "2 canlı marka, uçtan uca otomasyon." },
        { phase: "Yıl 1", title: "Hizmet", body: "Markalara yönetilen AI içerik üretimi." },
        { phase: "Yıl 2", title: "SaaS", body: "Çok-kiracılı ürün; kendi kendine servis." },
      ],

      ctaTitle: "Konuşalım",
      ctaBody: "Ortaklık, yatırım veya pilot proje için bana ulaşın.",
    },

    en: {
      heroKicker: "ilk.ai",
      heroTitle: "A multi-brand AI engine that industrializes content production",
      heroSub:
        "One core production pipeline, many brands on top of it. Every step — from idea to multi-platform publishing — is automated; humans only approve.",
      heroPrimary: "View projects",
      heroSecondary: "Contact",
      heroNote: "2 brands live right now.",

      statsTitle: "The system, today",
      stats: [
        { value: "2", label: "Live brands" },
        { value: "~10", label: "Daily pieces / brand" },
        { value: "3", label: "Distribution platforms" },
        { value: "~$0.005", label: "Cost per piece" },
      ],

      problemTitle: "The opportunity",
      problemBody:
        "Social content production is expensive and slow: scripting, voiceover, editing, thumbnails, multi-platform publishing — each its own labor. AI can automate all of these, but the hard part is wiring scattered tools into one end-to-end, reliable, copyright-clean pipeline. That's exactly what ilk.ai is: a working production line, not an experiment.",

      howTitle: "One core, many brands",
      howBody:
        "The same pipeline serves every brand; the only difference between brands is configuration (identity, format, voice, platforms, schedule). Adding a new brand = a new config file, not a new codebase.",
      pipeline: [
        { icon: "①", title: "Data / Idea", body: "Daily topics chosen from open data sources and guided generation." },
        { icon: "②", title: "Script", body: "Script and voiceover written by an LLM, with fact-checking built in." },
        { icon: "③", title: "Audio", body: "Neural voiceover + royalty-free / owned music bed." },
        { icon: "④", title: "Visuals", body: "AI-generated or royalty-free stock; brand-specific identity." },
        { icon: "⑤", title: "Video", body: "Vertical (9:16) video auto-assembled with word-synced captions." },
        { icon: "⑥", title: "Publish", body: "Auto-distribution to YouTube + Instagram + TikTok; optional human approval." },
      ],

      proofTitle: "Proof: live projects",
      proofBody: "Two brands are producing and publishing automatically right now. Not a demo — a running system.",
      projects: [
        {
          tag: "Faceless · Sports",
          name: "World Sport Daily",
          desc: "A fully automated sports channel producing ~10 short videos a day across 3 platforms throughout the 2026 World Cup. Signature \"Country Stories\" format.",
          cta: "Details →",
          href: "/world-sport-daily",
        },
        {
          tag: "Niche Authority · Health",
          name: "ostomyfan",
          desc: "A 15-year-old real health brand: multi-platform daily automated publishing + a live news site. Where the engine was born and proven.",
          cta: "Details →",
          href: "/ostomyfan",
        },
      ],

      econTitle: "Unit economics",
      econBody:
        "Cost per piece is sub-cent via AI calls; most steps run on local and owned tooling at zero marginal cost. That turns content into an asset that scales with volume.",
      econPoints: [
        { k: "Cost", v: "~Half a cent per piece" },
        { k: "Labor", v: "Production fully automated; humans only approve" },
        { k: "Copyright", v: "Only data + own graphics + royalty-free/owned media" },
        { k: "Scale", v: "New brand = new config, no extra infrastructure" },
      ],

      visionTitle: "Roadmap: Service → SaaS",
      visionBody:
        "Near term: offer brands turnkey AI content production with the proven engine. Mid term: turn recurring patterns into a multi-tenant SaaS product. The infrastructure works today; growth comes from distribution and partnerships.",
      visionSteps: [
        { phase: "Today", title: "Working engine", body: "2 live brands, end-to-end automation." },
        { phase: "Year 1", title: "Service", body: "Managed AI content production for brands." },
        { phase: "Year 2", title: "SaaS", body: "Multi-tenant product; self-serve." },
      ],

      ctaTitle: "Let's talk",
      ctaBody: "Reach out for partnership, investment, or a pilot project.",
    },
  },

  /* ===================== WORLD SPORT DAILY ===================== */
  wsd: {
    tr: {
      kicker: "Canlı proje · Faceless spor kanalı",
      title: "World Sport Daily",
      sub: "2026 Dünya Kupası boyunca günde ~10 kısa video üreten, hiç yüz göstermeyen, tam otomatik spor içerik fabrikası.",
      ctaPrimary: "YouTube'da gör",
      ctaSecondary: "Instagram'da gör",

      stats: [
        { value: "~10", label: "Günlük kısa video" },
        { value: "3", label: "Platform" },
        { value: "~$0.005", label: "Video başına maliyet" },
        { value: "100%", label: "Otomatik üretim" },
      ],

      whatTitle: "Ne yapıyor?",
      whatBody:
        "Açık futbol verisinden (fikstür, sonuç, gruplar) yola çıkıp, her gün için 10 kısa video senaryosu üretir; seslendirir, altyazılar, montajlar ve YouTube ile Instagram'a yayınlar. İnsan müdahalesi opsiyoneldir.",

      sigTitle: "İmza format: Country Stories",
      sigBody:
        "Sığ \"sıralama\" videoları yerine duygusal ülke hikâyeleri (underdog yolculukları, milli kimlik). Bu hem diaspora paylaşımıyla organik erişim, hem milli kimlikle abone dönüşümü sağlar — soğuk başlangıçtan en hızlı çıkış yolu.",

      howTitle: "Üretim hattı",
      steps: [
        { n: "1", t: "Veri", d: "Açık kaynak Dünya Kupası verisi çekilir, gruplar ve eşleşmeler hesaplanır." },
        { n: "2", t: "Senaryo", d: "Günün 10 videosunun metni LLM ile yazılır; uydurma istatistik engellenir." },
        { n: "3", t: "Ses", d: "Format başına farklı nöral sesler; sıcak, belgesel tonu." },
        { n: "4", t: "Altyazı", d: "Kelime-senkron, renk-kodlu (skor=altın, takım=yeşil) dikey altyazı." },
        { n: "5", t: "Görsel", d: "AI üretimi telif-güvenli stadyum görselleri + telifsiz stok video; karışık mod." },
        { n: "6", t: "Müzik", d: "Sahipli, atıfsız müzik altlığı; sese göre kısılır." },
        { n: "7", t: "Yayın", d: "9:16 video YouTube + Instagram Reels'e otomatik yüklenir." },
      ],

      proofTitle: "Canlı kanıt",
      proofBody: "İlk setler yayında. Örnekler:",
      proofLinks: [
        { label: "YouTube · @worldsportdaily", key: "wsdYouTube" },
        { label: "Instagram · @world_sport_daily", key: "wsdInstagram" },
        { label: "Örnek Reel (Mexico)", key: "wsdReel" },
        { label: "Örnek YouTube videosu", key: "wsdVideo" },
      ],

      moatTitle: "Neden savunulabilir?",
      moatPoints: [
        "Telif-temiz: gerçek maç görüntüsü/logo yok; sadece veri + kendi grafik + AI/telifsiz medya.",
        "Çok platform: tek üretim, üç kanala dağıtım — risk dağılır, erişim artar.",
        "Maliyet: video başına kuruşun altı; hacimle ölçeklenir.",
        "Tekrar kullanılabilir: aynı hat, turnuva sonrası başka sporlara da uyarlanır.",
      ],
    },

    en: {
      kicker: "Live project · Faceless sports channel",
      title: "World Sport Daily",
      sub: "A fully automated, faceless sports content factory producing ~10 short videos a day throughout the 2026 World Cup.",
      ctaPrimary: "View on YouTube",
      ctaSecondary: "View on Instagram",

      stats: [
        { value: "~10", label: "Daily shorts" },
        { value: "3", label: "Platforms" },
        { value: "~$0.005", label: "Cost per video" },
        { value: "100%", label: "Automated production" },
      ],

      whatTitle: "What it does",
      whatBody:
        "Starting from open football data (fixtures, results, groups), it writes 10 short-video scripts per day, voices them, captions, edits and publishes to YouTube and Instagram. Human intervention is optional.",

      sigTitle: "Signature format: Country Stories",
      sigBody:
        "Instead of shallow \"ranking\" videos, emotional country stories (underdog journeys, national identity). This drives organic reach via diaspora sharing and subscriber conversion via national identity — the fastest way out of a cold start.",

      howTitle: "Production pipeline",
      steps: [
        { n: "1", t: "Data", d: "Open-source World Cup data is fetched; groups and matchups computed." },
        { n: "2", t: "Script", d: "The day's 10 video scripts written by an LLM; fabricated stats blocked." },
        { n: "3", t: "Audio", d: "Different neural voices per format; warm documentary tone." },
        { n: "4", t: "Captions", d: "Word-synced, color-coded (score=gold, team=green) vertical captions." },
        { n: "5", t: "Visuals", d: "AI-generated copyright-safe stadium imagery + royalty-free stock video; mixed mode." },
        { n: "6", t: "Music", d: "Owned, attribution-free music bed, ducked under the voice." },
        { n: "7", t: "Publish", d: "9:16 video auto-uploaded to YouTube + Instagram Reels." },
      ],

      proofTitle: "Live proof",
      proofBody: "First sets are live. Examples:",
      proofLinks: [
        { label: "YouTube · @worldsportdaily", key: "wsdYouTube" },
        { label: "Instagram · @world_sport_daily", key: "wsdInstagram" },
        { label: "Sample Reel (Mexico)", key: "wsdReel" },
        { label: "Sample YouTube video", key: "wsdVideo" },
      ],

      moatTitle: "Why it's defensible",
      moatPoints: [
        "Copyright-clean: no real match footage/logos; only data + own graphics + AI/royalty-free media.",
        "Multi-platform: one production, three channels — spreads risk, expands reach.",
        "Cost: sub-cent per video; scales with volume.",
        "Reusable: the same pipeline adapts to other sports after the tournament.",
      ],
    },
  },

  /* ===================== OSTOMYFAN ===================== */
  osto: {
    tr: {
      kicker: "Canlı proje · Niş sağlık otoritesi",
      title: "ostomyfan",
      sub: "15 yıllık gerçek bir sağlık markası: çok-platform günlük otomatik yayın + canlı haber sitesi. ilk.ai motorunun doğduğu ve kanıtlandığı yer.",
      ctaPrimary: "ostomyfan.com'u ziyaret et",

      stats: [
        { value: "15 yıl", label: "Marka geçmişi" },
        { value: "Çoklu", label: "Platform yayını" },
        { value: "Günlük", label: "Otomatik içerik" },
        { value: "Canlı", label: "Haber sitesi" },
      ],

      whatTitle: "Ne yapıyor?",
      whatBody:
        "Ostomi (sağlık) nişinde günlük içeriği otomatik üretip birden çok platforma yayınlar; ayrıca güncel haberleri toplayan canlı bir web sitesi (ostomyfan.com) besler. Gerçek bir kitleye, gerçek bir nişte hizmet eder.",

      whyTitle: "Neden önemli?",
      whyBody:
        "ilk.ai motorunun ilk doğduğu yer. Çok-platform otomatik yayıncı, kelime-senkron altyazı ve telif-temiz medya gibi çekirdek bileşenler önce burada kanıtlandı, sonra World Sport Daily'ye taşındı. Yani bu sadece bir içerik kanalı değil — motorun gerçek dünyada çalıştığının kanıtı.",

      strengthsTitle: "Öne çıkanlar",
      strengths: [
        { t: "Kanıtlanmış varlık", d: "15 yıllık marka, sıfırdan değil; mevcut güven ve niş otorite." },
        { t: "Niş derinliği", d: "Sağlık komşuluğu (klinik, hasta dernekleri, sağlık koçları) için haksız avantaj." },
        { t: "Çok-platform motor", d: "Tek üretim, birden çok kanala otomatik dağıtım." },
        { t: "Canlı vitrin", d: "ostomyfan.com çalışan, referans verilebilir bir ürün." },
      ],

      proofTitle: "Canlı kanıt",
      proofBody: "Çalışan ürünü kendiniz görün:",
      proofLinks: [{ label: "ostomyfan.com", key: "ostomyfanSite" }],
    },

    en: {
      kicker: "Live project · Niche health authority",
      title: "ostomyfan",
      sub: "A 15-year-old real health brand: multi-platform daily automated publishing + a live news site. Where the ilk.ai engine was born and proven.",
      ctaPrimary: "Visit ostomyfan.com",

      stats: [
        { value: "15 yrs", label: "Brand history" },
        { value: "Multi", label: "Platform publishing" },
        { value: "Daily", label: "Automated content" },
        { value: "Live", label: "News site" },
      ],

      whatTitle: "What it does",
      whatBody:
        "It automatically produces daily content in the ostomy (health) niche and publishes to multiple platforms; it also powers a live website (ostomyfan.com) aggregating current news. It serves a real audience in a real niche.",

      whyTitle: "Why it matters",
      whyBody:
        "This is where the ilk.ai engine first took shape. Core components — the multi-platform auto-publisher, word-synced captions, copyright-clean media — were proven here first, then carried over to World Sport Daily. So it's not just a content channel — it's proof the engine works in the real world.",

      strengthsTitle: "Highlights",
      strengths: [
        { t: "Proven asset", d: "A 15-year-old brand, not from scratch; existing trust and niche authority." },
        { t: "Niche depth", d: "An unfair advantage in the health neighborhood (clinics, patient associations, health coaches)." },
        { t: "Multi-platform engine", d: "One production, automatic distribution to multiple channels." },
        { t: "Live showcase", d: "ostomyfan.com is a working, referenceable product." },
      ],

      proofTitle: "Live proof",
      proofBody: "See the working product yourself:",
      proofLinks: [{ label: "ostomyfan.com", key: "ostomyfanSite" }],
    },
  },
};
