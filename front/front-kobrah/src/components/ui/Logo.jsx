import logoAr from '../../assets/logo/logo-ar.png'
import logoFull from '../../assets/logo/logo-full.png'
import logoMark from '../../assets/logo/logo-mark.png'
import { BRAND } from '../../config/routes'
import './Logo.css'

const SOURCES = { mark: logoMark, ar: logoAr, full: logoFull }

/**
 * Company logo.
 * - variant: 'mark' (symbol only) | 'ar' (Arabic wordmark) | 'full' (symbol + both names)
 * - height: number (px) or any CSS length, e.g. 'clamp(150px, 24vw, 250px)'
 * - decorative: hide from screen readers when the brand is already announced nearby
 */
export default function Logo({ variant = 'mark', height = 40, white = false, decorative = false, className = '' }) {
  return (
    <img
      src={SOURCES[variant]}
      alt={decorative ? '' : BRAND}
      className={['logo', white && 'logo-white', className].filter(Boolean).join(' ')}
      style={{ height }}
      draggable="false"
    />
  )
}
