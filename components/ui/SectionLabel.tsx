export default function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`uppercase tracking-[0.2rem] text-tertiary-container text-sm font-label font-medium ${className}`}>
      {children}
    </span>
  )
}
