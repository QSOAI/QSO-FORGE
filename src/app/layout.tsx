import type { Metadata, Viewport } from 'next';
import { inter, playfair } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'QSO FORGE — Digital Revenue Systems',
    template: '%s | QSO FORGE',
  },
  description: 'QSO FORGE designs and builds digital revenue systems that turn attention into qualified leads, bookings and customers.',
  metadataBase: new URL('https://qsoforge.com'),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
