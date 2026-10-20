import { Link } from 'react-router'
import { ROUTES } from '../../config/routes'
import { useContent } from '../../context/content'
import { telHref } from '../../utils/contact'

/** Link that dials the company number, or opens the contact page while the number is a placeholder. */
export default function PhoneLink({ children, ...rest }) {
  const { site } = useContent()
  const href = telHref(site.phone)

  return href ? (
    <a href={href} {...rest}>
      {children}
    </a>
  ) : (
    <Link to={ROUTES.contact} {...rest}>
      {children}
    </Link>
  )
}
