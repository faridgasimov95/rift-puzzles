export default function Logo() {
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12 m-1">
      <defs>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="0%"
            style={{ stopColor: "var(--color-gold-light, #f0e6d2)" }}
          />
          <stop
            offset="50%"
            style={{ stopColor: "var(--color-gold, #c8aa6e)" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "var(--color-gold-dark, #785a28)" }}
          />
        </linearGradient>
      </defs>

      <polygon
        points="50,8 87,29 87,71 50,92 13,71 13,29"
        fill="var(--color-hex-950, #010a13)"
        stroke="url(#gold)"
        strokeWidth="3"
      />

      <polygon
        points="50,32 66,50 50,68 34,50"
        fill="var(--color-hextech, #0ac8b9)"
      />
    </svg>
  );
}
