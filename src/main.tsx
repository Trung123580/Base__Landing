import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import App from "./App.tsx"
import Landing from "./page/Landing.tsx"
import ScaleLayout from "./components/ScaleLayout.tsx"
import "./index.css"
import "./index.scss"
import ProviderRedux from "./components/ProviderRedux.tsx"
import AuthProvider from "./context/AuthProvider.tsx"

createRoot(document.getElementById("root")!).render(
  <ProviderRedux>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='landing' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ProviderRedux>
)
