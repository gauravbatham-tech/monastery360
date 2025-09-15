"use client"
import { useState } from "react"
import Map, { Marker, NavigationControl } from "react-map-gl"
import { useRouter } from "next/navigation"

export default function MapComponent({ locations }: { locations: any[] }) {
  const router = useRouter()
  const [viewState, setViewState] = useState({
    longitude: locations[0]?.lng || 78.9629,
    latitude: locations[0]?.lat || 20.5937,
    zoom: 5,
  })

  return (
    <div className="h-[500px] rounded-lg overflow-hidden">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl position="top-left" />
        {locations.map(loc => (
          <Marker key={loc.id} longitude={loc.lng} latitude={loc.lat}>
            <button
              onClick={() => router.push(`/tour/${loc.id}`)}
              className="bg-white text-sm px-2 py-1 rounded shadow"
            >
              {loc.label}
            </button>
          </Marker>
        ))}
      </Map>
    </div>
  )
}
