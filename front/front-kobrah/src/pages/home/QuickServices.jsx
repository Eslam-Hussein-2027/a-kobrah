import { Link } from 'react-router'
import Icon from '../../components/ui/Icon'
import Reveal from '../../components/ui/Reveal'
import { ROUTES } from '../../config/routes'
import './QuickServices.css'

const HIGHLIGHTS = [
  { icon: 'car', title: 'تأمين السيارات', text: 'حماية متكاملة لسيارتك على الطريق', to: ROUTES.personal },
  { icon: 'heart', title: 'التأمين الصحي', text: 'رعاية صحية لك ولعائلتك', to: ROUTES.personal },
  { icon: 'ship', title: 'التأمين البحري', text: 'أمان لبضائعك أثناء النقل', to: ROUTES.business },
  { icon: 'building', title: 'تأمين الممتلكات', text: 'حماية لمنشآتك وأصولك', to: ROUTES.business },
]

/** Four highlighted products overlapping the bottom of the hero. */
export default function QuickServices() {
  return (
    <section className="quick" aria-label="أبرز الخدمات">
      <div className="container quick-grid">
        {HIGHLIGHTS.map((item, index) => (
          <Reveal as={Link} to={item.to} className="quick-card spot" delay={index * 90} key={item.title}>
            <span className="q-ico">
              <Icon name={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="q-more">
              اعرف المزيد
              <Icon name="arrow" />
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
