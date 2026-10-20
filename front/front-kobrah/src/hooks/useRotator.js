import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/motion'

/** Cycles through `count` items; returns the current and the previous (leaving) index. */
export default function useRotator(count, interval = 2600) {
  const [state, setState] = useState({ current: 0, previous: null })

  useEffect(() => {
    if (count < 2 || prefersReducedMotion()) return
    const id = setInterval(() => {
      setState(({ current }) => ({ current: (current + 1) % count, previous: current }))
    }, interval)
    return () => clearInterval(id)
  }, [count, interval])

  return state
}
