interface HWLogoProps {
  className?: string;
}

export function HWLogo({ className = "" }: HWLogoProps) {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* H letter */}
      <path
        d="M50 50 L50 350 M50 200 L150 200 M150 50 L150 350"
        stroke="#1a1a1a"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Curved connection from H to W */}
      <path
        d="M150 350 Q250 350 300 280"
        stroke="#1a1a1a"
        strokeWidth="24"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* W letter */}
      <path
        d="M300 50 L350 350 L450 150 L550 350 L600 50"
        stroke="#1a1a1a"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Silver/Gray triangular accent on W */}
      <path
        d="M580 80 L650 50 L620 130 Z"
        fill="url(#silverGradient)"
      />
      
      {/* Gradient definition for silver accent */}
      <defs>
        <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="25%" stopColor="#9ca3af" />
          <stop offset="50%" stopColor="#6b7280" />
          <stop offset="75%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
    </svg>
  );
}
