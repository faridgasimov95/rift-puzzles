import { useId } from "react";

type LogoProps = {
  className?: string;
};
const circleCoords = [
  { cx: 50, cy: 8 },
  { cx: 87, cy: 29 },
  { cx: 87, cy: 71 },
  { cx: 50, cy: 92 },
  { cx: 13, cy: 71 },
  { cx: 13, cy: 29 },
];

export default function Logo({ className }: LogoProps) {
  const baseId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const goldId = `${baseId}-gold`;
  const hextechId = `${baseId}-hextech`;
  const glowId = `${baseId}-glow`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={goldId} x1="0" y1="0" x2="1" y2="1">
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

        <linearGradient id={hextechId} x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            style={{ stopColor: "var(--color-hextech-light, #5ff2e6)" }}
          />
          <stop
            offset="50%"
            style={{ stopColor: "var(--color-hextech, #0ac8b9)" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "var(--color-hextech-dark, #0a8f86)" }}
          />
        </linearGradient>

        <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6.5" />
        </filter>
      </defs>

      <polygon
        points="50,8 87,29 87,71 50,92 13,71 13,29"
        className="fill-hex-950"
        stroke={`url(#${goldId})`}
        strokeWidth="3"
      />

      <polygon
        points="50,17 78.6,33.5 78.6,66.5 50,83 21.4,66.5 21.4,33.5"
        strokeDasharray="3 4"
        className="stroke-hextech"
        strokeWidth={1.5}
      />

      <polygon
        points="50,21 75.1,35.5 75.1,64.5 50,79 24.9,64.5 24.9,35.5"
        className="stroke-gold-dark"
        strokeWidth={1.5}
      />

      {circleCoords.map((val) => (
        <circle
          key={`${val.cx}-${val.cy}`}
          cx={val.cx}
          cy={val.cy}
          r="3"
          className="fill-gold-light"
        />
      ))}

      <circle
        cx="50"
        cy="50"
        r="18"
        className="fill-hextech"
        filter={`url(#${glowId})`}
      />
      <polygon points="50,32 66,50 50,68 34,50" fill={`url(#${hextechId})`} />
      <polygon points="50,32 66,50 50,50" className="fill-hextech-light/75" />
    </svg>
  );
}
