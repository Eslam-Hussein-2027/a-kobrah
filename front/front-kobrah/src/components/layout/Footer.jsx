import { Link } from 'react-router'
import { BRAND, BRAND_EN, NAV_LINKS, ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import { mailHref } from '../../utils/contact'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import PhoneLink from '../ui/PhoneLink'
import SocialLinks from '../ui/SocialLinks'
import './Footer.css'

const SERVICE_LINKS = [
  { to: ROUTES.personal, label: 'تأمين السيارات' },
  { to: ROUTES.personal, label: 'التأمين الصحي' },
  { to: ROUTES.personal, label: 'تأمين السفر' },
  { to: ROUTES.business, label: 'التأمين البحري' },
  { to: ROUTES.business, label: 'التأمين الهندسي' },
  { to: ROUTES.business, label: 'الحريق والممتلكات' },
]

export default function Footer() {
  const { site } = useContent()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo variant="full" height={165} white className="footer-logo" />
          <p>شركة ليبية متخصصة في تقديم حلول التأمين للأفراد والشركات، نعمل لنمنح عملاءنا الطمأنينة والثقة.</p>
          <SocialLinks />
        </div>

        <div>
          <h4>روابط سريعة</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>خدماتنا</h4>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>تواصل معنا</h4>
          <ul className="f-contact">
            <li>
              <Icon name="pin" />
              <span>{site.address}</span>
            </li>
            <li>
              <Icon name="phone" />
              <PhoneLink>
                <span dir="ltr">{site.phone}</span>
              </PhoneLink>
            </li>
            <li>
              <Icon name="mail" />
              <a href={mailHref(site.email)}>{site.email}</a>
            </li>
            <li>
              <Icon name="clock" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {BRAND}. جميع الحقوق محفوظة.
        </span>
        <span>{BRAND_EN}</span>
      </div>
    </footer>
  )
}
