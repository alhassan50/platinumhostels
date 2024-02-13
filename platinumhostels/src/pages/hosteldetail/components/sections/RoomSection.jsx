import React from 'react'
import {motion} from "framer-motion"

//components
import RoomCard from '../cards/RoomCard'
import { fadeIn } from '../../../../shared/components/MotionVariants'

export default function RoomSection({roomdetails, hostelLocation}) {
  return (
    <section className='bg-[#fafafa]'>
        <div className='section-container'>
            <div className='section-header'>
                <motion.h2 
                    variants={fadeIn("up", 0.5, 0.4)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className='text-center'
                >
                    Rooms
                </motion.h2>
            </div>

            <div className='section-body'>
                <div className='grid md:grid-cols-2 s-lg:grid-cols-3 gap-10'>
                    {roomdetails.map(room => (
                        <motion.div 
                            variants={fadeIn("up", 0.5, 0.4)}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0 }}
                            key={room.id}
                        >
                            <RoomCard room={room} hostelLocation={hostelLocation} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
