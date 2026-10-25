import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { PAGE_LINE } from '../../config/lines'
import { MESSAGES } from '../../config/messages'
import { BRAND, NAV_LINKS, ROUTES } from '../../config/routes'
import { useToast } from '../../context/toast'
import useScrollPosition from '../../hooks/useScrollPosition'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import './Header.css'

const stopClass = ({ isActive }) => (isActive ? 'nav-stop is-active' : 'nav-stop')

export default function Header({ menuOpen, onMenuToggle }) {
  const toast = useToast()
  const [scrolled, setScrolled] = useState(false)

  useScrollPosition(({ y }) => setScrolled(y > 8))

  return (
    <header className={scrolled ? 'header is-scrolled' : 'header'}>
      <div className="container header-inner">
        <Link className="brand" to={ROUTES.home} aria-label={`${BRAND} — الرئيسية`}>
          <Logo variant="mark" height="clamp(36px, 4vw, 42px)" decorative />
          <Logo variant="ar" height="clamp(32px, 3.6vw, 38px)" decorative />
        </Link>

        <nav className="nav" aria-label="القائمة الرئيسية">
          <ol className="nav-line">
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

        <div className="header-actions">
          <button className="lang-btn" type="button" onClick={() => toast(MESSAGES.englishSoon)}>
            <Icon name="globe" />
            English
          </button>
          <Button to={ROUTES.contact} size="sm" icon="arrow">
            اطلب عرض سعر
          </Button>
        </div>

        <button
          className="burger"
          type="button"
          aria-label="فتح القائمة"
          aria-expanded={menuOpen}
          aria-controls="drawer"
          onClick={onMenuToggle}
        >
          <Icon name="menu" />
        </button>
      </div>
    </header>
  )
}
