import type { Metadata } from 'next'
import { Cormorant, Instrument_Sans } from 'next/font/google'
import './globals.css'
import UtilityBar from '@/components/layout/UtilityBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GrainTexture from '@/components/ui/GrainTexture'
import PageTransition from '@/components/layout/PageTransition'
import SmoothScroll from '@/providers/SmoothScroll'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans-ui',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Landscape Design',
  description: 'Premium landscape design services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${instrument.variable} font-body bg-background text-on-background selection:bg-tertiary-container/25 antialiased`}
      >
        <SmoothScroll />
        <GrainTexture />
        <UtilityBar />
        <Header />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
