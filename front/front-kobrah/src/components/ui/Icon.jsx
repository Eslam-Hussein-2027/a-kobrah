import ICONS from './icons'

export default function Icon({ name, className = '' }) {
  return (
    <svg className={`i ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  )
}
