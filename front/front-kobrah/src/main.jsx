import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted brand faces: Noto Kufi Arabic (display, station names) and Readex Pro (text).
import '@fontsource-variable/noto-kufi-arabic'
import '@fontsource-variable/readex-pro'
// Global styles first, so component styles can override them.
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
