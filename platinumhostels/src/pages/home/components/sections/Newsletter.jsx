import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { fadeIn } from '../../../../shared/components/MotionVariants'

//images
import arrow from '../../../../assets/icons/right-arrow.png'

export default function Newsletter() {
  return (
    <section>
        <div className='section-container bg-primary rounded-[10px]'>
            <div className='max-w-[700px] mx-auto text-center p-10'>
                <motion.h3 
                    variants={fadeIn("up", .5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className='text-secondary'
                >
                    Book now for the ultimate college adventure at Platinum Hostels. Experience comfort, community, and     affordability like never before. Reserve your spot today!
                </motion.h3>

                <Link to={'/booknow'} className='inline-block'>
                    <button className='mt-10 btn-primary2 flex justify-center items-center gap-2 group'>
                        Book Now
                        <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                            <img src={arrow} alt='right arrow'/>
                        </figure>
                    </button>
                </Link>
            </div>
        </div>
    </section>
  )
}
