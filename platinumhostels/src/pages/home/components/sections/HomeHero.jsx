import React from 'react'
import { Link } from 'react-router-dom'

//custom components
import Hero from '../../../../shared/components/Hero'

//icons
import arrow from '../../../../assets/icons/right-arrow.png'

export default function HomeHero() {
  return (
    <Hero 
        headerText={'platinum hostels'} 
        desc={'Unforgettable moments. Unbeatable value. Welcome to Platinum Hostels, where college adventures come alive!'} 
        bgImage={'bg-home'} 
      >
        <div className='mt-6 flex justify-center items-center flex-wrap gap-4'>
          <Link to={'/booknow'}>
            <button className='btn-primary2 flex justify-center items-center gap-2 group'>
              Book Now
              <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                <img src={arrow} alt='right arrow'/>
              </figure>
            </button>
          </Link>

          <Link to={'/login'}>
            <button className='btn-sec1 flex justify-center items-center gap-2'>
              Login
            </button>
          </Link>
        </div>
      </Hero>
  )
}
