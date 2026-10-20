import { useEffect } from 'react'
import { NavLink } from 'react-router'
import { MESSAGES } from '../../config/messages'
import { NAV_LINKS, ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import { useToast } from '../../context/toast'
import { mailHref } from '../../utils/contact'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import PhoneLink from '../ui/PhoneLink'
import './MobileDrawer.css'

const navClass = ({ isActive }) => (isActive ? 'is-active' : undefined)

/** Off-canvas navigation for tablets and phones (opened by the burger button). */
export default function MobileDrawer({ open, onClose }) {
  const { site } = useContent()
  const toast = useToast()

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    if (!open) return

    const onKey = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Any link inside the drawer navigates away, so close it.
  const closeOnLink = (event) => event.target.closest('a') && onClose()

  return (
    <>
      <div className={open ? 'overlay is-open' : 'overlay'} aria-hidden="true" onClick={onClose} />
      <aside
        className={open ? 'drawer is-open' : 'drawer'}
        id="drawer"
        aria-label="القائمة"
        inert={!open}
        onClick={closeOnLink}
      >
        <div className="drawer-head">
          <Logo variant="ar" height={42} />
          <button className="drawer-close" type="button" aria-label="إغلاق القائمة" onClick={onClose}>
            <Icon name="x" />
          </button>
        </div>

        <nav className="drawer-nav">
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.home}
              className={navClass}
              style={{ '--i': index }}
            >
              <Icon name={link.icon} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="drawer-foot">
          <Button to={ROUTES.contact} icon="arrow">
            اطلب عرض سعر
          </Button>
          <Button variant="ghost" iconStart="globe" onClick={() => toast(MESSAGES.englishSoon)}>
            English
          </Button>
          <div className="drawer-contact">
            <PhoneLink>
              <Icon name="phone" />
              <span dir="ltr">{site.phone}</span>
            </PhoneLink>
            <a href={mailHref(site.email)}>
              <Icon name="mail" />
              <span>{site.email}</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
