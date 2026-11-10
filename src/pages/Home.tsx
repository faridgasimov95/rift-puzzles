import { Link } from "react-router";
import games from "../games";

function HomePage() {
  return (
    <div className="h-full bg-linear-to-b from-hex-900 to-hex-950">
      <main className="mx-auto max-w-3xl px-5 py-12">
        <header className="border-b-2 border-gold pb-4">
          <h1 className="text-4xl font-bold tracking-wide text-gold">
            Rift Puzzles
          </h1>
          <p className="mt-1 text-gold-light/70">Dummy page. Games go here.</p>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {games.map((game) => (
            <Link
              to={game.path}
              key={game.path}
              className="rounded-sm border border-gold-dark bg-hex-800 p-5 text-left transition hover:border-hextech hover:text-hextech focus-visible:outline-2 focus-visible:outline-hextech"
            >
              <span className="block text-lg font-semibold">{game.name}</span>
              <span className="text-sm text-gold-light/60">
                {game.description}
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
