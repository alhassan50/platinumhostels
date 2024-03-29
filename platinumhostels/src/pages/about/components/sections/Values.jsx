import React from 'react'
import {motion, useViewportScroll, useTransform} from "framer-motion"
import { fadeIn } from '../../../../shared/components/MotionVariants'

//images
import hospitality from '../../../../assets/about/groupies.webp'
import teamwork from '../../../../assets/about/teamwork.webp'
import integrity from '../../../../assets/about/integrity.webp'

export default function Values() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [.8, 1]);

  return (
    <section className='bg-[#fafafa]'>
        <div className='section-container'>
            <div className='section-header'>
                <motion.h2 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className='text-center'
                >
                    our core values
                </motion.h2>
            </div>

            <div className='section-body'>
                <div>
                    <div className='hospitality grid md:grid-cols-2 gap-10 items-center'>
                        <motion.div
                            style={{
                                scale
                            }}
                        >    
                            <figure 
                                className='rounded-md md:rounded-sm overflow-hidden shadow-primary order-2 md:order-1'
                            >
                                <img src={hospitality} alt='team work' className='w-full h-full object-cover object-center' />
                            </figure>
                        </motion.div>

                        <motion.div 
                            variants={fadeIn("up", 0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                            className='md:order-2'
                        >
                            <h3>Hospitality</h3>

                            <p className='mt-3'>
                                At Platinum Hostel, hospitality is at the heart of everything we do. We strive to create a warm and welcoming environment for all our guests, ensuring their comfort and satisfaction throughout their stay. Our dedicated staff is committed to providing exceptional service and making every guest feel at home.
                            </p>
                        </motion.div>
                    </div>

                    <div className='hospitality grid md:grid-cols-2 gap-10 items-center mt-10 md:mt-24'>
                        <motion.div
                            variants={fadeIn("up", 0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                            className='order-2 md:order-1'
                        >
                            <h3>Team Work</h3>

                            <p className='mt-3'>
                                Teamwork is the foundation of our success at Platinum Hostel. We believe in the power of collaboration and synergy. Our staff works together seamlessly, supporting one another and going above and beyond to deliver outstanding experiences to our guests. By fostering a spirit of teamwork, we create a positive and harmonious atmosphere for both our team members and guests.
                            </p>
                        </motion.div>

                        <motion.div
                            style={{
                                scale
                            }}
                            className='order-1 md:order-2'
                        >
                            <figure className='rounded-md md:rounded-sm overflow-hidden shadow-primary'>
                                <img src={teamwork} alt='team work' />
                            </figure>
                        </motion.div>
                    </div>

                    <div className='hospitality grid md:grid-cols-2 gap-10 items-center mt-10 md:mt-24'>
                        <motion.div
                            style={{
                                scale
                            }}
                        >
                            <figure className='rounded-md md:rounded-sm overflow-hidden shadow-primary order-2 md:order-1'>
                                <img src={integrity} alt='team work' />
                            </figure>
                        </motion.div>

                        <motion.div 
                            variants={fadeIn("up", 0.5, 0)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                            className='md:order-2'
                        >
                            <h3>Integrity</h3>

                            <p className='mt-3'>
                                Integrity is our guiding principle at Platinum Hostel. We believe in conducting business with honesty, transparency, and ethical practices. We prioritize the trust and confidence of our guests by delivering on our promises and upholding the highest standards of professionalism. Integrity is ingrained in every interaction, ensuring that our guests can rely on us for an exceptional and trustworthy experience.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
