import React from 'react'

export default function AboutHostel({aboutHostel, amenities}) {
  return (
    <section className=''>
        <div className='section-container'>
            <div className='section-header'>
                <h2 className='font-normal text-[20px] capitalize'>
                    About this place
                </h2>
            </div>

            <hr className='my-8' />
            
            <div className='grid s-lg:grid-cols-2 gap-16'>
                <div>
                    <div className=''>
                        <p>
                            {aboutHostel}
                        </p>

                        <div>
                            <button className='btn-primary1 mt-7'>
                                Book A Room
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='section-header'>
                        <h3 className='capitalize'>
                            Amenities &amp; facilites
                        </h3>
                    </div>

                    <div className='mt-4 grid gap-5 sm:grid-cols-2'>
                        {amenities.map(amenity => (
                            <div key={amenity.name} className='flex gap-5 items-center'>
                                <figure className='w-7'>
                                    <img src={amenity.image} alt={amenity.name} title={amenity.name} />
                                </figure>
                                <p className='capitalize text-primary text-sm'>
                                    {amenity.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
