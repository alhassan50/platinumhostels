import React from 'react'
import { Link } from 'react-router-dom'

//images
import logo from '../../assets/brand/logo.png'
import fulllogo from '../../assets/brand/logo2.png'
import fulllogo2 from '../../assets/brand/logo3.png'

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

export function FullLogo2() {
  return (
    <Link to={'/'}>
      <figure className='w-24'>
          <img 
              src={fulllogo2} 
              alt='platinum hostel logo'
          />
      </figure>
    </Link>
  )
}