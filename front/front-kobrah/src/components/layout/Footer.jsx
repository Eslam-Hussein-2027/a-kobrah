import { Link } from 'react-router'
import { BRAND, BRAND_EN, NAV_LINKS, ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import { mailHref } from '../../utils/contact'
import Icon from '../ui/Icon'
import LineBullet from '../ui/LineBullet'
import Logo from '../ui/Logo'
import PhoneLink from '../ui/PhoneLink'
import SocialLinks from '../ui/SocialLinks'
import './Footer.css'

const LINE_STOPS = [
  {
    line: 'personal',
    title: 'خط الأفراد',
    to: ROUTES.personal,
    stops: ['تأمين السيارات', 'التأمين الصحي', 'تأمين السفر'],
  },
  {
    line: 'business',
    title: 'خط الشركات',
    to: ROUTES.business,
    stops: ['التأمين البحري', 'التأمين الهندسي', 'الحريق والممتلكات'],
  },
]

export default function Footer() {
  const { site } = useContent()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Logo variant="full" height={150} white className="footer-logo" />
          <p>شركة ليبية متخصصة في تقديم حلول التأمين للأفراد والشركات، نعمل لنمنح عملاءنا الطمأنينة والثقة.</p>
          <SocialLinks />
        </div>

        <div>
          <h2>روابط سريعة</h2>
          <ul className="footer-stops">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>خدماتنا</h2>
          {LINE_STOPS.map((group) => (
            <div className={`footer-line line-${group.line}`} key={group.line}>
              <h3>
                <LineBullet line={group.line} />
                {group.title}
              </h3>
              <ul>
                {group.stops.map((stop) => (
                  <li key={stop}>
                    <Link to={group.to}>{stop}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2>تواصل معنا</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="pin" />
              <span>{site.address}</span>
            </li>
            <li>
              <Icon name="phone" />
              <PhoneLink>
                <span className="num">{site.phone}</span>
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
          © <span className="num">{new Date().getFullYear()}</span> {BRAND}. جميع الحقوق محفوظة.
        </span>
        <span lang="en" dir="ltr">
          {BRAND_EN}
        </span>
      </div>
    </footer>
  )
}
