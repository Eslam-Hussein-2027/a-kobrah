import Icon from '../../components/ui/Icon'
import PhoneLink from '../../components/ui/PhoneLink'
import SocialLinks from '../../components/ui/SocialLinks'
import { useContent } from '../../context/content'
import { mailHref } from '../../utils/contact'

function InfoContent({ icon, label, value, ltr }) {
  return (
    <>
      <span className="info-icon" aria-hidden="true">
        <Icon name={icon} />
      </span>
      <span>
        <small>{label}</small>
        <strong className={ltr ? 'num' : undefined}>{value}</strong>
      </span>
    </>
  )
}

export default function ContactInfo() {
  const { site } = useContent()

  return (
    <div className="contact-info">
      <h2>نحن هنا لخدمتك</h2>
      <p className="lead">تواصل معنا بالطريقة التي تناسبك، أو زر أقرب فرع لنا.</p>

      <ul className="info-list">
        <li>
          <PhoneLink className="info">
            <InfoContent icon="phone" label="الهاتف" value={site.phone} ltr />
          </PhoneLink>
        </li>
        <li>
          <a className="info" href={mailHref(site.email)}>
            <InfoContent icon="mail" label="البريد الإلكتروني" value={site.email} />
          </a>
        </li>
        <li>
          <div className="info">
            <InfoContent icon="pin" label="العنوان" value={site.address} />
          </div>
        </li>
        <li>
          <div className="info">
            <InfoContent icon="clock" label="ساعات العمل" value={site.hours} />
          </div>
        </li>
      </ul>

      <SocialLinks />
    </div>
  )
}
