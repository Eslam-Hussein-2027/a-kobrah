import { useState } from 'react'
import ProductGrid from '../../components/products/ProductGrid'
import Button from '../../components/ui/Button'
import Icon from '../../components/ui/Icon'
import Reveal from '../../components/ui/Reveal'
import SectionHead from '../../components/ui/SectionHead'
import { ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import useSlidingIndicator from '../../hooks/useSlidingIndicator'
import './ServicesTabs.css'

const TABS = [
  { key: 'personal', label: 'تأمين الأفراد', icon: 'user' },
  { key: 'business', label: 'تأمين الشركات', icon: 'briefcase' },
]

const PREVIEW_COUNT = 4

/** Personal / business product preview with a sliding tab indicator. */
export default function ServicesTabs() {
  const { products } = useContent()
  const [active, setActive] = useState(TABS[0].key)
  const { containerRef, indicatorRef } = useSlidingIndicator('button.is-active', { watch: active })

  return (
    <section className="section section-white" id="services">
      <div className="container">
        <SectionHead
          kicker="خدماتنا"
          title="حلول تأمينية"
          highlight="لكل احتياج"
          lead="اختر من بين مجموعة واسعة من المنتجات التأمينية المصمّمة لتمنحك الطمأنينة."
        />

        <div className="tabs-wrap">
          <Reveal>
            <div className="tabs-list" role="tablist" ref={containerRef}>
              <span className="tab-ind" ref={indicatorRef} aria-hidden="true" />
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`tab-${tab.key}`}
                  className={active === tab.key ? 'is-active' : undefined}
                  aria-selected={active === tab.key}
                  aria-controls={`panel-${tab.key}`}
                  onClick={() => setActive(tab.key)}
                >
                  <Icon name={tab.icon} />
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          {TABS.map((tab) => (
            <div
              key={tab.key}
              id={`panel-${tab.key}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.key}`}
              hidden={active !== tab.key}
            >
              <ProductGrid products={products[tab.key].slice(0, PREVIEW_COUNT)} columns={4} />
            </div>
          ))}

          <div className="mt-40">
            <Button to={ROUTES[active]} variant="ghost" icon="arrow">
              عرض جميع الخدمات
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
