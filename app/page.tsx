import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Pillars, Projects, Why, CTA } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Pillars />
      <Projects />
      <Why />
      <CTA />
      <Footer />
    </>
  );
}
