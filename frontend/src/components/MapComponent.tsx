"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useRouter } from "next/navigation"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

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

  useEffect(() => {
    // Fix missing marker icons in Next.js
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })
  }, [])

  return (
    <div className="h-[500px] rounded-lg overflow-hidden">
      <MapContainer
        key={`${center[0]}-${center[1]}`} // ✅ prevents "already initialized" error
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
