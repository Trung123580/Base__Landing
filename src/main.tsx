import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.tsx'
import Landing from './page/Landing.tsx'
import ScaleLayout from './components/ScaleLayout.tsx'
import './index.css'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScaleLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ScaleLayout>
  </StrictMode>,
)
