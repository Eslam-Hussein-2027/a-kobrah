import { createContext, useContext } from 'react'

export const ToastContext = createContext(() => {})

/** Returns `toast(message, type)` where type is 'info' | 'success' | 'error'. */
export const useToast = () => useContext(ToastContext)
