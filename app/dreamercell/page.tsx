import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "dreamercell — ilk.ai",
  description: "Rüyamsı, estetik bir müzik dünyası — dreamy chillwave ve ambient. Uzun dinlemelik atmosferik akışlar.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ProjectDetail pkey="dreamercell" />
      <Footer />
    </>
  );
}
