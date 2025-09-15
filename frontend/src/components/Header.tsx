import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow mb-6">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-10 h-10 rounded" />
          <span className="font-bold text-lg">Monastery360</span>
        </div>
        <nav className="flex gap-4 text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/map">Map</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/events">Events</Link>
        </nav>
      </div>
    </header>
  )
}
