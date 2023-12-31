import React from 'react'
import { Link } from 'react-router-dom'

export default function QuickNav() {
  return (
    <div>
        <div className='quicknav flex flex-wrap gap-5'>
            <div>
                <Link className='font-light text-[14px]' to={`/`}>
                    Home
                </Link>
            </div>

            <div>
                <Link className='font-light text-[14px]' to={`/about`}>
                    About
                </Link>
            </div>

            <div>
                <Link className='font-light text-[14px]' to={`/contact`}>
                    Contact
                </Link>
            </div>

            <div>
                <Link className='font-light text-[14px]' to={`/hostels/ayeduase`}>
                    Ayeduase
                </Link>
            </div>

            <div>
                <Link className='font-light text-[14px]' to={`/hostels/bomso`}>
                    Bomso
                </Link>
            </div>

            <div>
                <Link className='font-light text-[14px]' to={`/hostels/gaza`}>
                    Gaza
                </Link>
            </div>

            <div className='quick-nav-booknow'>
                <Link className='font-light text-[14px]' to={`/booknow`}>
                    Book Now
                </Link>
            </div>

            <div className='quick-nav-login'>
                <Link className='font-light text-[14px]' to={`/login`}>
                    Login
                </Link>
            </div>
        </div>
    </div>
  )
}
