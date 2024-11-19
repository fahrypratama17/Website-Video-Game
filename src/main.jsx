import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarouselGame from './components/Carousel/CarouselGame.jsx'
import NavbarComponent from './components/Navbar/NavbarComponent.jsx'
import SidebarFetch from './components/Sidebar/SidebarFetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarouselGame />
    <SidebarFetch />
  </StrictMode>,
)
