import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "World Sport Daily — ilk.ai",
  description: "Her gün taze spor içeriği üreten, çok platformlu bir kanal. ilk.ai tarafından yürütülüyor.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ProjectDetail pkey="wsd" />
      <Footer />
    </>
  );
}
