import { Link } from 'react-router'
import Icon from './Icon'
import './Button.css'

/**
 * Pill button rendered as a router <Link> (`to`), an <a> (`href`) or a <button>.
 * - variant: 'primary' | 'ghost' | 'white' | 'outline-white'
 * - icon: icon after the label ('arrow' gets the hover nudge); iconStart: icon before it
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size,
  icon,
  iconStart,
  loading = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn-${variant}`, size && `btn-${size}`, loading && 'is-loading', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {iconStart && <Icon name={iconStart} />}
      {children}
      {icon && <Icon name={icon} className={icon === 'arrow' ? 'i-arrow' : ''} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
