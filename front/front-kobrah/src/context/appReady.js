import { createContext, useContext } from 'react'

export const AppReadyContext = createContext(false)

/** True once the preloader has finished — scroll-reveal animations wait for it. */
export const useAppReady = () => useContext(AppReadyContext)
