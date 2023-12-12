import React from 'react'
import {Outlet} from 'react-router-dom'

//custom components
import Header from '../../components/Header'

export default function Main() {
  return (
    <div className=''>
        <Header />
        <Outlet />
        footer
    </div>
  )
}
