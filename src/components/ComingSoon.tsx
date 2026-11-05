import HextechButton from "./HextechButton";
import HextechFrame from "./HextechFrame";

export default function ComingSoon() {
  return (
    <div className="h-full bg-[#091428] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <div className="absolute w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <HextechFrame className="max-w-md w-full text-center relative z-10">
        <span className="text-xs tracking-widest uppercase text-hextech font-bold mb-2 block">
          In Development
        </span>

        <h1 className="text-3xl font-extrabold tracking-wider text-gold-50 uppercase mb-2">
          Coming Soon
        </h1>
        <div className="h-0.5 w-24 bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-4" />

        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          Our Hextech engineers are crafting new puzzles. Prepare your League
          knowledge!
        </p>

        <HextechButton to="/">Return Home</HextechButton>
      </HextechFrame>
    </div>
  );
}
