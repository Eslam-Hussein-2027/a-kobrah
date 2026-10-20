import { useEffect, useEffectEvent } from 'react'

/**
 * Calls `onChange({ y, progress })` on scroll/resize, throttled to one call per frame.
 * `progress` is 0 → 1 over the scrollable height of the page.
 */
export default function useScrollPosition(onChange) {
  const notify = useEffectEvent(onChange)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      notify({ y, progress: max > 0 ? Math.min(y / max, 1) : 0 })
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
