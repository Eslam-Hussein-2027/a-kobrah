import LineStrip from '../../components/products/LineStrip'
import RouteHeader from '../../components/ui/RouteHeader'
import { ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'

export default function PersonalPage() {
  const { products } = useContent()

  return (
    <>
      <RouteHeader
        path={ROUTES.personal}
        title="تأمين الأفراد"
        description="حلول تأمينية مصمّمة لحمايتك أنت وعائلتك وممتلكاتك في كل مراحل حياتك."
      />
      <section className="section" aria-label="منتجات الأفراد">
        <div className="container">
          <LineStrip line="personal" products={products.personal} />
        </div>
      </section>
    </>
  )
}
