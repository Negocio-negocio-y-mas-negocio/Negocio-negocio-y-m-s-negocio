import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/home'
import StaggeredMenu from '../components/StaggeredMenu/StaggeredMenu'
import Gallery from './gallery/gallery'
import Decorations from './decorations/decorations'
import Food from './food-services/food'

export default function App() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to Home', link: '/' },
    { label: 'Decorations', ariaLabel: 'View our Decorations', link: '/decorations' },
    { label: 'Food Services', ariaLabel: 'View our Food Services', link: '/food-services' },
    { label: 'Packages', ariaLabel: 'Explore our Packages', link: '/packages' },
    { label: 'Flyer Gallery', ariaLabel: 'See our Gallery', link: '/gallery' },
    { label: 'About', ariaLabel: 'Learn more About us', link: '/about' },
    { label: 'Contact', ariaLabel: 'Get in Touch', link: '/contact' },
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <StaggeredMenu
            className="staggered-menu"
            items={menuItems}
            logoUrl="/src/assets/logo-no-name-nobackground.png"
            colors={['#BA8404', '#FFB400']}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            accentColor="#ffb400"
          />
          <br />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/decorations' element={<Decorations />} />
          <Route path='/food-services' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
