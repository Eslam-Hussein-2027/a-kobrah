import { Link } from 'react-router'
import { PAGE_LINE } from '../../config/lines'
import { ROUTES } from '../../config/routes'
import './RouteHeader.css'

/** Inner-page header in the page's line colour, with the route home → here. */
export default function RouteHeader({ title, description, line, path }) {
  const lineId = line ?? PAGE_LINE[path] ?? 'services'

  return (
    <header className={`route-header route-${lineId}`}>
      <div className="container">
        <nav className="route" aria-label="مسار التنقل">
          <ol>
            <li>
              <Link to={ROUTES.home}>الرئيسية</Link>
            </li>
            <li>
              <span aria-current="page">{title}</span>
            </li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </header>
  )
}
