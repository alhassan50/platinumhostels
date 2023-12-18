import React from 'react'

//data
import hostelsdata from '../../data/hostels.json'

//components
import ContactHero from './components/sections/ContactHero'
import ContactCard from './components/cards/ContactCard'
import ContactForm from './components/sections/ContactForm'
import LocationMap from './components/sections/LocationMap'

export default function Contact() {
  return (
    <div>
        <ContactHero/>
        <section>
            <div className='section-container'>
                <div className='grid s-lg:grid-cols-3 gap-10'>
                    {
                        hostelsdata.map(hostel => (
                            <div key={hostel.id}>
                                <ContactCard name={`platinum hostels, ${hostel.location}`} contact={hostel.contactInfo} />
                            </div>
                        ))
                    }
                </div>

                <hr className='my-10 md:my-20'/>

                <div className='grid lg:grid-cols-2 gap-14'>
                    <ContactForm/>
                    <div>
                        <h3 className='mb-2'>Platinum Hostels, Ayeduase (Main)</h3>
                        <LocationMap/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
