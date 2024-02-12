import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from './MotionVariants'


export default function Hero({children, headerText, desc, bgImage}) {
  return (
    <section className={`hero-section ${bgImage}`}>
        
        <div className='section-container flex justify-center items-center'>
            <div 
                className='flex justify-center items-center flex-col max-w-[900px] mx-auto'
            >
                <motion.h1
                    variants={fadeIn("up", 0.5, 0.2)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    {headerText}
                </motion.h1>

                <motion.p 
                    variants={fadeIn("up", 0.5, 0.4)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    className='hero-desc'
                >
                    {desc}
                </motion.p>

                <motion.div
                    variants={fadeIn("up", 0.5, 0.6)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    </section>
  )
}
