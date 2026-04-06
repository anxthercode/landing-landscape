import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Serif } from 'next/font/google'
import './globals.css'
import UtilityBar from '@/components/layout/UtilityBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GrainTexture from '@/components/ui/GrainTexture'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

import PageTransition from '@/components/layout/PageTransition'

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
      <body className={`${inter.variable} ${playfair.variable} ${notoSerif.variable} font-body bg-background text-on-background selection:bg-tertiary/30 antialiased`}>
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
