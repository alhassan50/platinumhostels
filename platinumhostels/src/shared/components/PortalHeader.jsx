import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';
import portalnavlinks from '../../data/portalnavlinks.json';

export default function PortalHeader() {
  const renderNavLink = (link) => (
      <NavLink
        to={link.to}
        key={link.to}
        className={({ isActive }) => isActive ? 'active-side-link' : 'text-secondary'}
      >
        <li>
            <h3 className='text-secondary'>{link.title}</h3>
        </li>
      </NavLink>
  );

  return (
    <div className='portal-header hidden s-lg:block bg-primary fixed p-6 w-[250px] h-full overflow-y-auto'>
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
  );
}
