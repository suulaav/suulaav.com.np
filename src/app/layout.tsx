import type { Metadata } from "next";
import { VT323, Courier_Prime } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sulav Poudel — Sr. Backend Engineer",
  description:
    "Sr. Backend Engineer based in Kathmandu, Nepal. Building scalable SaaS systems, RESTful APIs, and production-grade backend infrastructure.",
  keywords: [
    "backend engineer",
    "java developer",
    "spring boot",
    "kathmandu",
    "nepal",
    "sulav poudel",
    "saas",
  ],
  authors: [{ name: "Sulav Poudel", url: "https://suulaav.com.np" }],
  openGraph: {
    title: "Sulav Poudel — Sr. Backend Engineer",
    description:
      "Building scalable SaaS systems from the ground up. Based in Kathmandu, Nepal.",
    url: "https://suulaav.com.np",
    siteName: "Sulav Poudel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${vt323.variable} ${courierPrime.variable} scroll-smooth`}
    >
      <body className="bg-cream text-ink antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
