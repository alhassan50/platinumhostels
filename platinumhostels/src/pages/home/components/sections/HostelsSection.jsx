import React from 'react'

//custom components
import HostelCard from '../cards/HostelCard'
import {motion} from "framer-motion"
import { fadeIn } from '../../../../shared/components/MotionVariants'
import { Scale } from '../../../../shared/components/MotionVariants'

//data
import hostelsdata from '../../../../data/hostels.json'

export default function HostelsSection() {
  return (
    <section id='hostels'>
        <div className='section-container'>
            <div className='header-section text-center'>
                <motion.h2
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    Our Hostels
                </motion.h2>
            </div>

            <div className='section-body grid md:grid-cols-2 s-lg:grid-cols-3 gap-10'>
                {hostelsdata.map(hostel => (
                   <div key={hostel.id}>
                    <motion.div
                        variants={Scale(.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <HostelCard hostel={hostel} />
                    </motion.div>
                   </div> 
                ))}
            </div>
        </div>
    </section>
  )
}
