import { Link } from 'react-router'
import { ROUTES } from '../../config/routes'
import Button from '../ui/Button'
import CheckList from '../ui/CheckList'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

/**
 * Insurance product card.
 * - 'short': title + description + link to the product's page (home page tabs)
 * - 'full': adds the benefits list and a "request this cover" button that pre-fills the contact form
 */
export default function ProductCard({ product, variant = 'short', delay = 0 }) {
  return (
    <Reveal as="article" className="pcard spot" delay={delay}>
      <div className="pcard-icon">
        <Icon name={product.icon} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>

      {variant === 'full' ? (
        <>
          <CheckList items={product.benefits} />
          <Button to={ROUTES.contact} state={{ insuranceType: product.title }} variant="ghost" size="sm" icon="arrow">
            اطلب هذه التغطية
          </Button>
        </>
      ) : (
        <Link className="pcard-link" to={ROUTES[product.type]}>
          اعرف المزيد
          <Icon name="arrow" />
        </Link>
      )}
    </Reveal>
  )
}
