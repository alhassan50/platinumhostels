import React from 'react'
import {redirect, useLoaderData} from 'react-router-dom' 

//utility
import getHostelDetails from './utility/getHostelDetails'

//components
import HostelsDetailsHero from './components/sections/HostelsDetailsHero'
import AboutHostel from './components/sections/AboutHostel'
import RoomSection from './components/sections/RoomSection'
import Gallery from './components/sections/Gallery'

//loader
export const loader = ({params}) => {
  const hostelLocation = params.hostelLocation
  const hostelDetails = getHostelDetails(hostelLocation)

  if (hostelDetails.response_code === 404) {
    throw redirect('/notfound')
  }

  return hostelDetails.data
}

export default function HostelDetail() {
  const hostelDetails = useLoaderData()

  return (
    <div>
      <HostelsDetailsHero 
        heroHeaderText={hostelDetails.heroHeaderText}
        heroDescText={hostelDetails.heroDescText}
        bgImage={hostelDetails.bgImage}
      />

      <AboutHostel
        aboutHostel={hostelDetails.aboutHostel}
        amenities={hostelDetails.amenities}
      />

      <RoomSection 
        roomdetails={hostelDetails.rooms}
      />

      <Gallery 
        gallery={hostelDetails.gallery}
      />
    </div>
  )
}
