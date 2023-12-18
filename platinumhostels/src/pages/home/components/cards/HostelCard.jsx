import React from 'react'
import { Link } from 'react-router-dom'

//images
import distance from '../../../../assets/icons/heights.png'

export default function HostelCard(props) {
  const amenitiesToShow = props.hostel.amenities.slice(0, 5);
  return (
    <div className='card'>
        <div className='card-container'>
            <figure className='overflow-hidden'>
                <img src={props.hostel.image} alt={props.hostel.image}
                    className='w-full h-full object-cover object-center'
                />
            </figure>

            <div className='p-4'>
                <h3>
                    Platinum Hostels, {props.hostel.location}
                </h3>

                <div className='mt-3 flex items-center'>
                    <figure className='w-4 mr-2'>
                        <img src={distance} alt='distance' />
                    </figure>
                    <p>
                        {props.hostel.distance}
                    </p>
                </div>

                <div className='flex gap-6 mt-4'>
                    {
                        amenitiesToShow.map( amenity => ( 
                                <figure key={amenity.name} className='w-6'>
                                    <img src={amenity.image} alt={amenity.name} title={amenity.name}/>
                                </figure>
                        ))
                    }
                </div>

                <div className='mt-8 flex gap-4'>
                    <Link to={`/hostels${props.hostel.to}`}>
                        <button className='btn-primary1 text-white'>
                            View Hostel
                        </button>
                    </Link>

                    <Link to={'/'}>
                        <button className='btn-ghost2'>
                            Book Now
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
    </div>
  )
}
