import React from 'react'
import { Link } from 'react-router-dom'

//icons
import occupants from '../../../../assets/icons/occupants.png'

export default function RoomCard(props) {
  return (
    <div className='card'>
        <div className='card-container'>
            <figure className='overflow-hidden'>
                <img src={props.room.image} alt={props.room.image}
                    className='w-full h-full object-cover object-center'
                />
            </figure>

            <div className='p-4'>
                <h3>
                   {props.room.name}
                </h3>

                <p className='mt-3 flex gap-4 items-center'>
                    <figure className='w-6'>
                        <img src={occupants} alt='occupants' />
                    </figure>
                    {props.room.occupants} Occupants
                </p>

                <div className='mt-8 flex gap-4'>
                  <Link to={`/booknow?hostelLocation=${props.hostelLocation}&roomType=${props.room.id}`}>
                        <button className='btn-primary1 text-white'>
                            Book Now
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
    </div>
  )
}
