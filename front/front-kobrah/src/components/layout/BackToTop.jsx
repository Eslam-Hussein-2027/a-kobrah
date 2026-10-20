import { useRef, useState } from 'react'
import useScrollPosition from '../../hooks/useScrollPosition'
import { prefersReducedMotion } from '../../utils/motion'
import Icon from '../ui/Icon'
import './BackToTop.css'

const RADIUS = 22
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const SHOW_AFTER = 600

/** Floating "back to top" button; its ring fills with the scroll progress. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const ringRef = useRef(null)

  useScrollPosition(({ y, progress }) => {
    setVisible(y > SHOW_AFTER)
    if (ringRef.current) ringRef.current.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress)
  })

  const scrollUp = () => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })

  return (
    <button className={visible ? 'to-top show' : 'to-top'} type="button" aria-label="العودة للأعلى" onClick={scrollUp}>
      <svg className="ring" viewBox="0 0 50 50" aria-hidden="true">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00B2EE" />
            <stop offset="1" stopColor="#1A1C95" />
          </linearGradient>
        </defs>
        <circle className="track" cx="25" cy="25" r={RADIUS} />
        <circle
          ref={ringRef}
          className="bar"
          cx="25"
          cy="25"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <Icon name="arrow-up" />
    </button>
  )
}
