import React from 'react'

import Hero from '../../../../shared/components/Hero'

export default function TeamHero() {
  return (
    <Hero 
        headerText={'Our Team'}
        desc={`Meet our passionate team, committed to making your hostel experience exceptional. Owners, managers, and staff work together to create a welcoming environment. Get to know the people who make your stay memorable!`}
        bgImage={'bg-team'}
    />
  )
}
