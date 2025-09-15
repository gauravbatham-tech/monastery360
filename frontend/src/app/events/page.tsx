"use client"
import { useState } from "react"

export default function EventsPage() {
  const [form, setForm] = useState({ name: "", email: "", date: "", notes: "" })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Booking submitted (mock)")
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Events & Booking</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow space-y-4 max-w-md">
        <input className="border w-full p-2 rounded" placeholder="Name"
          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input className="border w-full p-2 rounded" placeholder="Email" type="email"
          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input className="border w-full p-2 rounded" type="date"
          value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
        <textarea className="border w-full p-2 rounded" placeholder="Notes"
          value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Request Booking</button>
      </form>
    </div>
  )
}
