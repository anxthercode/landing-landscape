"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import CTAButton from '@/components/ui/CTAButton';
import { primaryNavigation, siteContact } from '@/lib/site-data';

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

function isActiveRoute(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/80 shadow-[0_12px_40px_rgba(5,36,26,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="font-display text-2xl font-semibold italic text-primary-container"
          aria-label={`${siteContact.studioName} home`}
        >
          {siteContact.studioName}
        </Link>

        <div className="hidden gap-10 font-label text-sm font-medium uppercase tracking-[0.16em] text-primary-container md:flex">
          {primaryNavigation.map((item) => {
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'border-b-2 border-tertiary-container pb-1 text-tertiary-container'
                    : 'transition-colors hover:text-tertiary-container'
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center md:flex">
          <CTAButton href="/contact">Inquire</CTAButton>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="text-primary-container md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[88px] z-40 bg-surface/95 backdrop-blur-xl md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center gap-8 px-6 font-display text-[clamp(2rem,7vw,2.75rem)] italic text-primary-container"
              variants={mobileMenuVariants}
            >
              {primaryNavigation.map((item) => (
                <motion.div key={item.href} variants={mobileItemVariants}>
                  <Link
                    href={item.href}
                    aria-current={isActiveRoute(pathname, item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants} className="mt-6">
                <CTAButton href="/contact">Inquire</CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
