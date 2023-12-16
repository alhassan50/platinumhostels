import React from 'react'

import TeamCard from '../cards/TeamCard'

import { managers } from '../../../../data/data components/TeamData'

export default function Managers() {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {managers.map(manager => (
                <div key={`${manager.name}-${manager.title}`}>
                    <TeamCard name={manager.name} title={manager.title} image={manager.image} />
                </div>
            ))}
        </div>
    </div>
  )
}
