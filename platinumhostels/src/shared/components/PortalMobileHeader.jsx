import React from 'react'

//components
import Logo from './Logo'

//context
import { useUserContext } from '../../Context/UserContext'

export default function PortalMobileHeader() {
  const {showSideBar, toggleSideBar} = useUserContext()

  return (
    !showSideBar &&
    <header className='flex justify-between items-center pl-3 pr-4 py-3 lg:pl-4 lg:pr-5 bg-primary fixed w-full top-0 left-0 z-[100000000000000000]'>
        <Logo />

        <figure 
            className='w-6 cursor-pointer'
            onClick={() => {
                toggleSideBar()
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </figure>
    </header>
  )
}
