import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../../utils/motion'

const DURATION = 1900
const format = (n) => n.toLocaleString('en')

/** Counts from 0 to `end` (ease-out) once `start` becomes true. */
export default function CountUp({ end, start }) {
  const [value, setValue] = useState(0)
  const instant = prefersReducedMotion()

  useEffect(() => {
    if (!start || instant) return

    const t0 = performance.now()
    let frame
    const step = (now) => {
      const k = Math.min((now - t0) / DURATION, 1)
      setValue(Math.round(end * (1 - Math.pow(1 - k, 3))))
      if (k < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [end, start, instant])

  return <span>{format(start && instant ? end : value)}</span>
}
