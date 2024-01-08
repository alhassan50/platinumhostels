import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'

//context
import { BookNowContextProvider } from '../../../Context/BookNowContext'

export function BooNow() {
  return (
    <BookNowContextProvider>
        <div className=''>
            <ScrollRestoration/>
            <Outlet />
        </div>
    </BookNowContextProvider>
  )
}
