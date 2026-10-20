import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { pageTitle, ROUTES } from '../../config/routes'
import useSpotlight from '../../hooks/useSpotlight'
import BackToTop from './BackToTop'
import CtaBanner from './CtaBanner'
import Footer from './Footer'
import Header from './Header'
import MobileDrawer from './MobileDrawer'
import ScrollProgress from './ScrollProgress'
import Topbar from './Topbar'

/** Page shell shared by every route: top bar, header, drawer, footer and floating widgets. */
export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useSpotlight()

  // On every navigation: jump to the top and update the tab title.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = pageTitle(pathname)
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">
        تخطي إلى المحتوى
      </a>
      <ScrollProgress />
      <Topbar />
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      <MobileDrawer open={menuOpen} onClose={closeMenu} />

      <main id="main">
        <div className="page" key={pathname}>
          <Outlet />
        </div>
        {pathname !== ROUTES.contact && <CtaBanner />}
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
