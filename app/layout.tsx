import type { Metadata } from 'next';
import { Cormorant, Instrument_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans-ui',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Studio Aethel — Landscape Design, Build & Care',
  description:
    'We design and deliver residential landscapes with a stronger sense of structure, atmosphere, and long-term ease — from first concept through final planting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${instrument.variable} font-body bg-background text-on-background antialiased`}
      >
        {/* Accessibility: skip-to-content link */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />
      </body>
    </html>
  );
}
