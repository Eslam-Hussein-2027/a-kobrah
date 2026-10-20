import Bars from '../ui/Bars'
import Logo from '../ui/Logo'
import './Preloader.css'

export default function Preloader({ done }) {
  return (
    <div className={done ? 'preloader is-done' : 'preloader'} aria-hidden="true">
      <div className="preloader-inner">
        <Bars className="loader-bars" />
        <Logo variant="ar" height={53} decorative />
      </div>
    </div>
  )
}
