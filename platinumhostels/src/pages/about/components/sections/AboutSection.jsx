import React from 'react'
import { Link } from 'react-router-dom'

import entrance from '../../../../assets/about/entrance.webp'

export default function AboutSection() {
  return (
    <section>
        <div className='section-container'>
            <div className='grid s-lg:grid-cols-2 gap-10'>
                    <div>
                        <div className='section-header'>
                            <h2 className='capitalize'>
                                about us
                            </h2>
                        </div>

                        <div className='section-body my-10'>
                            <p>
                                Platinum Hostels, with a legacy spanning over a decade, is dedicated to providing college students an exceptional accommodation experience fostering exploration, growth, and connections. The hostel stands out for its commitment to balancing comfort, affordability, and a vibrant atmosphere. Their beautifully designed spaces offer a cozy retreat, merging modern aesthetics with functionality. As a trusted partner for students embarking on the transformative college chapter, Platinum Hostels celebrates ambitions and embraces diversity. 
                                <br/><br />
                                Join a community where every student's story becomes a cherished part of the hostel's legacy, creating a haven for academic, social, and personal growth. Welcome to Platinum Hostels, redefining the college living experience.
                            </p>

                            <Link to={'/home'}>
                                <button className='btn-primary1 mt-7'>
                                    View Hostels
                                </button>
                            </Link>
                        </div>
                    </div>

                    <figure className='section-image overflow-hidden shadow-primary rounded-md'>
                        <img src={entrance} alt='hallway' className='object-cover object-center w-full h-full'/>
                    </figure>
                </div>
        </div>
    </section>
  )
}
