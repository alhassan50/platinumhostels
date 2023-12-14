import React from 'react'
import { NavLink } from 'react-router-dom'

//data
import navlinks from '../../../data/navlinks.json'

//icons
import arrow from '../../../assets/icons/arrow.png'

export default function SideNav(props) {
  return (
    <nav
        className='side-bar w-full h-full fixed top-0 left-0 bg-secondary overflow-y-auto'
    >
        <div 
            className='flex justify-center items-center w-full min-h-full'
        >
            <div className='my-12 flex justify-center items-center flex-col gap-2 text-primary '>
                {
                    navlinks.map(link => (
                        <NavLink 
                            to={link.to}
                            key={link.to}
                            onClick={props.closeSideNav}
                            className={({isActive}, link) => isActive ? 'active-link' : null}
                        >
                            <h3 className='hover:underline capitalize'>
                                {link.title}

                                {
                                    link.dropdown && 
                                    <figure className='dropdown w-3 inline-block'>
                                        <img 
                                            src={arrow} 
                                            alt='arrow icon'
                                        />
                                    </figure>
                                }
                            </h3>

                        </NavLink>
                    ))
                }
            </div>
        </div>
    </nav>
  )
}
