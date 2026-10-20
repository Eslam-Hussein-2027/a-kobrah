import Icon from '../../components/ui/Icon'
import Reveal from '../../components/ui/Reveal'
import SectionHead from '../../components/ui/SectionHead'
import { useContent } from '../../context/content'
import './SectorsMarquee.css'

/** Endless scrolling strip of the sectors the company serves. */
export default function SectorsMarquee() {
  const { sectors } = useContent()
  // The list is rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const loop = [...sectors.map((s) => ({ ...s, copy: false })), ...sectors.map((s) => ({ ...s, copy: true }))]

  return (
    <section className="section section-white" style={{ paddingBlock: 56 }}>
      <div className="container">
        <SectionHead title="قطاعات" highlight="نخدمها" style={{ marginBottom: 28 }} className="sectors-head" />
      </div>
      <Reveal className="marquee">
        <div className="marquee-track">
          {loop.map((sector, index) => (
            <span className="sector" key={index} aria-hidden={sector.copy || undefined}>
              <Icon name={sector.icon} />
              {sector.name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
