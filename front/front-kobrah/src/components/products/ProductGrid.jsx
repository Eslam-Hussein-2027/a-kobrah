import ProductCard from './ProductCard'
import './Products.css'

export default function ProductGrid({ products, columns = 3, variant = 'short' }) {
  return (
    <div className={`cards cards-${columns}`}>
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} variant={variant} delay={(index % columns) * 90} />
      ))}
    </div>
  )
}
