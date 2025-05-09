import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScaleLayout from './components/ScaleLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScaleLayout>
      <App />
    </ScaleLayout>
  </StrictMode>,
)
