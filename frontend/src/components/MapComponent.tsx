"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useRouter } from "next/navigation"

type Location = {
  id: string | number
  lng: number
  lat: number
  label: string
}

export default function MapComponent({ locations }: { locations: Location[] }) {
  const router = useRouter()

  const center: [number, number] = [
    locations[0]?.lat || 20.5937,
    locations[0]?.lng || 78.9629,
  ]

  return (
    <div className="h-[500px] rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={5}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <button
                onClick={() => router.push(`/tour/${loc.id}`)}
                className="bg-white text-sm px-2 py-1 rounded shadow"
              >
                {loc.label}
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
