import React from 'react';

// Exact Red Robin Red Vector Artwork (Burgundy dark red textured vector matching user's original brand asset)
export const RedRobinBrandBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#5a0004]">
      {/* Deep Rich Gradient Foundation */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #7b0006 0%, #580004 50%, #360002 100%)',
        }}
      />

      {/* Embedded High-Precision Red Robin Vector Watermarks */}
      <svg 
        className="absolute inset-0 w-full h-full object-cover select-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
          </radialGradient>
        </defs>

        {/* 1. TOP-LEFT: Red Robin GOURMET BURGERS AND BREWS Arch Header */}
        <g transform="translate(60, 60)" fill="#1c0002" opacity="0.38">
          <path d="M 120,40 Q 280,0 440,25" stroke="#1c0002" strokeWidth="8" fill="none" strokeLinecap="round" />
          <text x="30" y="145" fontFamily="'Brush Script MT', cursive, Georgia, serif" fontSize="130" fontWeight="900" fontStyle="italic" letterSpacing="-2">
            Red Robin
          </text>
          <text x="40" y="190" fontFamily="sans-serif" fontSize="24" fontWeight="900" letterSpacing="6">
            GOURMET BURGERS <tspan fontSize="18">AND</tspan> BREWS
          </text>
        </g>

        {/* 2. MID-LEFT: Circular Seal (Red Robin EST. 1969 BREWS) */}
        <g transform="translate(60, 290)" stroke="#1c0002" fill="none" opacity="0.35">
          <circle cx="160" cy="160" r="145" strokeWidth="6" />
          <circle cx="160" cy="160" r="128" strokeWidth="2.5" strokeDasharray="8 6" />
          <path id="sealPath" d="M 40,160 A 120,120 0 0,1 280,160" fill="none" />
          <text fill="#1c0002" fontSize="20" fontWeight="800" letterSpacing="4" stroke="none">
            <textPath href="#sealPath" startOffset="50%" textAnchor="middle">GOURMET BURGERS</textPath>
          </text>
          <text x="160" y="170" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="'Brush Script MT', cursive, Georgia, serif" fontSize="62" fontWeight="900" fontStyle="italic">
            Red Robin
          </text>
          <text x="160" y="210" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="18" fontWeight="800" letterSpacing="3">
            EST. 1969
          </text>
          <text x="160" y="245" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="4">
            BREWS
          </text>
        </g>

        {/* 3. BOTTOM-LEFT: Red Robin Mascot Silhouette (Robin with RR Sweater & Thumbs Up) */}
        <g transform="translate(60, 560)" stroke="#1c0002" strokeWidth="4" fill="none" opacity="0.32" strokeLinecap="round" strokeLinejoin="round">
          {/* Bird Head & Cap */}
          <circle cx="140" cy="80" r="45" />
          {/* Big Open Beak */}
          <path d="M 175,70 Q 230,85 190,105 Q 170,95 160,95 Z" />
          {/* Smiling Eye */}
          <circle cx="150" cy="70" r="7" fill="#1c0002" />
          {/* Sweater Body */}
          <path d="M 110,120 Q 140,115 170,120 L 185,210 Q 140,225 95,210 Z" />
          <text x="140" y="175" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="serif" fontSize="32" fontWeight="900" fontStyle="italic">RR</text>
          {/* Thumbs Up Hand */}
          <path d="M 210,135 Q 235,110 240,95 Q 248,95 245,115 L 245,145 L 210,165 Z" />
          {/* Tail Feathers */}
          <path d="M 85,150 L 35,140 Q 55,180 85,190" />
          <path d="M 85,170 L 25,185 Q 55,220 90,210" />
          {/* Legs */}
          <path d="M 120,215 L 115,265 L 85,275 M 115,265 L 130,275" />
          <path d="M 160,215 L 165,265 L 140,275 M 165,265 L 180,275" />
        </g>

        {/* 4. BOTTOM-LEFT / MID: 'YUMMM - IT'S OUR RED ROBIN WAY -' Marquee Arrow */}
        <g transform="translate(240, 780) rotate(-10)" stroke="#1c0002" strokeWidth="4" fill="none" opacity="0.35">
          <path d="M 0,0 L 320,0 L 390,75 L 320,150 L 0,150 Z" />
          <text x="160" y="70" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="48" fontWeight="900" letterSpacing="3">
            YUMMM
          </text>
          <text x="160" y="110" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="18" fontWeight="800" letterSpacing="2">
            - IT'S OUR -
          </text>
          <text x="160" y="135" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="20" fontWeight="900" letterSpacing="1.5">
            RED ROBIN WAY
          </text>
          {/* Marquee perimeter lights */}
          {[20, 70, 120, 170, 220, 270, 310].map((cx, idx) => (
            <circle key={`top-${idx}`} cx={cx} cy="18" r="4" fill="#1c0002" stroke="none" />
          ))}
          {[20, 70, 120, 170, 220, 270, 310].map((cx, idx) => (
            <circle key={`bot-${idx}`} cx={cx} cy="132" r="4" fill="#1c0002" stroke="none" />
          ))}
          <circle cx="340" cy="45" r="4" fill="#1c0002" stroke="none" />
          <circle cx="365" cy="75" r="4" fill="#1c0002" stroke="none" />
          <circle cx="340" cy="105" r="4" fill="#1c0002" stroke="none" />
        </g>

        {/* 5. TOP-RIGHT: Slanted Vintage Red Robin Billboard with Sparkles */}
        <g transform="translate(1450, 70) rotate(5)" stroke="#1c0002" fill="none" opacity="0.36">
          {/* Sparkles */}
          <path d="M -30,60 L -10,60 M -20,50 L -20,70" strokeWidth="4" />
          <path d="M 430,70 L 450,70 M 440,60 L 440,80" strokeWidth="4" />
          {/* Main trapezoid frame */}
          <polygon points="20,0 400,30 360,200 0,150" strokeWidth="5" />
          <text x="190" y="100" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="'Brush Script MT', cursive, Georgia, serif" fontSize="72" fontWeight="900" fontStyle="italic">
            Red Robin
          </text>
          {/* Bottom Banner */}
          <polygon points="10,140 370,170 350,220 0,180" fill="#1c0002" fillOpacity="0.1" strokeWidth="4" />
          <text x="180" y="195" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="4">
            GOURMET BURGERS
          </text>
          <text x="180" y="225" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="16" fontWeight="900" letterSpacing="3">
            &amp; BREWS
          </text>
        </g>

        {/* 6. MID-RIGHT: EST. 1969 SEATTLE, WA Circular Stamp */}
        <g transform="translate(1620, 440)" stroke="#1c0002" strokeWidth="4.5" fill="none" opacity="0.32">
          <circle cx="110" cy="110" r="100" />
          <circle cx="110" cy="110" r="88" strokeWidth="2" strokeDasharray="5 5" />
          <text x="110" y="85" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="3">
            EST.
          </text>
          <text x="110" y="130" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="42" fontWeight="900" letterSpacing="1">
            1969
          </text>
          <text x="110" y="160" textAnchor="middle" fill="#1c0002" stroke="none" fontFamily="sans-serif" fontSize="16" fontWeight="800" letterSpacing="2">
            SEATTLE, WA
          </text>
        </g>

        {/* 7. BOTTOM-RIGHT: Large 'RR That's the Red Robin Way.®' Swirl and Script */}
        <g transform="translate(1380, 620)" fill="#1c0002" opacity="0.38">
          <text x="120" y="170" fontFamily="'Brush Script MT', cursive, Georgia, serif" fontSize="180" fontWeight="900" fontStyle="italic" letterSpacing="-8">
            RR
          </text>
          <text x="30" y="260" fontFamily="'Brush Script MT', cursive, Georgia, serif" fontSize="64" fontWeight="700" fontStyle="italic">
            That's the
          </text>
          <text x="0" y="340" fontFamily="'Brush Script MT', cursive, Georgia, serif" fontSize="88" fontWeight="900" fontStyle="italic">
            Red Robin Way.®
          </text>
        </g>

        {/* 8. Sweeping Brushed Wave across the bottom edge */}
        <path 
          d="M -100,1020 C 400,940 900,980 1400,890 C 1650,845 1850,780 2050,790 L 2050,1120 L -100,1120 Z" 
          fill="#1c0002" 
          opacity="0.5" 
        />

        {/* Vignette Overlay */}
        <rect width="1920" height="1080" fill="url(#vignette)" />
      </svg>
    </div>
  );
};
