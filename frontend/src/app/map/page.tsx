import MapComponent from "@/components/MapComponent"

const LOCATIONS = [
  { id: "p1", label: "Temple A", lat: 21.1458, lng: 79.0882 },
  { id: "p2", label: "Monastery B", lat: 19.076, lng: 72.8777 },
]

export default function MapPage() {
  return (
    <main className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Map</h2>
      <p className="text-gray-600">Click a marker to open the tour.</p>
      <div className="rounded-lg shadow">
        <MapComponent locations={LOCATIONS} />
      </div>
    </main>
  )
}
