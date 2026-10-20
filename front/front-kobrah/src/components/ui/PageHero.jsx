import { Link } from 'react-router'
import { ROUTES } from '../../config/routes'
import Bars from './Bars'
import Icon from './Icon'
import Reveal from './Reveal'
import './PageHero.css'

/** Dark banner at the top of inner pages, with breadcrumbs. */
export default function PageHero({ title, description }) {
  return (
    <header className="page-hero">
      <span className="ph-glow" />
      <span className="dots" />
      <Bars white animated className="ph-bars" />
      <div className="container">
        <Reveal as="nav" className="crumbs" aria-label="مسار التنقل">
          <Link to={ROUTES.home}>الرئيسية</Link>
          <Icon name="chevron" />
          <span>{title}</span>
        </Reveal>
        <Reveal as="h1" delay={100}>
          {title}
        </Reveal>
        <Reveal as="p" delay={200}>
          {description}
        </Reveal>
      </div>
    </header>
  )
}
