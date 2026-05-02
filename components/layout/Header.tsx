"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import CTAButton from '@/components/ui/CTAButton';
import { primaryNavigation, siteContact } from '@/lib/site-data';

/* ─── Animation variants ─────────────────────────────────────────────────── */

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
    transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function isActiveRoute(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /*
   * Visual mode:
   *  - "light"  = transparent header, white text   (on hero, before scroll)
   *  - "solid"  = cream/blur header, dark text      (scrolled or inner pages)
   *  - "menu"   = dark header, white text            (mobile menu open)
   */
  const isMenuOpen = isMobileMenuOpen;
  const isLight = !isScrolled && !isMenuOpen;

  /* ── Scroll listener ───────────────────────────────────────────────────── */

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close menu on route change ────────────────────────────────────────── */

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  /* ── Lock body scroll when menu open + Escape key ──────────────────────── */

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

  /* ── Dynamic styles ────────────────────────────────────────────────────── */

  const headerBg = isMenuOpen
    ? 'bg-primary-container/95 backdrop-blur-xl'
    : isScrolled
      ? 'bg-surface/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl'
      : 'bg-transparent';

  const textColor = isLight || isMenuOpen ? 'text-white' : 'text-primary-container';

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      {/* ── Utility strip (desktop only) — replaces old UtilityBar ──── */}
      <div
        className={`hidden items-center justify-between px-12 py-1.5 font-label text-[10px] uppercase tracking-widest transition-colors duration-500 md:flex ${
          isLight
            ? 'text-white/50'
            : isMenuOpen
              ? 'text-white/50'
              : 'text-on-surface-variant/60'
        }`}
      >
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteContact.phone.replace(/[^+\d]/g, '')}`}
            className="flex items-center gap-2 transition-colors hover:text-tertiary-container"
          >
            <Phone className="h-3 w-3" />
            <span>{siteContact.phone}</span>
          </a>
          <span className="flex items-center gap-2">
            <Clock className="h-3 w-3" />
            <span>Mon — Fri: 09:00 — 18:00</span>
          </span>
        </div>
        <a
          href={`mailto:${siteContact.email}`}
          className="flex items-center gap-2 transition-colors hover:text-tertiary-container"
        >
          <Mail className="h-3 w-3" />
          <span>{siteContact.email}</span>
        </a>
      </div>

      {/* ── Main navigation ──────────────────────────────────────────── */}
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-3xl font-semibold italic transition-colors duration-500 ${textColor}`}
          aria-label={`${siteContact.studioName} home`}
        >
          {siteContact.studioName}
        </Link>

        {/* Desktop nav links */}
        <div
          className={`hidden gap-10 font-label text-base font-medium uppercase tracking-[0.16em] transition-colors duration-500 md:flex ${textColor}`}
        >
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
                    : 'relative transition-colors duration-300 hover:text-tertiary-container after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-tertiary-container after:transition-all after:duration-300 hover:after:w-full'
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <CTAButton
            href="/contact"
            variant={isLight ? 'accent' : 'primary'}
            size="md"
          >
            Free Consultation
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className={`transition-colors duration-300 md:hidden ${textColor}`}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* ── Mobile menu overlay ──────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[68px] z-40 bg-primary-container/95 backdrop-blur-xl md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <motion.div
              className="flex h-full flex-col items-center justify-center gap-8 px-6 font-display text-[clamp(2rem,7vw,2.75rem)] italic text-white"
              variants={mobileMenuVariants}
            >
              {primaryNavigation.map((item) => (
                <motion.div key={item.href} variants={mobileItemVariants}>
                  <Link
                    href={item.href}
                    aria-current={
                      isActiveRoute(pathname, item.href) ? 'page' : undefined
                    }
                    className="transition-colors duration-300 hover:text-tertiary-container"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants} className="mt-6">
                <CTAButton href="/contact" variant="accent">
                  Free Consultation
                </CTAButton>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
