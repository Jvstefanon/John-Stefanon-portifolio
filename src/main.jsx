import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Home from './Pages/Home/Home'
import Sobre from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Formation from './Pages/Formation/Formation'
import Contact from './Pages/Contact/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Sobre />
    <Projects />
    <Formation />
    <Contact />
  </StrictMode>
)
