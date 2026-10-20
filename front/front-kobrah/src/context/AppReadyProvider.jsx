import { useEffect, useState } from 'react'
import Preloader from '../components/layout/Preloader'
import { AppReadyContext } from './appReady'

const MIN_DURATION = 800
const MAX_WAIT = 3000

export default function AppReadyProvider({ children }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let timer

    const finish = () => {
      clearTimeout(timer)
      timer = setTimeout(() => setReady(true), Math.max(0, MIN_DURATION - (performance.now() - start)))
    }

    const fallback = setTimeout(() => setReady(true), MAX_WAIT)
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    return () => {
      clearTimeout(timer)
      clearTimeout(fallback)
      window.removeEventListener('load', finish)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-loading', !ready)
  }, [ready])

  return (
    <AppReadyContext value={ready}>
      <Preloader done={ready} />
      {children}
    </AppReadyContext>
  )
}
