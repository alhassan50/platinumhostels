import React from 'react'

import TeamCard from '../cards/TeamCard'

import { owners } from '../../../../data/data components/TeamData'

export default function Owners() {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 gap-8 max-w-[800px] mx-auto'>
            {owners.map(owner => (
                <div key={`${owner.name}-${owner.title}`}>
                    <TeamCard name={owner.name} title={owner.title} image={owner.image} />
                </div>
            ))}
        </div>
    </div>
  )
}
