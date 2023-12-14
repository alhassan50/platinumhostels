import React from 'react'
import { Link } from 'react-router-dom'

//images
import logo from '../../assets/brand/logo.png'
import fulllogo from '../../assets/brand/logo2.png'

export default function Logo() {
  return (
    <Link to={'/'}>
      <figure className='w-24'>
          <img 
              src={logo} 
              alt='platinum hostel logo'
          />
      </figure>
    </Link>
  )
}

export function FullLogo() {
  return (
    <Link to={'/'}>
      <figure className='w-24'>
          <img 
              src={fulllogo} 
              alt='platinum hostel logo'
          />
      </figure>
    </Link>
  )
}