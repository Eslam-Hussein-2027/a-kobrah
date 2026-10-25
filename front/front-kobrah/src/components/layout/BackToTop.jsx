import { useState } from 'react'
import useScrollPosition from '../../hooks/useScrollPosition'
import { prefersReducedMotion } from '../../utils/motion'
import Icon from '../ui/Icon'
import './BackToTop.css'

const SHOW_AFTER = 700

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useScrollPosition(({ y }) => setVisible(y > SHOW_AFTER))

  const scrollUp = () => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })

  return (
    <button
      className={visible ? 'to-top show' : 'to-top'}
      type="button"
      aria-label="العودة للأعلى"
      tabIndex={visible ? 0 : -1}
      onClick={scrollUp}
    >
      <Icon name="arrow-up" />
    </button>
  )
}
