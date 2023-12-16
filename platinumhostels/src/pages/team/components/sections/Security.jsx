import React from 'react'

import TeamCard from '../cards/TeamCard'

import { security } from '../../../../data/data components/TeamData'

export default function Security() {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {security.map(security => (
                <div key={`${security.name}-${security.title}`}>
                    <TeamCard name={security.name} title={security.title} image={security.image} />
                </div>
            ))}
        </div>
    </div>
  )
}
