import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from './Logo';
import portalnavlinks from '../../data/portalnavlinks.json';

//utility
import { signOutUser } from '../../utility/authUtility';

//context
import { useUserContext } from '../../Context/UserContext';

export default function PortalHeader({showSideBar, toggleSideBar}) {
  const {setUserSignedOut} = useUserContext()

  const handleSignOut = () => {
    setUserSignedOut(true)
    signOutUser()
  }
  const renderNavLink = (link) => (
      link.to ?
      <NavLink
        to={link.to}
        key={link.to}
        className={({ isActive }) => isActive ? 'active-side-link' : 'text-secondary'}
      >
        <li>
            <h3 className='text-secondary'>{link.title}</h3>
        </li>
      </NavLink>
      :
      <Link
        onClick={() => (handleSignOut())}
        key={link.to}
      >
        <li>
            <h3 className='text-secondary'>{link.title}</h3>
        </li>
      </Link>
  );

  return (
    <div>
      {showSideBar && 
        <div className={`fixed top-0 left-0 w-full h-full s-lg:hidden`}>
          <div className='absolute top-0 left-0 w-full h-full opacity-40 bg-neutral-400'></div>
          <button 
            className='bg-white absolute p-4 opacity-100 top-[1%] right-[1%] flex justify-center items-center text-primary rounded-[50%] w-18 h-18 hover:bg-primary group'
            onClick={() => (toggleSideBar())}
          >
              <svg xmlns="http://www.w3.org/2000/svg" className='fill-primary group-hover:fill-white w-5 h-5' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </button>
        </div>
      }

      <div 
        className={`portal-header ${showSideBar ? 'z-[100000]' : 'hidden'} s-lg:block bg-primary fixed p-6 w-[250px] h-full overflow-y-auto`}
      >
        <div className='h-[100%] relative'>
          <div>
            <Logo />
          </div>

          <hr className='my-6' />

          <nav className='portal-sidebar'>
            <ul className='h-full flex flex-col justify-between'>
              <div className='grid gap-2'>
                {portalnavlinks.slice(0, portalnavlinks.length - 3).map(renderNavLink)}
              </div>

              <div className='grid gap-2 absolute bottom-0 left-0 w-full'>
                {portalnavlinks.slice(-3).map(renderNavLink)}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
