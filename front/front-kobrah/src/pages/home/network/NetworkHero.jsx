import { useState } from 'react'
import Button from '../../../components/ui/Button'
import Icon from '../../../components/ui/Icon'
import LineBullet from '../../../components/ui/LineBullet'
import PhoneLink from '../../../components/ui/PhoneLink'
import { LINES } from '../../../config/lines'
import { ROUTES } from '../../../config/routes'
import { useContent } from '../../../context/content'
import NetworkMap from './NetworkMap'
import NetworkStrip from './NetworkStrip'
import StationInset from './StationInset'
import './Network.css'

// Arabic counting: 3–10 take the plural, 11 and above the singular accusative.
const productCount = (n) => (n === 1 ? 'منتج واحد' : n === 2 ? 'منتجان' : n <= 10 ? `${n} منتجات` : `${n} منتجًا`)

/** First viewport: the company drawn as a network map; every station is a cover you can request. */
export default function NetworkHero() {
  const { products, site } = useContent()
  const all = [...products.personal, ...products.business]
  const [selected, setSelected] = useState(all[0]?.slug ?? null)
  const selectedProduct = all.find((p) => p.slug === selected)

  return (
    <section className="network" aria-labelledby="network-title">
      <div className="container network-sheet">
        <div className="network-title">
          <h1 id="network-title">
            حمايةٌ تثق بها
            <br />
            لكلّ ما يهمّك
          </h1>
          <p className="network-lede">
            تقدّم العربية الكبرى للتأمين المساهمة باقة متكاملة من الحلول التأمينية للأفراد والشركات، بخدمة سريعة
            وتعويضات عادلة وفريق متخصص يرافقك في كل خطوة.
          </p>
          <div className="network-actions">
            <Button to={ROUTES.contact} icon="arrow">
              اطلب عرض سعر
            </Button>
            <PhoneLink className="btn btn-ghost">
              <Icon name="phone" />
              <span className="num">{site.phone}</span>
            </PhoneLink>
          </div>
          <div className="network-key" role="group" aria-label="مفتاح الخريطة">
            <ul className="key-lines">
              {['personal', 'business'].map((line) => (
                <li key={line} className={`line-${line}`}>
                  <span className="key-swatch" aria-hidden="true" />
                  <LineBullet line={line} />
                  {LINES[line].name}
                  <span className="key-count">{productCount(products[line].length)}</span>
                </li>
              ))}
            </ul>
            <ul className="key-figures">
              {site.stats.map((stat) => (
                <li key={stat.label}>
                  <b className="num">
                    {stat.prefix}
                    {stat.value.toLocaleString('en')}
                  </b>{' '}
                  {stat.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="network-desktop">
          <div id="station-inset" className="network-inset" aria-live="polite">
            <StationInset product={selectedProduct} />
          </div>
          <NetworkMap products={products} selected={selected} onSelect={setSelected} />
        </div>

        <NetworkStrip products={products} selected={selected} onSelect={setSelected} />
      </div>
    </section>
  )
}
