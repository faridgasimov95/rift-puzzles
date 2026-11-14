import { Link } from "react-router";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="bg-hex-950 border-gold-dark text-gold border-divider px-6 flex items-stretch h-14 z-50">
      <Logo className="w-12 h-12 m-1" />
      <Link
        to="/"
        className="text-xl text-nav-text font-bold flex items-center px-4"
      >
        Rift Puzzles
      </Link>
    </nav>
  );
}
