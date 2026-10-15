import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ledger — launch default (Section 3)
        ledger: {
          dark: '#12120F',
          light: '#FAF9F5',
          accent: '#0C6156',
          'accent-hover': '#0A4F46',
          evidence: '#B8873D',
          'evidence-hover': '#9E7334',
          muted: '#8A8A7D',
          border: '#2A2A26',
          'border-light': '#E8E6E0',
        },
        // Keep neutral primary for borders/text that is not Ledger-specific (will be phased to ledger)
        primary: {
          50: '#FAF9F5',
          100: '#F5F3EF',
          200: '#E8E6E0',
          300: '#D4D0C8',
          400: '#A8A5A0',
          500: '#8A8A7D',
          600: '#6B6B5E',
          700: '#4A4A42',
          800: '#2A2A26',
          900: '#12120F',
          950: '#0A0A08',
        },
        accent: {
          50: '#E6F2F0',
          100: '#CCE5E1',
          200: '#99CBC3',
          300: '#66B1A5',
          400: '#339787',
          500: '#0C6156',
          600: '#0A4F46',
          700: '#083D36',
          800: '#062B26',
          900: '#041916',
          950: '#020D0B',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '1px',
        DEFAULT: '2px',
        md: '2px',
        lg: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
