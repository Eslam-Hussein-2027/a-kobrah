import { Link } from 'react-router'
import LineBullet from '../../../components/ui/LineBullet'
import { LINES } from '../../../config/lines'
import { ROUTES } from '../../../config/routes'
import { linePath, MAP, stationXs, trunkPath } from './networkLayout'

const LINE_ORDER = ['personal', 'business']

/** Desktop schematic: two lines of product stations meeting at the services interchange. */
export default function NetworkMap({ products, selected, onSelect }) {
  return (
    <div className="network-map" style={{ height: MAP.height }}>
      <svg className="network-lines" viewBox={`0 0 1000 ${MAP.height}`} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="trunk-gradient" gradientUnits="userSpaceOnUse" x1={MAP.interchangeX} x2={MAP.terminusX}>
            <stop offset="0" stopColor="#00b2ee" />
            <stop offset="0.48" stopColor="#0072ce" />
            <stop offset="1" stopColor="#1a1c95" />
          </linearGradient>
        </defs>
        {LINE_ORDER.map((line) => (
          <path key={line} className={`track track-${line}`} d={linePath(line)} vectorEffect="non-scaling-stroke" />
        ))}
        <path className="track track-trunk" d={trunkPath} vectorEffect="non-scaling-stroke" />
      </svg>

      {LINE_ORDER.map((line) => {
        const stops = products[line]
        const xs = stationXs(stops.length)
        const y = MAP.y[line]
        const activeIndex = stops.findIndex((p) => p.slug === selected)

        return (
          <div className={`network-line line-${line}`} role="group" aria-label={LINES[line].name} key={line}>
            <span className="line-tag" style={{ top: y }}>
              <LineBullet line={line} />
              {LINES[line].name}
            </span>

            <span
              className={activeIndex >= 0 ? 'halo is-on' : 'halo'}
              style={{ left: `${(xs[Math.max(activeIndex, 0)] ?? 0) / 10}%`, top: y }}
              aria-hidden="true"
            />

            {stops.map((product, i) => {
              const labelAbove = line === 'business' && i % 2 === 1
              const isSelected = product.slug === selected
              return (
                <button
                  key={product.slug}
                  type="button"
                  className={['station', labelAbove ? 'label-above' : 'label-below', isSelected && 'is-selected']
                    .filter(Boolean)
                    .join(' ')}
                  style={{ left: `${xs[i] / 10}%`, top: y }}
                  aria-pressed={isSelected}
                  aria-controls="station-inset"
                  onClick={() => onSelect(product.slug)}
                >
                  <span className="station-ring" aria-hidden="true" />
                  <span className="station-label">{product.title}</span>
                </button>
              )
            })}
          </div>
        )
      })}

      <Link to={ROUTES.forms} className="interchange" style={{ left: `${MAP.interchangeX / 10}%`, top: MAP.trunkY }}>
        <span className="interchange-capsule" aria-hidden="true" />
        <span className="interchange-label">النماذج والمطالبات</span>
      </Link>

      <Link to={ROUTES.contact} className="terminus-stop" style={{ left: `${MAP.terminusX / 10}%`, top: MAP.trunkY }}>
        <span className="terminus-bar" aria-hidden="true" />
        <span className="terminus-label">اتصل بنا</span>
      </Link>
    </div>
  )
}
