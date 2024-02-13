import React from 'react'
import {motion} from "framer-motion"

import { fadeIn } from '../../../../shared/components/MotionVariants'

export default function Gallery({gallery}) {
  return (
    <section>
        <div className='section-container'>
            <div className='section-header'>
                <motion.h2 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className='text-center'
                >
                    Gallery
                </motion.h2>
            </div>

            <div className='section-body'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    {gallery.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                            className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <figure 
                                className={`overflow-hidden rounded-md shadow-sm group cursor-pointer`}
                                
                            >
                                <img 
                                    src={image} 
                                    alt={image} 
                                    className={`w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-[400ms]`}
                                />
                            </figure>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
