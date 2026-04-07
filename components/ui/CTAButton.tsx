import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'ghost';
}

export default function CTAButton({
  children,
  href,
  size = 'md',
  variant = 'primary',
  className = '',
  disabled,
  ...props
}: CTAButtonProps) {
  const baseStyled =
    'inline-flex items-center justify-center rounded-xl font-label transition-all disabled:pointer-events-none disabled:opacity-60 hover:opacity-80 active:scale-[0.98]';
  const sizeStyled =
    size === 'sm'
      ? 'px-4 py-2 text-sm'
      : size === 'lg'
        ? 'px-10 py-5 text-lg'
        : 'px-8 py-3 text-[11px] uppercase tracking-widest';
  const variantStyled =
    variant === 'primary'
      ? 'bg-primary text-on-primary'
      : 'border border-primary-container bg-transparent text-primary-container';

  const classes = `${baseStyled} ${sizeStyled} ${variantStyled} ${className}`;

  const content = (
    <>
      {children}
      {variant === 'primary' && <ChevronRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
