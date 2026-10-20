import { useEffect, useState } from 'react'
import { FORMS, FORM_CATEGORIES } from '../data/forms'
import { PRODUCTS } from '../data/products'
import { SECTORS } from '../data/sectors'
import { SITE } from '../data/site'
import { api } from '../services/api'
import { ContentContext } from './content'

const groupByType = (products) => ({
  personal: products.filter((product) => product.type === 'personal'),
  business: products.filter((product) => product.type === 'business'),
})

const FALLBACK = {
  site: SITE,
  products: groupByType(PRODUCTS),
  sectors: SECTORS,
  forms: FORMS,
  formCategories: FORM_CATEGORIES,
}

// Renders immediately with the bundled content, then swaps in live data from the API.
export default function ContentProvider({ children }) {
  const [content, setContent] = useState(FALLBACK)

  useEffect(() => {
    const controller = new AbortController()
    const options = { signal: controller.signal }

    Promise.allSettled([
      api.getSite(options),
      api.getProducts(options),
      api.getSectors(options),
      api.getForms(options),
    ]).then(([site, products, sectors, forms]) => {
      if (controller.signal.aborted) return
      const ok = (result) => result.status === 'fulfilled'

      setContent((prev) => ({
        site: ok(site) ? { ...prev.site, ...site.value.data } : prev.site,
        products: ok(products) ? groupByType(products.value.data) : prev.products,
        sectors: ok(sectors) ? sectors.value.data : prev.sectors,
        forms: ok(forms) ? forms.value.data : prev.forms,
        formCategories: ok(forms) ? forms.value.meta.categories : prev.formCategories,
      }))

      if (import.meta.env.DEV && ![site, products, sectors, forms].every(ok)) {
        console.warn('[content] API unreachable, using bundled fallback content.')
      }
    })

    return () => controller.abort()
  }, [])

  return <ContentContext value={content}>{children}</ContentContext>
}
