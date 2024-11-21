import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ThemeProvider } from './components/ThemeContext.jsx'
// import { UserProvider } from './components/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider></ThemeProvider> */}
    {/* <UserProvider></UserProvider> */}
        <App />
  </StrictMode>,
)
