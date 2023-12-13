import React from 'react'

//custom component
import HomeHero from './components/sections/HomeHero'
import Endorsement from './components/sections/EndorsementsSection'
import AboutSection from './components/sections/AboutSection'
import HostelsSection from './components/sections/HostelsSection'
import ReviewsSection from './components/sections/ReviewsSection'


export default function Home() {
  return (
    <div>
      <HomeHero />
      <Endorsement />   
      <AboutSection />
      <HostelsSection />
      <ReviewsSection />
    </div>
  )
}
