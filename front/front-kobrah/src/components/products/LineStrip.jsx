import { ROUTES } from '../../config/routes'
import Button from '../ui/Button'
import CheckList from '../ui/CheckList'
import './LineStrip.css'

/** Every product of one line as a station, with its benefits and a request action. */
export default function LineStrip({ line, products }) {
  return (
    <ol className={`line-strip line-${line}`}>
      {products.map((product) => (
        <li className="strip-product" key={product.slug} id={product.slug}>
          <span className="strip-product-ring" aria-hidden="true" />
          <div className="strip-product-head">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <div className="strip-product-detail">
            <CheckList items={product.benefits} columns={2} />
            <Button to={ROUTES.contact} state={{ insuranceType: product.title }} variant="ghost" size="sm" icon="arrow">
              اطلب هذه التغطية
            </Button>
          </div>
        </li>
      ))}
    </ol>
  )
}
