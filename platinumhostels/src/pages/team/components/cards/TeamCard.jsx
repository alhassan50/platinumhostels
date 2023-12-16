import React from 'react'

export default function TeamCard({name, title, image}) {
  return (
    <div className='card shadow rounded overflow-hidden hover:shadow-primary transition-all duration-150 cursor-pointer'>
        <div className='card-container'>
            <figure className='overflow-hidden'>
                <img src={image} alt={image}
                    className='w-full h-full object-cover object-center'
                />
            </figure>

            <div className='p-4 capitalize'>
                <h3>
                   {name}
                </h3>

                <p className='mt-2 flex gap-4 items-center'>
                    {title}
                </p>
            </div>
        </div>
    </div>
  )
}
