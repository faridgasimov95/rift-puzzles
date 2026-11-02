import type { ReactNode } from "react";

interface HextechButtonProps {
  children?: ReactNode;
  onClick: () => void;
  className?: string;
}

export default function HextechButton({
  children,
  onClick,
  className = "",
}: HextechButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-2.5 bg-linear-to-b from-hex-800 to-hex-900 border border-gold text-gold font-bold tracking-widest uppercase hover:text-gold-light hover:border-gold-light hover:shadow-[0_0_15px_rgba(200,170,110,0.4)] active:scale-95 transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
