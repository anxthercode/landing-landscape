"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useDarkMode } from '@/hooks/useDarkMode';
import CTAButton from '@/components/ui/CTAButton';

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -24,
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1] as const,
      when: 'afterChildren' as const,
      staggerChildren: 0.04,
      staggerDirection: -1 as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1] as const,
      when: 'beforeChildren' as const,
      staggerChildren: 0.06,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const navigationItems = [
  { href: '/gardens', label: 'Gardens', isActive: true },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isDark, toggleDark] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl bg-surface/80 shadow-[0_12px_40px_rgba(5,36,26,0.08)]' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="font-display text-2xl italic font-semibold text-primary-container dark:text-surface">
          <Link href="/">Studio Aethel</Link>
        </div>

        <div className="hidden md:flex gap-10 font-label font-medium text-sm tracking-[0.16em] uppercase text-primary-container dark:text-surface">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.isActive ? 'border-b-2 border-tertiary-container pb-1 text-tertiary-container' : 'hover:text-tertiary-container transition-colors'}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleDark}
            className="text-primary-container dark:text-surface hover:opacity-80 transition-all duration-300"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <CTAButton>Inquire</CTAButton>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDark}
            className="text-primary-container dark:text-surface"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-primary-container dark:text-surface"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-x-0 top-[88px] bottom-0 z-40 bg-surface/95 backdrop-blur-xl md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            data-lenis-prevent
          >
            <motion.div className="flex h-full flex-col items-center justify-center gap-8 px-6 text-primary-container dark:text-surface text-[clamp(2rem,7vw,2.75rem)] font-display italic" variants={mobileMenuVariants}>
              {navigationItems.map((item) => (
                <motion.div key={item.href} variants={mobileItemVariants}>
                  <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={mobileItemVariants} className="mt-6">
                <CTAButton onClick={() => setIsMobileMenuOpen(false)}>Inquire</CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
