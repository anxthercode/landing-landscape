"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import CTAButton from '@/components/ui/CTAButton';

export default function Header() {
  const [isDark, toggleDark] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-surface/80' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="font-display text-2xl italic font-semibold text-primary-container dark:text-surface">
          <Link href="/">Studio Aethel</Link>
        </div>

        <div className="hidden md:flex gap-10 font-headline font-medium text-sm tracking-tight text-primary-container dark:text-surface">
          <Link href="/gardens" className="border-b-2 border-tertiary-container pb-1 text-tertiary-container">Gardens</Link>
          <Link href="/services" className="hover:text-tertiary-container transition-colors">Services</Link>
          <Link href="/about" className="hover:text-tertiary-container transition-colors">About</Link>
          <Link href="/contact" className="hover:text-tertiary-container transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={toggleDark} className="text-primary-container dark:text-surface hover:opacity-80 transition-all duration-300">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <CTAButton>Inquire</CTAButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDark} className="text-primary-container dark:text-surface">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary-container dark:text-surface">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] z-40 bg-surface flex flex-col items-center justify-center gap-8 md:hidden text-primary-container dark:text-surface text-2xl font-display">
          <Link href="/gardens" onClick={() => setIsMobileMenuOpen(false)}>Gardens</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <div className="mt-8">
            <CTAButton onClick={() => setIsMobileMenuOpen(false)}>Inquire</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
