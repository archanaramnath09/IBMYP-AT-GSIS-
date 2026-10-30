import React from 'react';

interface IbMypLogoProps {
  className?: string;
  height?: number;
}

export const IbMypLogo: React.FC<IbMypLogoProps> = ({ className = 'h-10 w-auto', height = 40 }) => {
  const [imageError, setImageError] = React.useState(false);

  if (!imageError) {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img
          src="/assets/brand/ib-myp-badge.png"
          alt="International Baccalaureate Middle Years Programme"
          style={{ height: `${height}px`, width: 'auto' }}
          onError={() => setImageError(true)}
          className="object-contain h-full w-auto drop-shadow-xs"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <svg
        height={height}
        viewBox="0 0 200 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto drop-shadow-xs"
        aria-label="International Baccalaureate Middle Years Programme Logo"
        role="img"
      >
        <defs>
          {/* Official IB MYP Orange-Red Gradient */}
          <linearGradient id="mypGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E24A2D" />
            <stop offset="100%" stopColor="#C92F16" />
          </linearGradient>
          {/* IB Blue Logo Gradient */}
          <linearGradient id="ibCircleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#68B4E8" />
            <stop offset="100%" stopColor="#2E7EBE" />
          </linearGradient>
        </defs>

        {/* Outer Rounded Container */}
        <rect width="200" height="64" rx="10" fill="url(#mypGradient)" />

        {/* Circular IB Brand Mark */}
        <g transform="translate(12, 9)">
          <circle cx="23" cy="23" r="23" fill="url(#ibCircleGradient)" />
          
          {/* Globe Lines on IB circle */}
          <ellipse cx="23" cy="23" rx="14" ry="22" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <line x1="1" y1="23" x2="45" y2="23" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
          <ellipse cx="23" cy="23" rx="22" ry="12" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" fill="none" />

          {/* Lowercase 'i' and 'b' in white */}
          {/* 'i' dot */}
          <circle cx="15" cy="15" r="2.5" fill="#FFFFFF" />
          {/* 'i' stem */}
          <rect x="13" y="20" width="4" height="15" rx="1" fill="#FFFFFF" />
          
          {/* 'b' ascender and bowl */}
          <rect x="21" y="11" width="4" height="24" rx="1" fill="#FFFFFF" />
          <path
            d="M24 20C28.5 20 33 23 33 27.5C33 32 28.5 35 24 35"
            stroke="#FFFFFF"
            strokeWidth="3.6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Text: Middle Years Programme */}
        <text
          x="68"
          y="28"
          fill="#FFFFFF"
          fontSize="17.5"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.2"
        >
          Middle Years
        </text>
        <text
          x="68"
          y="48"
          fill="#FFFFFF"
          fontSize="17.5"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.2"
        >
          Programme
        </text>
      </svg>
    </div>
  );
};
