import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
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
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
