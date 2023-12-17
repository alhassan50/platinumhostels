import React from 'react'

import TeamHero from './components/sections/TeamHero'
import Owners from './components/sections/Owners'
import Managers from './components/sections/Managers'
import FrontDesk from './components/sections/FrontDesk'
import Security from './components/sections/Security'

export default function Team() {
  return (
    <div>
      <TeamHero />
      <section>
        <div className='section-container'>
          <Owners />
          <hr className='my-20'/>
          <Managers />
          <hr className='my-20'/>
          <FrontDesk />
          <hr className='my-20'/>
          <Security />
        </div>
      </section>
    </div>
  )
}
