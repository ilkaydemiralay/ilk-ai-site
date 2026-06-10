import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OrbField } from "@/components/OrbField";
import { Pillars, StatsStrip, Projects, Why, CTA, FAQ } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StatsStrip />
      <Pillars />
      <Projects />
      <Why />
      {/* Sayfa sonu — hero ile aynı yüzen küre animasyonu, üste doğru eritilir */}
      <div className="relative isolate">
        <OrbField fade="top" />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
