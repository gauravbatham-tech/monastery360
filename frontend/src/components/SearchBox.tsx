export default function SearchBox({ value, onChange, placeholder }: { value: string, onChange: (v: string)=>void, placeholder?: string }) {
  return (
    <input
      className="border p-2 rounded w-full"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
