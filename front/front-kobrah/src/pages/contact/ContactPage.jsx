import PageHero from '../../components/ui/PageHero'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import MapCard from './MapCard'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      <PageHero title="اتصل بنا" description="يسعدنا تواصلك معنا؛ فريقنا جاهز للإجابة عن استفساراتك وتقديم المشورة." />
      <section className="section">
        <div className="container contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container">
          <MapCard />
        </div>
      </section>
    </>
  )
}
