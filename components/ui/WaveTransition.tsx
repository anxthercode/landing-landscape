interface WaveTransitionProps {
  /** Fill colour for the wave shape. Defaults to the surface token via CSS variable. */
  fill?: string;
  className?: string;
}

/**
 * Decorative SVG wave used at the bottom of the Hero section.
 * The default fill is driven by a CSS variable so it stays
 * in sync with the theme without hardcoded hex values.
 */
export default function WaveTransition({
  fill = 'var(--color-surface, #fcf9f4)',
  className = '',
}: WaveTransitionProps) {
  return (
    <div className={`w-full leading-[0] ${className}`} aria-hidden="true">
      <svg
        className="w-full h-auto"
        fill="none"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1440 100V0C1402 0 1344 33 1248 33C1152 33 1056 0 864 0C672 0 576 33 480 33C384 33 288 0 192 0C96 0 48 33 0 33V100H1440Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
