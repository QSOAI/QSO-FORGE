import { Cormorant_Garamond, JetBrains_Mono, Inter } from 'next/font/google';

// Neo-serif for headlines — elegant, editorial, strategic (Section 2)
export const serif = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
});

// Monospace for metadata/scores/dates/buttons — technical, precise, evidence-driven (Section 2)
export const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
});

// Sans fallback for body where needed (kept for migration, will be phased to serif/mono per Ledger)
export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
  preload: false,
});

export const playfair = serif;
