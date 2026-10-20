import { useContent } from '../../context/content'
import { mailHref } from '../../utils/contact'
import Icon from '../ui/Icon'
import PhoneLink from '../ui/PhoneLink'
import SocialLinks from '../ui/SocialLinks'
import './Topbar.css'

export default function Topbar() {
  const { site } = useContent()

  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-group">
          <PhoneLink>
            <Icon name="phone" />
            <span dir="ltr">{site.phone}</span>
          </PhoneLink>
          <a href={mailHref(site.email)}>
            <Icon name="mail" />
            <span>{site.email}</span>
          </a>
        </div>
        <div className="topbar-group">
          <span>
            <Icon name="clock" />
            <span>{site.hours}</span>
          </span>
          <SocialLinks className="social" />
        </div>
      </div>
    </div>
  )
}
