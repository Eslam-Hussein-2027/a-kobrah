import ProductGrid from '../../components/products/ProductGrid'
import PageHero from '../../components/ui/PageHero'
import SectionHead from '../../components/ui/SectionHead'
import { useContent } from '../../context/content'
import SectorsMarquee from './SectorsMarquee'

export default function BusinessPage() {
  const { products } = useContent()

  return (
    <>
      <PageHero title="تأمين الشركات" description="برامج تأمين متخصصة تحمي منشأتك وأصولك وتضمن استمرارية أعمالك." />
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="منتجات الشركات"
            title="حماية متكاملة"
            highlight="لأعمالك"
            lead="حلول مرنة تناسب المنشآت الصغيرة والمتوسطة والكبيرة في مختلف القطاعات."
          />
          <ProductGrid products={products.business} columns={4} variant="full" />
        </div>
      </section>
      <SectorsMarquee />
    </>
  )
}
