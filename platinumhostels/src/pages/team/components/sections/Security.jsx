import React from 'react'
import {motion} from "framer-motion"

import TeamCard from '../cards/TeamCard'

import { security } from '../../../../data/data components/TeamData'
import { Scale } from '../../../../shared/components/MotionVariants'

export default function Security() {
  return (
    <div className=''>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {security.map(security => (
                <motion.div 
                  variants={Scale(.5, 0)}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  key={`${security.name}-${security.title}`}
                >
                    <TeamCard name={security.name} title={security.title} image={security.image} />
                </motion.div>
            ))}
        </div>
    </div>
  )
}
