import React from 'react'

//components
import RoomCard from '../cards/RoomCard'

export default function RoomSection({roomdetails}) {
  return (
    <section className='bg-[#fafafa]'>
        <div className='section-container'>
            <div className='section-header'>
                <h2 className='text-center'>
                    Rooms
                </h2>
            </div>

            <div className='section-body'>
                <div className='grid md:grid-cols-2 s-lg:grid-cols-3 gap-10'>
                    {roomdetails.map(room => (
                        <div key={room.id}>
                            <RoomCard room={room} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
