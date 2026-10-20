import { useEffect } from 'react'
import { hasFinePointer, prefersReducedMotion } from '../utils/motion'

/** Feeds the cursor position to any `.spot` card so its radial highlight follows the mouse. */
export default function useSpotlight() {
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return

    const onMove = (event) => {
      const card = event.target.closest?.('.spot')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      card.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
