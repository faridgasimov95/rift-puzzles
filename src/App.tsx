const games = ["Champdle", "Rift Links", "Ability Guesser"];

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-hex-900 to-hex-950">
      <main className="mx-auto max-w-3xl px-5 py-12">
        <header className="border-b-2 border-gold-500 pb-4">
          <h1 className="text-4xl font-bold tracking-wide text-gold-500">
            Rift Puzzles
          </h1>
          <p className="mt-1 text-gold-300/70">Dummy page. Games go here.</p>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {games.map((name) => (
            <button
              key={name}
              className="rounded-sm border border-gold-700 bg-hex-800 p-5 text-left transition hover:border-hextech hover:text-hextech focus-visible:outline-2 focus-visible:outline-hextech"
            >
              <span className="block text-lg font-semibold">{name}</span>
              <span className="text-sm text-gold-300/60">Coming soon</span>
            </button>
          ))}
        </section>
      </main>
    </div>
  );
}
