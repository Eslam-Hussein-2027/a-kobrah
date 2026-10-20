import './Bars.css'

export default function Bars({ white = false, animated = false, className = '' }) {
  const classes = ['bars', white && 'white', animated && 'anim', className].filter(Boolean).join(' ')

  return (
    <div className={classes} aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  )
}
