import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

import { fadeIn } from '../../../../shared/components/MotionVariants'
 
export default function AboutHostel({aboutHostel, amenities, hostelLocation}) {
  return (
    <section className=''>
        <div className='section-container'>
            <div className='section-header'>
                <motion.h2 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className='font-normal text-[20px] capitalize'
                >
                    About this place
                </motion.h2>
            </div>

            <hr className='my-8' />
            
            <div className='grid s-lg:grid-cols-2 gap-16'>
                <div>
                    <motion.div 
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <p>
                            {aboutHostel}
                        </p>

                        <Link to={`/booknow?hostelLocation=${hostelLocation}`}>
                            <div>
                                <button className='btn-primary1 mt-7'>
                                    Book A Room
                                </button>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                <div>
                    <motion.div 
                        className='section-header'
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <h3 className='capitalize'>
                            Amenities &amp; facilites
                        </h3>
                    </motion.div>

                    <div className='mt-4 grid gap-5 sm:grid-cols-2'>
                        {amenities.map(amenity => (
                            <motion.div 
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                key={amenity.name} 
                                className='flex gap-5 items-center'
                            >
                                <figure className='w-7'>
                                    <img src={amenity.image} alt={amenity.name} title={amenity.name} />
                                </figure>
                                <p className='capitalize text-primary text-sm'>
                                    {amenity.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
