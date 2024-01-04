import React from 'react'
import { Link } from 'react-router-dom'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

export default function PaymentSectionHeader() {
  return (
    <div className='bg-white rounded-md py-8 px-4 border'>
        <h2 className='text-primary text-left'>
            Payment
        </h2>

        <p className='mt-4'>
            Explore transparent payment details, make secure transactions, and stay up-to-date on all your financial transactions related to your Platinum Hostel booking.
        </p>

        <Link to={'/platinumportal/payment'} className=''>
            <button className='btn-primary1 flex justify-center items-center gap-2 group mt-5 text-white'>
              Pay Now
              <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                <img src={arrow} alt='right arrow'/>
              </figure>
            </button>
        </Link>
    </div>
  )
}
