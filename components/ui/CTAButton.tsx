import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'accent' | 'ghost' | 'outline-light';
}

const sizeStyles = {
  sm:  'h-10 px-6 text-[11px]',
  md:  'h-12 px-8 text-[11px]',
  lg:  'h-14 px-10 text-[12px]',
} as const;

const variantStyles = {
  primary:
    'bg-primary text-on-primary shadow-md hover:shadow-card-hover',
  accent:
    'bg-tertiary-container text-on-tertiary-container shadow-md hover:shadow-glow-gold',
  ghost:
    'border border-primary-container bg-transparent text-primary-container hover:bg-primary-container/5',
  'outline-light':
    'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/40',
} as const;

/** Whether to show the trailing arrow icon */
const showArrow = new Set<string>(['primary', 'accent']);

export default function CTAButton({
  children,
  href,
  size = 'md',
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-label uppercase tracking-[0.14em] font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 hover:opacity-95 active:scale-[0.98]';

  const classes = `${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow.has(variant) && (
        <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${classes}`} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
