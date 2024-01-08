import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

//data
import navlinks from '../../../data/navlinks.json'

//icons
import arrow from '../../../assets/icons/arrow-sec.png'

export default function MainNav() {
  return (
    <nav className='hidden s-lg:block'>
        <div className='flex justify-center items-center gap-7 text-secondary'>
          {
            navlinks.map(link => (
              <div className='group' key={link.to}>
                {
                      link.dropdown ? 
                      <div>
                        <HashLink 
                          smooth
                          to={link.to} 
                          className={({isActive}) => (isActive & link.to != null) ? 'active-link' : null}
                        >
                          <div className=''>
                              <h3 className='hover:underline text-secondary capitalize relative'>
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
                            </div>
                        </HashLink>
                        <div 
                          className='hidden group-hover:block absolute px-2 py-3 
                          rounded shadow-tertiary bg-secondary'
                        >
                          {
                            link.dropdown.map(subLink => (
                              <Link to={subLink.to} key={subLink.to}>
                                <h4 className='text-primary py-1 hover:underline'>
                                  {subLink.title}
                                </h4>
                              </Link>
                            ))
                          }
                        </div>
                      </div>
                      :
                      <NavLink 
                          to={link.to} 
                          className={({isActive}) => (isActive & link.to != null) ? 'active-link' : null}
                      >
                        <div className=''>
                            <h3 className='hover:underline text-secondary capitalize relative'>
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
                          </div>
                      </NavLink>
                    }
              </div>
            ))
          }
        </div>
      </nav>
  )
}
