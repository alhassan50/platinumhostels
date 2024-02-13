import React from 'react'
import {motion} from "framer-motion"

import TeamCard from '../cards/TeamCard'
import { Scale } from '../../../../shared/components/MotionVariants'

import { managers } from '../../../../data/data components/TeamData'

export default function Managers() {
  return (
    <div className=''>
        <div className='grid grid-col grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {managers.map(manager => (
                <motion.div 
                  key={`${manager.name}-${manager.title}`}
                  variants={Scale(.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                >
                    <TeamCard name={manager.name} title={manager.title} image={manager.image} />
                </motion.div>
            ))}
        </div>
    </div>
  )
}
