import { useEffect } from 'react'
import { NavLink } from 'react-router'
import { PAGE_LINE } from '../../config/lines'
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

const stopClass = ({ isActive }) => (isActive ? 'drawer-stop is-active' : 'drawer-stop')

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
          <Logo variant="ar" height={40} />
          <button className="drawer-close" type="button" aria-label="إغلاق القائمة" onClick={onClose}>
            <Icon name="x" />
          </button>
        </div>

        <nav aria-label="القائمة الرئيسية">
          <ol className="drawer-line">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === ROUTES.home}
                  className={stopClass}
                  data-line={PAGE_LINE[link.to]}
                >
                  <span className="nav-ring" aria-hidden="true" />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ol>
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
              <span className="num">{site.phone}</span>
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
