export default function Logo() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-12 h-12 m-1">
      <defs>
        <linearGradient
          id="gold"
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--color-gold-light, #f0e6d2)" />
          <stop offset="50%" stopColor="var(--color-gold, #c8aa6e)" />
          <stop offset="100%" stopColor="var(--color-gold-dark, #785a28)" />
        </linearGradient>
      </defs>

      <polygon
        points="100,16 174,58 174,142 100,184 26,142 26,58"
        fill="var(--color-hex-950, #010a13)"
        stroke="url(#gold)"
        strokeWidth="6"
      />

      <polygon
        points="100,64 132,100 100,136 68,100"
        fill="var(--color-hextech, #0ac8b9)"
      />
    </svg>
  );
}
