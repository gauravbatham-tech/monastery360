"use client"
import { useState } from "react"
import SearchBox from "../../components/SearchBox"
import Card from "../../components/Card"

const MOCK = [
  { id: "d1", title: "Scan 1", ocr: "This is OCR text for document one." },
  { id: "d2", title: "Scan 2", ocr: "Another OCRed text with keywords." },
]

export default function ArchivePage() {
  const [q, setQ] = useState("")
  const results = MOCK.filter(d => (d.title + d.ocr).toLowerCase().includes(q.toLowerCase()))

  return (
    <div>
      <h2 className="text-xl font-semibold">Archive</h2>
      <SearchBox value={q} onChange={setQ} placeholder="Search OCR text" />
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {results.map(r => (
          <Card key={r.id} title={r.title} subtitle={r.ocr.slice(0, 100) + "..."} />
        ))}
      </div>
    </div>
  )
}
