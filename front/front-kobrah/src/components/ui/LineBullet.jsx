import { LINES } from '../../config/lines'
import './LineBullet.css'

export default function LineBullet({ line, className = '' }) {
  return (
    <span className={`line-bullet line-${line} ${className}`.trim()} aria-hidden="true">
      {LINES[line].number}
    </span>
  )
}
