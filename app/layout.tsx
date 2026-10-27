import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: "MIVRA LABS | AI MVP Development in 14 Days", template: "%s | MIVRA LABS" },
  description: "MIVRA LABS is an AI development agency helping founders turn ideas into AI-powered products, web applications, and MVPs.",
  openGraph: { title: "MIVRA LABS | Idea → AI MVP in 14 days", description: "AI-powered product development for founders and startups.", url, siteName: "MIVRA LABS", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "MIVRA LABS", description: "From idea to AI MVP in 14 days." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
