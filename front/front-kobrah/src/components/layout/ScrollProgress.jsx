import { useRef } from 'react'
import useScrollPosition from '../../hooks/useScrollPosition'
import './ScrollProgress.css'

/** Thin gradient bar at the top of the viewport showing how far the page is scrolled. */
export default function ScrollProgress() {
  const barRef = useRef(null)

  useScrollPosition(({ progress }) => {
    if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
  })

  return <div ref={barRef} className="progress" aria-hidden="true" />
}
