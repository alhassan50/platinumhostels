import React from 'react'

//custom components
import HostelCard from '../cards/HostelCard'

//data
import hostelsdata from '../../../../data/hostels.json'

export default function HostelsSection() {
  return (
    <section>
        <div className='section-container'>
            <div className='header-section text-center'>
                <h2>
                    Our Hostels
                </h2>
            </div>

            <div className='section-body grid md:grid-cols-2 s-lg:grid-cols-3 gap-10'>
                {hostelsdata.map(hostel => (
                   <div key={hostel.id}>
                        <HostelCard hostel={hostel} />
                   </div> 
                ))}
            </div>
        </div>
    </section>
  )
}
