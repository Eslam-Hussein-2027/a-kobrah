import Reveal from './Reveal'

/** Centered section heading: kicker pill, title with gradient highlight, optional lead. */
export default function SectionHead({ kicker, title, highlight, lead, className = '', style }) {
  return (
    <Reveal className={`section-head ${className}`.trim()} style={style}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>
        {title} {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}
