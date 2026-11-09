import HextechButton from "../components/HextechButton";
import HextechFrame from "../components/HextechFrame";

interface StatusPageProp {
  title: string;
  heading: string;
  message: string;
}

export default function StatusPage({
  title,
  heading,
  message,
}: StatusPageProp) {
  return (
    <div className="h-full flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-hextech/10 rounded-full blur-3xl pointer-events-none" />

      <HextechFrame className="max-w-md w-full text-center relative z-10">
        <span className="text-xs tracking-widest uppercase text-hextech font-bold mb-2 block">
          {title}
        </span>

        <h1 className="text-3xl font-extrabold tracking-wider text-gold drop-shadow-[0_0px_15px_var(--color-gold-dark)] uppercase mb-2">
          {heading}
        </h1>
        <div className="h-0.5 w-24 bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-4" />

        <p className="text-gray-400 text-sm leading-relaxed mb-6">{message}</p>

        <HextechButton to="/">Return Home</HextechButton>
      </HextechFrame>
    </div>
  );
}
