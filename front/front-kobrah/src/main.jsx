import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Global styles first, so component styles can override them.
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
