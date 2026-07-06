export default function Home() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center bg-stone-800 text-white text-center">
      <h2 className="text-6xl font-bold mb-4">Brewed to Perfection</h2>
      <p className="text-xl mb-8">Experience the finest artisan coffee in town.</p>
      <a href="/menu" className="px-8 py-3 bg-amber-600 rounded-lg font-semibold">View Our Menu</a>
    </section>
  );
}