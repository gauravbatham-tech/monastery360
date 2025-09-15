import MapComponent from "../../components/MapComponent"

const LOCATIONS = [
  { id: "p1", label: "Temple A", lat: 21.1458, lng: 79.0882 },
  { id: "p2", label: "Monastery B", lat: 19.076, lng: 72.8777 },
]

export default function MapPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Map</h2>
      <p className="text-gray-600">Click a marker to open the tour.</p>
      <MapComponent locations={LOCATIONS} />
    </div>
  )
}
