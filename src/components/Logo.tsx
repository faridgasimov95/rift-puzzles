import { useId } from "react";

type LogoProps = {
  className: string;
};

export default function Logo({ className }: LogoProps) {
  const gradientId = useId().replace(/[^a-zA-Z0-9]/g, "");

  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
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
        className="fill-hex-950"
        stroke={`url(#${gradientId})`}
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
        className="stroke-gold"
        strokeWidth={1.5}
      />

      <circle
        cx="50"
        cy="8"
        r="3"
        className=" fill-gold-light"
        strokeWidth="1"
      />
      <circle
        cx="87"
        cy="29"
        r="3"
        className=" fill-gold-light"
        strokeWidth="1"
      />
      <circle
        cx="87"
        cy="71"
        r="3"
        className=" fill-gold-light"
        strokeWidth="1"
      />
      <circle
        cx="50"
        cy="92"
        r="3"
        className=" fill-gold-light"
        strokeWidth="1"
      />
      <circle
        cx="13"
        cy="71"
        r="3"
        className=" fill-gold-light"
        strokeWidth="1"
      />
      <circle
        cx="13"
        cy="29"
        r="3"
        className=" fill-gold-light"
        strokeWidth="1"
      />

      <polygon points="50,32 66,50 50,68 34,50" className="fill-hextech" />
    </svg>
  );
}
