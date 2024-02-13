import React from 'react'
import {motion} from "framer-motion"

import TeamCard from '../cards/TeamCard'
import { Scale } from '../../../../shared/components/MotionVariants'

import { frontdeskstaff } from '../../../../data/data components/TeamData'

export default function FrontDesk() {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 s-lg:grid-cols-4 gap-8'>
            {frontdeskstaff.map(deskstaff => (
                <motion.div 
                  key={`${deskstaff.name}-${deskstaff.title}`}
                  variants={Scale(.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                >
                    <TeamCard name={deskstaff.name} title={deskstaff.title} image={deskstaff.image} />
                </motion.div>
            ))}
        </div>
    </div>
  )
}
