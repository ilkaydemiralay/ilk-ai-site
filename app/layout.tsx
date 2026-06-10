import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ilk.ai"),
  title: "ilk.ai — AI content studio for brands",
  description:
    "ilk.ai is an AI studio that builds content for brands. We run the whole process from idea to publishing. 3 brands live.",
  icons: {
    icon: "/img/favicon.png",
    apple: "/img/apple-touch-icon.png",
  },
  openGraph: {
    title: "ilk.ai — AI content studio for brands",
    description: "An AI studio that builds content for brands. From idea to publishing. 3 brands live.",
    url: "https://ilk.ai",
    images: ["/img/og.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/img/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
