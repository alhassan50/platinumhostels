import React from 'react'
import { Link } from 'react-router-dom'

//images
import distance from '../../../../assets/icons/heights.png'

export default function HostelCard(props) {
  return (
    <div className='card shadow rounded overflow-hidden hover:shadow-primary transition-all duration-150 cursor-pointer'>
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

                <p className='mt-3 flex items-center'>
                    <figure className='w-4 mr-2'>
                        <img src={distance} alt='distance' />
                    </figure>
                    {props.hostel.distance}
                </p>

                <div className='flex gap-4 mt-4'>
                    {
                        props.hostel.amenities.map( amenity => (
                            <figure className='w-5'>
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
