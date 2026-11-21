import { Link } from "react-router";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="bg-hex-950 border-gold-dark text-gold border-b-2 px-6 flex items-center h-16 z-50">
      <Link
        to="/"
        className="text-xl font-bold flex items-center px-4 gap-1 hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-hextech"
      >
        <Logo className="w-12 h-12" />
        Rift Puzzles
      </Link>
    </nav>
  );
}
