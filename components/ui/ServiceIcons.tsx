/**
 * Custom SVG icons for Greenframe services.
 * Stroke-based, monochrome — designed to match the premium editorial tone.
 */

interface IconProps {
  className?: string;
}

/** Stylised tree with leaves — represents garden design & planting */
export function LandscapingIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Tree trunk */}
      <path
        d="M24 38V26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Ground line */}
      <path
        d="M16 38h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Canopy — layered organic shapes */}
      <path
        d="M24 8c-5 0-10 4-10 9 0 2.5 1 4.7 2.6 6.3C14.4 24.5 13 27 13 30c0 0 3.5-1 6-1 1 0 2.2.2 3.2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 8c5 0 10 4 10 9 0 2.5-1 4.7-2.6 6.3C33.6 24.5 35 27 35 30c0 0-3.5-1-6-1-1 0-2.2.2-3.2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small leaf accents */}
      <path
        d="M18 20c0-2 2-4 4-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M28 18c0 2 2 3 3 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Stone block pattern — represents paving, walls, hardscape */
export function HardscapingIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top row of pavers */}
      <rect
        x="8"
        y="10"
        width="14"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="26"
        y="10"
        width="14"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Middle row — offset pattern (brick bond) */}
      <rect
        x="8"
        y="22"
        width="9"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="21"
        y="22"
        width="9"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="34"
        y="22"
        width="6"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Bottom row */}
      <rect
        x="8"
        y="34"
        width="14"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="26"
        y="34"
        width="14"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Garden lamp / pathway light — represents outdoor lighting */
export function OutdoorLightingIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Lamp post */}
      <path
        d="M24 42V24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Base */}
      <path
        d="M20 42h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Lamp head — lantern shape */}
      <path
        d="M18 24h12l-2-10h-8l-2 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Lamp top cap */}
      <path
        d="M20 14h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 14V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Light rays */}
      <path
        d="M14 20l-3-1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M34 20l3-1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M12 25h-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M36 25h3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
