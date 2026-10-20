import { useState } from 'react'
import Bars from '../../components/ui/Bars'
import CountUp from '../../components/ui/CountUp'
import Reveal from '../../components/ui/Reveal'
import { useContent } from '../../context/content'
import './StatsBand.css'

/** Company figures (configured in the backend: config/site.php → stats). */
export default function StatsBand() {
  const { site } = useContent()
  const [counting, setCounting] = useState(false)

  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <Reveal className="stats" onReveal={() => setCounting(true)}>
          <Bars white />
          {site.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-num">
                {stat.prefix && <em>{stat.prefix}</em>}
                <CountUp end={stat.value} start={counting} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
