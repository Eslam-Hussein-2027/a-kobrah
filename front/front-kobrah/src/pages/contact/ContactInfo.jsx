import Icon from '../../components/ui/Icon'
import PhoneLink from '../../components/ui/PhoneLink'
import Reveal from '../../components/ui/Reveal'
import SocialLinks from '../../components/ui/SocialLinks'
import { useContent } from '../../context/content'
import { mailHref } from '../../utils/contact'

function InfoContent({ icon, label, value, ltr }) {
  return (
    <>
      <span className="chip-ico">
        <Icon name={icon} />
      </span>
      <div>
        <small>{label}</small>
        <strong dir={ltr ? 'ltr' : undefined}>{value}</strong>
      </div>
    </>
  )
}

export default function ContactInfo() {
  const { site } = useContent()

  return (
    <Reveal type="right">
      <span className="kicker">معلومات التواصل</span>
      <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 36px)' }}>
        نحن هنا <span className="grad-text">لخدمتك</span>
      </h2>
      <p className="lead">تواصل معنا بالطريقة التي تناسبك، أو زر أقرب فرع لنا.</p>

      <div className="info-list">
        <div className="info">
          <InfoContent icon="pin" label="العنوان" value={site.address} />
        </div>
        <PhoneLink className="info">
          <InfoContent icon="phone" label="الهاتف" value={site.phone} ltr />
        </PhoneLink>
        <a className="info" href={mailHref(site.email)}>
          <InfoContent icon="mail" label="البريد الإلكتروني" value={site.email} />
        </a>
        <div className="info">
          <InfoContent icon="clock" label="ساعات العمل" value={site.hours} />
        </div>
      </div>

      <SocialLinks />
    </Reveal>
  )
}
