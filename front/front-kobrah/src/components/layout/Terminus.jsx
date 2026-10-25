import { Link } from 'react-router'
import { ROUTES } from '../../config/routes'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import PhoneLink from '../ui/PhoneLink'
import './Terminus.css'

/** Closing band on every page except Contact: the line ends at a quote, a call, or the forms. */
export default function Terminus() {
  return (
    <section className="terminus" aria-labelledby="terminus-title">
      <div className="container">
        <h2 id="terminus-title">هل أنت مستعد لحماية ما يهمّك؟</h2>
        <p className="terminus-lede">تواصل معنا اليوم واحصل على عرض سعر يناسب احتياجاتك.</p>
        <ol className="terminus-route">
          <li>
            <span className="terminus-ring" aria-hidden="true" />
            <Button to={ROUTES.contact} variant="white" icon="arrow">
              اطلب عرض سعر
            </Button>
          </li>
          <li>
            <span className="terminus-ring" aria-hidden="true" />
            <PhoneLink className="btn btn-outline-white">
              <Icon name="phone" />
              اتصل بنا
            </PhoneLink>
          </li>
          <li>
            <span className="terminus-ring" aria-hidden="true" />
            <Link to={ROUTES.forms} className="btn btn-outline-white">
              <Icon name="file" />
              النماذج
            </Link>
          </li>
          <li className="terminus-end" aria-hidden="true">
            <span className="terminus-cap" />
          </li>
        </ol>
      </div>
    </section>
  )
}
