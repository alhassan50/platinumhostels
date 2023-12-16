import React from 'react'

import TeamCard from '../cards/TeamCard'

import { frontdeskstaff } from '../../../../data/data components/TeamData'

export default function FrontDesk() {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 s-lg:grid-cols-4 gap-8'>
            {frontdeskstaff.map(deskstaff => (
                <div key={`${deskstaff.name}-${deskstaff.title}`}>
                    <TeamCard name={deskstaff.name} title={deskstaff.title} image={deskstaff.image} />
                </div>
            ))}
        </div>
    </div>
  )
}
