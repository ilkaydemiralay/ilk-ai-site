import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "ostomyfan — ilk.ai",
  description: "15 yıllık gerçek bir sağlık markası; çok platformlu yayın + canlı haber sitesi. ilk.ai portföyü.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ProjectDetail pkey="osto" />
      <Footer />
    </>
  );
}
