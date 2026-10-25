import LineStrip from '../../components/products/LineStrip'
import Icon from '../../components/ui/Icon'
import RouteHeader from '../../components/ui/RouteHeader'
import SectionTitle from '../../components/ui/SectionTitle'
import { ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import './BusinessPage.css'

export default function BusinessPage() {
  const { products, sectors } = useContent()

  return (
    <>
      <RouteHeader
        path={ROUTES.business}
        title="تأمين الشركات"
        description="برامج تأمين متخصصة تحمي منشأتك وأصولك وتضمن استمرارية أعمالك."
      />
      <section className="section" aria-label="منتجات الشركات">
        <div className="container">
          <LineStrip line="business" products={products.business} />
        </div>
      </section>
      <section className="section section-tint" aria-labelledby="sectors-title">
        <div className="container">
          <SectionTitle
            id="sectors-title"
            title="قطاعات نخدمها"
            lede="حلول مرنة تناسب المنشآت الصغيرة والمتوسطة والكبيرة في مختلف القطاعات."
          />
          <ul className="sector-grid">
            {sectors.map((sector) => (
              <li key={sector.name}>
                <Icon name={sector.icon} />
                {sector.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
