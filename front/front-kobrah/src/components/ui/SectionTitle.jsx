/** Section heading with an optional lede. Headings carry their own weight: no eyebrow labels. */
export default function SectionTitle({ id, title, lede, className = '' }) {
  return (
    <div className={`section-title ${className}`.trim()}>
      <h2 id={id}>{title}</h2>
      {lede && <p>{lede}</p>}
    </div>
  )
}
