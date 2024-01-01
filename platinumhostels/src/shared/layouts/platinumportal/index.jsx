import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'


//custom components
import PortalHeader from '../../components/PortalHeader'

export default function PlatinumPortal() {
  return (
    <div className='overflow-x-hidden'>
        <ScrollRestoration/>
        <div className='grid grid-cols-1 s-lg:grid-cols-[250px,auto] gap-4'>
            <PortalHeader />
            <div></div>
            <div className=''>
                <Outlet />
            </div>
        </div>
    </div>
  )
}