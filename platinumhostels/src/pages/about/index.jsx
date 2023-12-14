import React from 'react'

//custom components
import AboutHero from './components/sections/AboutHero'
import AboutSection from './components/sections/AboutSection'
import Values from './components/sections/Values'
import FactsAndFigures from './components/sections/FactsAndFigures'
import Newsletter from '../home/components/sections/Newsletter'

export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutSection />
      <Values />
      <FactsAndFigures />
      <Newsletter />
    </div>
  )
}
