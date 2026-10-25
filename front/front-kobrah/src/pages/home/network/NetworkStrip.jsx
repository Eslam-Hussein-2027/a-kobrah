import { useState } from 'react'
import { Link } from 'react-router'
import LineBullet from '../../../components/ui/LineBullet'
import { LINES } from '../../../config/lines'
import { ROUTES } from '../../../config/routes'
import StationInset from './StationInset'

const LINE_ORDER = ['personal', 'business']

/** Phone and tablet version: pick a line, then ride it as a vertical strip map. */
export default function NetworkStrip({ products, selected, onSelect }) {
  const selectedLine = LINE_ORDER.find((line) => products[line].some((p) => p.slug === selected))
  const [line, setLine] = useState(selectedLine ?? 'personal')

  return (
    <div className="network-strip">
      <div className="strip-switch" role="tablist" aria-label="اختر الخط">
        {LINE_ORDER.map((id) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`strip-tab-${id}`}
            aria-selected={line === id}
            aria-controls={`strip-${id}`}
            className={line === id ? 'is-active' : undefined}
            onClick={() => setLine(id)}
          >
            <LineBullet line={id} />
            {LINES[id].name}
          </button>
        ))}
      </div>

      <ol className={`strip strip-${line}`} id={`strip-${line}`} role="tabpanel" aria-labelledby={`strip-tab-${line}`}>
        {products[line].map((product) => {
          const open = product.slug === selected
          return (
            <li key={product.slug} className={open ? 'strip-stop is-open' : 'strip-stop'}>
              <button
                type="button"
                className="strip-station"
                aria-expanded={open}
                onClick={() => onSelect(open ? null : product.slug)}
              >
                <span className="station-ring" aria-hidden="true" />
                {product.title}
              </button>
              {open && <StationInset product={product} headingLevel="h3" className="inset-inline" />}
            </li>
          )
        })}
        <li className="strip-stop strip-interchange">
          <Link to={ROUTES.forms} className="strip-station">
            <span className="interchange-capsule" aria-hidden="true" />
            النماذج والمطالبات
          </Link>
        </li>
        <li className="strip-stop strip-terminus">
          <Link to={ROUTES.contact} className="strip-station">
            <span className="terminus-bar" aria-hidden="true" />
            اتصل بنا
          </Link>
        </li>
      </ol>
    </div>
  )
}
