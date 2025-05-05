import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ART from './ART.jsx/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ART/>
  </StrictMode>,
)
