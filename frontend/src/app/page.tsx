import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      {/* Header */}
      <header className="w-full py-4 px-8 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Monastery360</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/map" className="hover:text-blue-600">Map</Link>
          <Link href="/tour" className="hover:text-blue-600">Tour</Link>
          <Link href="/archive" className="hover:text-blue-600">Archive</Link>
          <Link href="/events" className="hover:text-blue-600">Events</Link>
        </nav>
      </header>

      {/* Hero / Landing Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Experience Monasteries Like Never Before
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
          A digital platform that lets you explore monastery heritage with immersive 360° tours,
          interactive maps, and access to historical archives.
        </p>
        <div className="flex gap-4">
          <Link
            href="/map"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore Map
          </Link>
          <Link
            href="/events"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Book Events
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-white text-center text-gray-500 border-t">
        © {new Date().getFullYear()} Monastery360. Built for SIH Prototype.
      </footer>
    </div>
  );
}
