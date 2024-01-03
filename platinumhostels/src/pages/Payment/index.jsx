import React from 'react'

import PaymentSectionHeader from './components/PaymentSectionHeader'
import PaymentDetails from './components/PaymentDetails'
import PaymentHistory from './components/PaymentHistory'

export default function Payment() {
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
