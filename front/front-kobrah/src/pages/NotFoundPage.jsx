import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { ROUTES } from '../config/routes'

export default function NotFoundPage() {
  return (
    <>
      <PageHero title="الصفحة غير موجودة" description="عذرًا، الرابط الذي طلبته غير متوفر أو تم نقله." />
      <section className="section center">
        <Button to={ROUTES.home} icon="arrow">
          العودة إلى الرئيسية
        </Button>
      </section>
    </>
  )
}
