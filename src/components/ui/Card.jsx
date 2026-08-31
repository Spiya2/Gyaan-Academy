/** Surface container with consistent border, radius and shadow. */
export default function Card({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </Tag>
  )
}
