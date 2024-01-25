import React, {useEffect} from 'react'
import { useOutletContext } from "react-router-dom";

//components
import PaymentSectionHeader from './components/PaymentSectionHeader'
import PaymentDetails from './components/PaymentDetails'
import PaymentHistory from './components/PaymentHistory'

export default function Payment() {
  const {toggleSideBar} = useOutletContext();
  useEffect(() => {toggleSideBar(false)}, [])

  return (
    <div>
        <div>
            <PaymentSectionHeader />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-start mt-4'>
                <PaymentDetails />
                <PaymentHistory />
            </div>
        </div>
    </div>
  )
}
