import { createContext, useContext } from 'react'

export const ContentContext = createContext(null)

/** Site settings, products, sectors and forms (API data with local fallback). */
export const useContent = () => useContext(ContentContext)
