import RouteHeader from '../../components/ui/RouteHeader'
import { ROUTES } from '../../config/routes'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import HeadOffice from './HeadOffice'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      <RouteHeader
        path={ROUTES.contact}
        title="اتصل بنا"
        description="يسعدنا تواصلك معنا؛ فريقنا جاهز للإجابة عن استفساراتك وتقديم المشورة."
      />
      <section className="section">
        <div className="container contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <HeadOffice />
        </div>
      </section>
    </>
  )
}
