import React from 'react'
import {Outlet} from 'react-router-dom'

//custom components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Main() {
  return (
    <div className='overflow-x-hidden'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
