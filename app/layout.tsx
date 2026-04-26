import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans-ui',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Greenframe — Landscape Design, Build & Care',
  description:
    'We design and deliver residential landscapes with a stronger sense of structure, atmosphere, and long-term ease — from first concept through final planting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-body bg-background text-on-background antialiased`}
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
