import React from 'react'

export default function Gallery({gallery}) {
  return (
    <section>
        <div className='section-container'>
            <div className='section-header'>
                <h2 className='text-center'>
                    Gallery
                </h2>
            </div>

            <div className='section-body'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    {gallery.map((image, index) => (
                        <figure className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} overflow-hidden rounded-md shadow-sm group cursor-pointer`}>
                            <img 
                                src={image} 
                                alt={image} 
                                className={`${index === 0 ? 'w-full h-full object-cover object-center' : ''} group-hover:scale-110 transition-all duration-[400ms]`}
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
