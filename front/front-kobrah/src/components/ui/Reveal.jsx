import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { useAppReady } from '../../context/appReady'

const OBSERVER_OPTIONS = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
const SETTLE_AFTER = 1700 // ms — then the reveal attributes are dropped so hover transforms work again

/**
 * Animates its element into view the first time it is scrolled to.
 * - as: element or component to render (default 'div')
 * - type: 'up' | 'left' | 'right' | 'zoom' | 'line'
 * - delay: stagger in ms
 * - onReveal: called once when the element enters the viewport
 */
export default function Reveal({
  as: Tag = 'div',
  type = 'up',
  delay = 0,
  onReveal,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const ready = useAppReady()
  const [phase, setPhase] = useState('hidden') // hidden → in → done
  const handleReveal = useEffectEvent(() => onReveal?.())

  useEffect(() => {
    if (!ready || phase !== 'hidden' || !ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setPhase('in')
      handleReveal()
    }, OBSERVER_OPTIONS)

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ready, phase])

  useEffect(() => {
    if (phase !== 'in') return
    const timer = setTimeout(() => setPhase('done'), SETTLE_AFTER + delay)
    return () => clearTimeout(timer)
  }, [phase, delay])

  const settled = phase === 'done'

  return (
    <Tag
      ref={ref}
      className={[className, phase === 'in' && 'is-in'].filter(Boolean).join(' ') || undefined}
      style={delay ? { ...style, '--d': `${delay}ms` } : style}
      data-reveal={settled ? undefined : type}
      {...rest}
    >
      {children}
    </Tag>
  )
}
