import ProductGrid from '../../components/products/ProductGrid'
import PageHero from '../../components/ui/PageHero'
import SectionHead from '../../components/ui/SectionHead'
import { useContent } from '../../context/content'

export default function PersonalPage() {
  const { products } = useContent()

  return (
    <>
      <PageHero
        title="تأمين الأفراد"
        description="حلول تأمينية مصمّمة لحمايتك أنت وعائلتك وممتلكاتك في كل مراحل حياتك."
      />
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="منتجات الأفراد"
            title="اختر التغطية"
            highlight="المناسبة لك"
            lead="منتجات مرنة بأقساط مناسبة، مع خدمة سريعة عند الحاجة."
          />
          <ProductGrid products={products.personal} columns={3} variant="full" />
        </div>
      </section>
    </>
  )
}
