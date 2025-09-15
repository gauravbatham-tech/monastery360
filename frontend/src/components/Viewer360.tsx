"use client"
import dynamic from "next/dynamic"

const Pannellum = dynamic(() => import("pannellum-react").then(mod => mod.Pannellum), { ssr: false })

export default function Viewer360({ image }: { image: string }) {
  return (
    <div className="h-[500px] rounded overflow-hidden bg-black">
      <Pannellum
        width="100%"
        height="100%"
        image={image}
        autoLoad
        showZoomCtrl={false}
      />
    </div>
  )
}
