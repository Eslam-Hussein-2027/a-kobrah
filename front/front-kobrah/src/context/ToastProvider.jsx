import { useCallback, useEffect, useRef, useState } from 'react'
import Toast from '../components/ui/Toast'
import { ToastContext } from './toast'

const DURATION = 3800

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: '', type: 'info', visible: false })
  const timer = useRef(null)

  const show = useCallback((message, type = 'info') => {
    clearTimeout(timer.current)
    setToast({ message, type, visible: true })
    timer.current = setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), DURATION)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <ToastContext value={show}>
      {children}
      <Toast {...toast} />
    </ToastContext>
  )
}
