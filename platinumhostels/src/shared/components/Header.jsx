import React, { useState } from 'react'

//custom components
import Logo from './Logo'
import SideNav from './nav/SideNav'
import Navbar from './nav/Navbar'

//icons
import menuIcon from '../../assets/icons/hamburger.png'
import closeIcon from '../../assets/icons/close.png'

export default function Header() {
  const [showSideNav, setShowSideNav] = useState(false)

  const toggleSideNav = () => {
    setShowSideNav(prev => !prev)
  }

  return (
    <header className='flex justify-between items-center pl-3 pr-4 py-3 lg:pl-4 lg:pr-5 bg-primary fixed w-full top-0 left-0 z-50'>
      <Logo />
      
      <Navbar />

      <figure 
        className='sidebar-menu w-5 z-10 cursor-pointer s-lg:hidden'
        onClick={toggleSideNav}
      >
        {
          showSideNav ? 
          <img src={closeIcon} alt='close icon'/> : <img src={menuIcon} alt='menu icon' />
        }
      </figure>

      {showSideNav && <SideNav closeSideNav={toggleSideNav} />}
    </header>
  )
}
