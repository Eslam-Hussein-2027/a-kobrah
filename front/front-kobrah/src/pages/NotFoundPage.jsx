import Button from '../components/ui/Button'
import RouteHeader from '../components/ui/RouteHeader'
import { ROUTES } from '../config/routes'

export default function NotFoundPage() {
  return (
    <>
      <RouteHeader title="الصفحة غير موجودة" description="عذرًا، الرابط الذي طلبته غير متوفر أو تم نقله." />
      <section className="section">
        <div className="container">
          <Button to={ROUTES.home} icon="arrow">
            العودة إلى الرئيسية
          </Button>
        </div>
      </section>
    </>
  )
}
