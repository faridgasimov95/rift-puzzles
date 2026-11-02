import HextechButton from "../components/HextechButton";
import HextechFrame from "../components/HextechFrame";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#091428] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <div className="absolute w-96 h-96 bg-hextech/10 rounded-full blur-3xl pointer-events-none" />

      <HextechFrame className="max-w-md w-full text-center relative z-10">
        <h1 className="text-6xl font-black tracking-widest text-gold drop-shadow-[0_0px_15px_var(--color-gold-dark)] mb-2">
          404
        </h1>
        <div className="h-0.5 w-24 bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-4" />

        <h2 className="text-xl font-bold uppercase tracking-wider text-gold-light mb-3">
          GG WP
        </h2>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          The page you are looking for has teleported out or never existed.
        </p>

        <HextechButton onClick={() => (window.location.href = "/")}>
          Return to Hub
        </HextechButton>
      </HextechFrame>
    </div>
  );
}
