import React from 'react'

import Hero from '../../../../shared/components/Hero'

export default function HostelsDetailsHero({heroHeaderText, heroDescText, bgImage}) {
  return (
    <Hero 
        headerText={heroHeaderText} 
        desc={heroDescText}
        bgImage={bgImage}
    />
  )
}
