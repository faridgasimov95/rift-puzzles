import { type ReactNode } from "react";

interface HextechFrameProps {
  children?: ReactNode;
  className?: string;
}

export default function HextechFrame({
  children,
  className = "",
}: HextechFrameProps) {
  return (
    <div
      className={`relative p-8 border border-gold-dark bg-hex-900/90 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gold" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold" />

      {children}
    </div>
  );
}
