import React from 'react';

interface GsisCrestProps {
  className?: string;
  size?: number;
}

export const GsisCrest: React.FC<GsisCrestProps> = ({ className = 'h-11 w-11', size = 44 }) => {
  const [imageError, setImageError] = React.useState(false);

  if (!imageError) {
    return (
      <img
        src="/assets/brand/gsis-crest.png"
        alt="Good Shepherd International School Crest"
        width={size}
        height={size}
        onError={() => setImageError(true)}
        className={`object-contain shrink-0 ${className}`}
        loading="eager"
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Good Shepherd International School Official Crest"
      role="img"
    >
      {/* Outer shield border in crisp white */}
      <path
        d="M50 4C80 4 94 16 94 38C94 76 50 102 50 102C50 102 6 76 6 38C6 16 20 4 50 4Z"
        fill="#FFFFFF"
        stroke="#1E3A8A"
        strokeWidth="2"
      />

      {/* Main Navy Blue Shield Field */}
      <path
        d="M50 7C77 7 90 18 90 38C90 73 50 98 50 98C50 98 10 73 10 38C10 18 23 7 50 7Z"
        fill="#0E2347"
      />

      {/* Thin inner white shield contour */}
      <path
        d="M50 10C74 10 86 20 86 38C86 70 50 93 50 93C50 93 14 70 14 38C14 20 26 10 50 10Z"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Quadrant Divider Cross in White */}
      <line x1="50" y1="11" x2="50" y2="86" stroke="#FFFFFF" strokeWidth="2.5" />
      <line x1="16" y1="42" x2="84" y2="42" stroke="#FFFFFF" strokeWidth="2.5" />

      {/* Letters in the 4 Quadrants: G, S, I, S */}
      {/* Top Left: G */}
      <text
        x="32"
        y="32"
        fill="#FFFFFF"
        fontSize="17"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        dominantBaseline="central"
      >
        G
      </text>

      {/* Top Right: S */}
      <text
        x="68"
        y="32"
        fill="#FFFFFF"
        fontSize="17"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        dominantBaseline="central"
      >
        S
      </text>

      {/* Bottom Left: I */}
      <text
        x="32"
        y="62"
        fill="#FFFFFF"
        fontSize="17"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        dominantBaseline="central"
      >
        I
      </text>

      {/* Bottom Right: S */}
      <text
        x="68"
        y="62"
        fill="#FFFFFF"
        fontSize="17"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        dominantBaseline="central"
      >
        S
      </text>

      {/* Central Torch Handle (White) */}
      <path
        d="M48 35H52V68H48V35Z"
        fill="#FFFFFF"
      />
      <line x1="46" y1="48" x2="54" y2="48" stroke="#0E2347" strokeWidth="1.5" />

      {/* Torch Flame in Red (Accurate GSIS Official Motif) */}
      <path
        d="M50 16C54 22 58 26 55 31C53 34 49 35 48 31C47 28 50 25 49 22C48 24 45 27 45 30C45 36 52 38 54 36C56 34 57 30 56 27C55 24 53 20 50 16Z"
        fill="#DC2626"
      />
      <path
        d="M50 22C52 26 54 28 53 31C51 33 49 32 49 29C49 27 50 25 50 22Z"
        fill="#FBBF24"
      />

      {/* Bottom Motto Ribbon in Navy Blue & White */}
      <g id="gsis-motto-ribbon">
        {/* Ribbon Tail Left */}
        <polygon points="12,105 2,108 8,114 2,120 16,117" fill="#0E2347" stroke="#FFFFFF" strokeWidth="1" />
        {/* Ribbon Tail Right */}
        <polygon points="88,105 98,108 92,114 98,120 84,117" fill="#0E2347" stroke="#FFFFFF" strokeWidth="1" />
        
        {/* Main Ribbon Body */}
        <path
          d="M10 102C35 107 65 107 90 102L87 114C63 118 37 118 13 114L10 102Z"
          fill="#0E2347"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
        
        {/* Motto: TRUTH, TRUST, TRIUMPH */}
        <text
          x="50"
          y="109.5"
          fill="#FFFFFF"
          fontSize="4.8"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="0.4"
          textAnchor="middle"
          dominantBaseline="central"
        >
          TRUTH. TRUST. TRIUMPH.
        </text>
      </g>
    </svg>
  );
};
