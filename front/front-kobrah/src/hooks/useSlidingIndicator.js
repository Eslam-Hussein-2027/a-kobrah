import { useCallback, useLayoutEffect, useRef } from 'react'

/**
 * Slides an indicator (nav underline, tab pill) under the active item of a container.
 * - `activeSelector`: CSS selector of the item the indicator rests on.
 * - `inset`: horizontal padding removed from each side of the indicator.
 * - `watch`: re-position whenever this value changes (e.g. current route or tab).
 */
export default function useSlidingIndicator(activeSelector, { inset = 0, watch } = {}) {
  const containerRef = useRef(null)
  const indicatorRef = useRef(null)

  const moveTo = useCallback(
    (element) => {
      const indicator = indicatorRef.current
      if (!indicator) return
      if (!element || !containerRef.current?.offsetParent) {
        indicator.style.opacity = 0
        return
      }
      indicator.style.opacity = 1
      indicator.style.left = `${element.offsetLeft + inset}px`
      indicator.style.width = `${element.offsetWidth - inset * 2}px`
    },
    [inset],
  )

  const reset = useCallback(() => {
    moveTo(containerRef.current?.querySelector(activeSelector))
  }, [moveTo, activeSelector])

  useLayoutEffect(() => {
    reset()
    window.addEventListener('resize', reset)
    document.fonts?.ready.then(reset)
    return () => window.removeEventListener('resize', reset)
  }, [reset, watch])

  return { containerRef, indicatorRef, moveTo, reset }
}
