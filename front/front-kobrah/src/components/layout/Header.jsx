import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { MESSAGES } from '../../config/messages'
import { BRAND, NAV_LINKS, ROUTES } from '../../config/routes'
import { useToast } from '../../context/toast'
import useScrollPosition from '../../hooks/useScrollPosition'
import useSlidingIndicator from '../../hooks/useSlidingIndicator'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Logo from '../ui/Logo'
import './Header.css'

const navClass = ({ isActive }) => (isActive ? 'is-active' : undefined)

export default function Header({ menuOpen, onMenuToggle }) {
  const { pathname } = useLocation()
  const toast = useToast()
  const [scrolled, setScrolled] = useState(false)
  const { containerRef, indicatorRef, moveTo, reset } = useSlidingIndicator('a.is-active', {
    inset: 12,
    watch: pathname,
  })

  useScrollPosition(({ y }) => setScrolled(y > 10))

  return (
    <header className={scrolled ? 'header is-scrolled' : 'header'}>
      <div className="container header-inner">
        <Link className="brand" to={ROUTES.home} aria-label={`${BRAND} — الرئيسية`}>
          <Logo variant="mark" height={46} className="brand-mark" decorative />
          <Logo variant="ar" height={40} decorative />
        </Link>

        <nav className="nav" aria-label="القائمة الرئيسية" ref={containerRef} onMouseLeave={reset}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTES.home}
              className={navClass}
              onMouseEnter={(event) => moveTo(event.currentTarget)}
            >
              {link.label}
            </NavLink>
          ))}
          <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
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
