"use client"

import dynamic from "next/dynamic"

// @ts-ignore: no types for react-360-view
const ThreeSixty: any = dynamic(() => import("react-360-view"), { ssr: false })

export default function Viewer360() {
  return (
    <div className="h-[500px] flex items-center justify-center bg-gray-100 rounded">
      <ThreeSixty
        amount={5}
        imagePath="/"
        fileName="{index}.svg"
        startIndex={1}
        autoplay
        loop
      />
    </div>
  )
}

