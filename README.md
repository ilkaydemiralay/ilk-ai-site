# ilk.ai — tanıtım sitesi

Yatırımcı/iş ortağı odaklı, çift dilli (TR + EN) statik tanıtım sitesi.
**Çatı marka:** ilk.ai · **Domain:** ilk.ai · **Host:** Vercel

## Yapı
```
index.html              → Ana sayfa (vizyon + iki proje + ekonomi + yol haritası)
world-sport-daily.html  → Proje detayı: World Sport Daily
ostomyfan.html          → Proje detayı: ostomyfan
assets/
  css/style.css         → Tüm stil (koyu, modern tema)
  js/content.js         → TÜM METİN + linkler + metrikler (TR & EN) — sadece burayı düzenle
  js/app.js             → render + dil değiştirici (anında, sayfa yenilemeden)
vercel.json             → clean URLs + güvenlik/cache başlıkları
```

İçeriği güncellemek için tek dosya: **`assets/js/content.js`** (marka adı, metinler, metrikler, linkler).

## Yerel önizleme
`.html` uzantısız yollar (örn. `/world-sport-daily`) Vercel'in `cleanUrls` ayarıyla çalışır.
Birebir aynı davranış için Vercel CLI ile:
```bash
npm i -g vercel
vercel dev          # http://localhost:3000
```
Hızlı bakış (clean URL olmadan, ana sayfa için yeterli):
```bash
python3 -m http.server 8080   # http://localhost:8080
```

## Yayına alma (Vercel)
1. `vercel` (ilk sefer: proje bağla) → preview URL.
2. `vercel --prod` → production.
3. Vercel dashboard → Project → Settings → **Domains** → `ilk.ai` ekle, DNS yönlendir.

## Notlar
- Bağımlılık yok (sadece Google Fonts: Inter). Build adımı gerekmez.
- Dil tercihi `localStorage`'da tutulur; ilk ziyarette tarayıcı diline göre seçilir.
- Tüm dış linkler `assets/js/content.js > links` içinde; gerçek/güncel tutulmalı.
