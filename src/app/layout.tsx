import type { Metadata, Viewport } from "next";
import { serif, mono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "QSO FORGE — Digital Revenue Systems",
    template: "%s | QSO FORGE",
  },
  description: "QSO FORGE designs and builds digital revenue systems that turn attention into qualified leads, bookings and customers.",
  metadataBase: new URL("https://qsoforge.com"),
  openGraph: {
    type: "website",
    siteName: "QSO FORGE",
    title: "QSO FORGE — Digital Revenue Systems",
    description: "Your website should do more than look good. It should produce business.",
    images: [
      {
        url: "/images/hero-qso-forge.jpg",
        width: 1280,
        height: 720,
        alt: "QSO FORGE — precision-engineered revenue systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QSO FORGE — Digital Revenue Systems",
    description: "Your website should do more than look good. It should produce business.",
    images: ["/images/hero-qso-forge.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#12120F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-ledger-dark text-ledger-light antialiased">{children}</body>
    </html>
  );
}
