import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'

export default function FAQsContainer() {
  return (
    <div className='max-w-[800px] mx-auto py-24 px-[5%]'>
        <ScrollRestoration/>
        <Outlet />
    </div>
  )
}
