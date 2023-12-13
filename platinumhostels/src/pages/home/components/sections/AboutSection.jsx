import React from 'react'

//images
import hallway from '../../../../assets/about/hallway.webp'

export default function AboutSection() {
  return (
    <section className='bg-[#fafafa]'>
        <div className='section-container'>
            <div className='grid s-lg:grid-cols-2 gap-10'>
                <div>
                    <div className='section-header'>
                        <h2 className='capitalize'>
                            our story
                        </h2>
                    </div>

                    <div className='section-body my-10'>
                        <p>
                            Welcome to Platinum Hostels, where college life is elevated to new heights. We are a trusted and vibrant community that goes beyond just providing accommodations. With over a decade of experience, we offer the perfect blend of comfort, affordability, and a lively atmosphere. Our beautifully designed spaces create a cozy retreat for students after classes or adventures. We take pride in curating an inclusive environment that fosters connections, lifelong friendships, and personal growth. Join us and become part of the Platinum Hostels legacy, where every student's story is celebrated.
                        </p>

                        <div>
                            <button className='btn-primary1 mt-7'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <figure className='section-image overflow-hidden shadow-primary rounded-md'>
                    <img src={hallway} alt='hallway' className='object-cover object-center w-full h-full'/>
                </figure>
            </div>
        </div>
    </section>
  )
}
