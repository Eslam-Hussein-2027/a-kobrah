import { Link } from 'react-router'
import Button from '../../../components/ui/Button'
import CheckList from '../../../components/ui/CheckList'
import LineBullet from '../../../components/ui/LineBullet'
import { LINES } from '../../../config/lines'
import { ROUTES } from '../../../config/routes'

/** The selected station's board: the cover, its benefits, and the action to request it. */
export default function StationInset({ product, headingLevel = 'h2', className = '' }) {
  if (!product) return null
  const line = LINES[product.type]
  const Heading = headingLevel

  return (
    <div className={`inset inset-${product.type} ${className}`.trim()}>
      <Heading className="inset-title">
        <LineBullet line={product.type} />
        {product.title}
      </Heading>
      <p className="inset-text">{product.description}</p>
      <CheckList items={product.benefits} className="inset-benefits" />
      <div className="inset-actions">
        <Button to={ROUTES.contact} state={{ insuranceType: product.title }} icon="arrow">
          اطلب هذه التغطية
        </Button>
        <Link className="text-link" to={line.route}>
          كل منتجات {line.short}
        </Link>
      </div>
    </div>
  )
}
