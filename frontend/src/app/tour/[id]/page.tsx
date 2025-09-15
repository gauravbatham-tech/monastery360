"use client"
import { useParams } from "next/navigation"
import Viewer360 from "../../../components/Viewer360"
import Link from "next/link"

const PANOS: Record<string, string> = {
  p1: "/panoramas/pano1.jpg",
  p2: "/panoramas/pano2.jpg",
}

export default function TourPage() {
  const { id } = useParams()
  const src = PANOS[id as string] || "/panoramas/pano1.jpg"

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Tour {id}</h2>
      <Viewer360 image={src} />
      <Link href="/events">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">Book a Visit</button>
      </Link>
    </div>
  )
}
