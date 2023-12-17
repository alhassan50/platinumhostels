import React from 'react'

//icons
import location from '../../../../assets/icons/location.png'
import phone from '../../../../assets/icons/phone.png'
import email from '../../../../assets/icons/email.png'

export default function ContactCard(props) {
  return (
    <div className='card'>
        <div className='card-container'>
            <div className='p-4'>
                <h3 className='capitalize'>
                    {props.name}
                </h3>
            </div>

            <hr></hr>

            <div className='p-4 capitalize'>
                <div className='flex gap-5 items-center'>
                    <figure className='w-5'>
                        <img src={location} alt='location'/>
                    </figure>
                    <p>
                        {props.contact.location}
                    </p>
                </div>

                <div className='flex gap-5 items-center mt-4'>
                    <figure className='w-5'>
                        <img src={phone} alt='phone'/>
                    </figure>
                    <p>
                        {props.contact.phone}
                    </p>
                </div>

                <div className='flex gap-5 items-center mt-4'>
                    <figure className='w-5'>
                        <img src={email} alt='email'/>
                    </figure>
                    <p>
                        {props.contact.email}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
