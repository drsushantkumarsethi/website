import React from 'react';

// Delicate ECG Heartbeat Line Motif
export function MedicalEcgLine({ style = {}, className = '' }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '180px',
        height: '36px',
        opacity: 0.08,
        pointerEvents: 'none',
        ...style
      }}
      className={`medical-accent-decor ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 20 L50 20 L60 20 L65 5 L72 35 L78 12 L84 26 L88 20 L200 20"
        stroke="#213360"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Minimalist Stethoscope Contour
export function MedicalStethoscope({ style = {}, className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '90px',
        height: '90px',
        opacity: 0.06,
        pointerEvents: 'none',
        ...style
      }}
      className={`medical-accent-decor ${className}`}
      aria-hidden="true"
    >
      {/* Ear tubes */}
      <path
        d="M25 20 C25 35, 40 45, 50 45 C60 45, 75 35, 75 20"
        stroke="#213360"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Ear tips */}
      <circle cx="25" cy="20" r="2.5" fill="#213360" />
      <circle cx="75" cy="20" r="2.5" fill="#213360" />
      {/* Main flexible tube */}
      <path
        d="M50 45 L50 65 C50 80, 68 85, 72 75 C75 68, 65 60, 65 52 L65 50"
        stroke="#213360"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Chest piece bell & diaphragm */}
      <circle cx="65" cy="48" r="6" stroke="#21cdc0" strokeWidth="1.5" />
      <circle cx="65" cy="48" r="2" fill="#21cdc0" />
    </svg>
  );
}

// Hexagonal Hepatic / Cellular Micro-Lattice Motif
export function HepaticCellLattice({ style = {}, className = '' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '110px',
        height: '110px',
        opacity: 0.05,
        pointerEvents: 'none',
        ...style
      }}
      className={`medical-accent-decor ${className}`}
      aria-hidden="true"
    >
      {/* Hexagon 1 */}
      <polygon points="30,10 50,22 50,44 30,56 10,44 10,22" stroke="#213360" strokeWidth="1" />
      {/* Hexagon 2 */}
      <polygon points="70,10 90,22 90,44 70,56 50,44 50,22" stroke="#21cdc0" strokeWidth="1" />
      {/* Hexagon 3 */}
      <polygon points="50,44 70,56 70,78 50,90 30,78 30,56" stroke="#213360" strokeWidth="1" />
      {/* Hexagon 4 */}
      <polygon points="90,44 110,56 110,78 90,90 70,78 70,56" stroke="#213360" strokeWidth="1" />
      {/* Hexagon 5 */}
      <polygon points="30,78 50,90 50,112 30,124 10,112 10,90" stroke="#21cdc0" strokeWidth="1" />
    </svg>
  );
}

// Subtle Medical Plus / Sparkle Badge
export function MedicalCrossSparkle({ style = {}, className = '' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '32px',
        height: '32px',
        opacity: 0.1,
        pointerEvents: 'none',
        ...style
      }}
      className={`medical-accent-decor ${className}`}
      aria-hidden="true"
    >
      {/* Medical Cross */}
      <path d="M20 8 L20 32 M8 20 L32 20" stroke="#213360" strokeWidth="2" strokeLinecap="round" />
      {/* Corner Sparkle Dots */}
      <circle cx="12" cy="12" r="1.5" fill="#21cdc0" />
      <circle cx="28" cy="12" r="1.5" fill="#21cdc0" />
      <circle cx="12" cy="28" r="1.5" fill="#21cdc0" />
      <circle cx="28" cy="28" r="1.5" fill="#21cdc0" />
    </svg>
  );
}

// Digestive & Hepatology Smooth Organic Curve
export function DigestiveCurve({ style = {}, className = '' }) {
  return (
    <svg
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '220px',
        height: '55px',
        opacity: 0.05,
        pointerEvents: 'none',
        ...style
      }}
      className={`medical-accent-decor ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 30 C40 10, 80 50, 120 30 C160 10, 200 50, 240 30"
        stroke="#213360"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M0 35 C50 15, 90 45, 140 25 C190 5, 210 40, 240 25"
        stroke="#21cdc0"
        strokeWidth="1"
      />
    </svg>
  );
}
