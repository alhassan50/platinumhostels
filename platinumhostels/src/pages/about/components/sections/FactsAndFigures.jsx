import React from 'react'
import {motion} from "framer-motion"
import { fadeIn } from '../../../../shared/components/MotionVariants'

//data
import hostelfacts from '../../../../data/hostelfacts.json'

export default function FactsAndFigures() {
  return (
    <section className='bg-primary'>
        <div className='section-container'>
            <div className='section-header'>
                <motion.h2 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className='text-secondary text-center'
                >
                    Platinum in figures
                </motion.h2>

                <div className='section-body  max-w-[1100px] mx-auto'>
                    <div className='flex gap-8 flex-wrap justify-center'>
                        {hostelfacts.map(fact => (
                            <motion.div 
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                key={fact.description} className='text-center max-w-[200px]'
                            >
                                <h2 className='text-secondary'>{fact.figure}</h2>
                                <p className='text-secondary mt-3'>{fact.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
