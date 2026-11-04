import type { ReactNode } from "react";
import { Link } from "react-router";

interface HextechButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  to: string;
}

export default function HextechButton({
  children,
  onClick,
  className = "",
  to,
}: HextechButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-block relative px-6 py-2.5 bg-linear-to-b from-hex-800 to-hex-900 border border-gold text-gold font-bold tracking-widest uppercase hover:text-gold-light hover:border-gold-light hover:shadow-[0_0_15px_rgba(200,170,110,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hextech  active:scale-95 transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}
