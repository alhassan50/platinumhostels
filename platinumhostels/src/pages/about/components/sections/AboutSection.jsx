import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { fadeIn, Scale } from '../../../../shared/components/MotionVariants'

//images
import entrance from '../../../../assets/about/entrance.webp'


export default function AboutSection() {
  return (
    <section>
        <div className='section-container'>
            <div className='grid s-lg:grid-cols-2 gap-10'>
                    <motion.div
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <motion.div className='section-header'
                            /* variants={fadeIn("up", 0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }} */
                        >
                            <h2 className='capitalize'>
                                about us
                            </h2>
                        </motion.div>

                        <div className='section-body my-10'>
                            <motion.p
                                /* variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }} */
                            >
                                Platinum Hostels, with a legacy spanning over a decade, is dedicated to providing college students an exceptional accommodation experience fostering exploration, growth, and connections. The hostel stands out for its commitment to balancing comfort, affordability, and a vibrant atmosphere. Their beautifully designed spaces offer a cozy retreat, merging modern aesthetics with functionality. As a trusted partner for students embarking on the transformative college chapter, Platinum Hostels celebrates ambitions and embraces diversity. 
                                <br/><br />
                                Join a community where every student's story becomes a cherished part of the hostel's legacy, creating a haven for academic, social, and personal growth. Welcome to Platinum Hostels, redefining the college living experience.
                            </motion.p>

                            <motion.div
                                /* variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }} */
                            >
                                <Link to={'/home'}>
                                    <button className='btn-primary1 mt-7'>
                                        View Hostels
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={Scale(0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <figure className='section-image overflow-hidden shadow-primary rounded-md'>
                            <img src={entrance} alt='hallway' className='object-cover object-center w-full h-full'/>
                        </figure>
                    </motion.div>
                </div>
        </div>
    </section>
  )
}
