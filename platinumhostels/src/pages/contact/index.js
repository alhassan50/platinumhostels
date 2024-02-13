import React from 'react'

//data
import hostelsdata from '../../data/hostels.json'

//components
import ContactHero from './components/sections/ContactHero'
import ContactCard from './components/cards/ContactCard'
import ContactForm from './components/sections/ContactForm'
import LocationMap from './components/sections/LocationMap'
import {motion} from "framer-motion"

import { fadeIn } from '../../shared/components/MotionVariants'

export default function Contact() {
  return (
    <div>
        <ContactHero/>
        <section>
            <div className='section-container'>
                <div className='flex flex-wrap items-center justify-center gap-10'>
                    {
                        hostelsdata.map(hostel => (
                            <motion.div 
                                variants={fadeIn("up", 0.5, 0)}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0 }}
                                key={hostel.id}
                            >
                                <ContactCard name={`platinum hostels, ${hostel.location}`} contact={hostel.contactInfo} />
                            </motion.div>
                        ))
                    }
                </div>

                <hr className='my-10 md:my-20'/>

                <div className='grid lg:grid-cols-2 gap-14'>
                    <motion.div
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <ContactForm/>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.5, 0)}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}
                    >
                        <h3 className='mb-2'>Platinum Hostels, Ayeduase (Main)</h3>
                        <LocationMap/>
                    </motion.div>
                </div>
            </div>
        </section>
    </div>
  )
}
