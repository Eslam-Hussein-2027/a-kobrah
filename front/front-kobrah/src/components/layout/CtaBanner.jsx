import { ROUTES } from '../../config/routes'
import Bars from '../ui/Bars'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import PhoneLink from '../ui/PhoneLink'
import Reveal from '../ui/Reveal'
import './CtaBanner.css'

/** "Ready to get protected?" banner shown above the footer on every page except Contact. */
export default function CtaBanner() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta-box" type="zoom">
          <Bars white animated />
          <div>
            <h2>هل أنت مستعد لحماية ما يهمّك؟</h2>
            <p>تواصل معنا اليوم واحصل على عرض سعر يناسب احتياجاتك.</p>
          </div>
          <div className="cta-actions">
            <Button to={ROUTES.contact} variant="white" icon="arrow">
              اطلب عرض سعر
            </Button>
            <PhoneLink className="btn btn-outline-white">
              <Icon name="phone" />
              اتصل بنا
            </PhoneLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
