import React from 'react'
import {motion} from "framer-motion"

import TeamCard from '../cards/TeamCard'
import { Scale } from '../../../../shared/components/MotionVariants'

import { owners } from '../../../../data/data components/TeamData'

export default function Owners() {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 gap-8 max-w-[800px] mx-auto'>
            {owners.map(owner => (
                <motion.div 
                  variants={Scale(.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  key={`${owner.name}-${owner.title}`}
                >
                    <TeamCard name={owner.name} title={owner.title} image={owner.image} />
                </motion.div>
            ))}
        </div>
    </div>
  )
}
