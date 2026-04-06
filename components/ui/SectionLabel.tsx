export default function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`uppercase tracking-[0.15rem] text-tertiary-container text-xs font-label ${className}`}>
      {children}
    </span>
  )
}
