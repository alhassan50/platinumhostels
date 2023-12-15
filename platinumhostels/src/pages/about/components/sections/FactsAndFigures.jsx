import React from 'react'

import hostelfacts from '../../../../data/hostelfacts.json'

export default function FactsAndFigures() {
  return (
    <section className='bg-primary'>
        <div className='section-container'>
            <div className='section-header'>
                <h2 className='text-secondary text-center'>
                    Platinum in figures
                </h2>

                <div className='section-body  max-w-[1100px] mx-auto'>
                    <div className='flex gap-8 flex-wrap justify-center'>
                        {hostelfacts.map(fact => (
                            <div key={fact.description} className='text-center max-w-[200px]'>
                                <h2 className='text-secondary'>{fact.figure}</h2>
                                <p className='text-secondary mt-3'>{fact.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
