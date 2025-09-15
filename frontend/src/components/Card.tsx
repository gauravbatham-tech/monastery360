export default function Card({ title, subtitle, children }: { title?: string, subtitle?: string, children?: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {title && <h3 className="font-semibold text-lg">{title}</h3>}
      {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
      {children}
    </div>
  )
}
