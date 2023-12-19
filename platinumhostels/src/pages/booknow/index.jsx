import React from 'react'
import { Link, Form } from 'react-router-dom'

//components
import QuickNav from '../../shared/components/nav/QuickNav'

//icons
import arrow from '../../assets/icons/right-arrow-3.png'

//form action
export const Action = ({request}) => {
  console.log('haaa');
  return request
}

export default function BookNow() {
  return (
    <div className='booknow-page px-[5%] min-h-screen'>
      <section>
        <div className='section-body mt-0 max-w-[400px] mx-auto'>
          <h3 className='h2 mb-7 text-[24px]'>
            Secure Your Spot - Platinum Hostel Booking
          </h3>

          <Form method='post'>
            <div className='flex flex-col gap-2'>
                <label className='text-primary text-sm'>
                    Full Name
                </label>
                <input 
                    type='text'
                    name='name'
                    id='name'
                    placeholder='John Doe'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Phone Number
                </label>
                <input 
                    type='tel'
                    name='tel'
                    id='tel'
                    placeholder='0123456789'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Email Address
                </label>
                <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='abc@gmail.com'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Course/Program
                </label>
                <input 
                    type='text'
                    name='course'
                    id='course'
                    placeholder='BSc Physics'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Level
                </label>
                <select 
                    name='level'
                    id='level'
                    className='text-[14px] border outline-primary rounded py-2 px-4'
                >
                    <option value={'none'}></option>
                    <option value={'100'}>Level 100</option>
                    <option value={'200'}>Level 200</option>
                    <option value={'300'}>Level 300</option>
                    <option value={'400'}>Level 400</option>
                    <option value={'500'}>Level 500</option>
                    <option value={'600'}>Level 600</option>
                    <option value={'700'}>Level 700</option>
                </select>
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Password
                </label>
                <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='At least 8 characters, including numbers and symbols'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Hostel
                </label>
                <select 
                    id='hostel'
                    name='hostel'
                    className='text-[14px] border outline-primary rounded py-2 px-4'
                >
                    <option value={'none'}></option>
                    <option value={'ayeduase'}>Platinum Hostels, Ayeduase</option>
                    <option value={'bomso'}>Platinum Hostels, Bomso</option>
                    <option value={'gaza'}>Platinum Hostels, Gaza</option>
                </select>
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Gender/Sex
                </label>
                <select 
                    name='gender'
                    id='gender'
                    className='text-[14px] border outline-primary rounded py-2 px-4'
                >
                    <option value={'none'}></option>
                    <option value={'female'}>Female</option>
                    <option value={'male'}>Male</option>
                </select>
            </div>

            <div className='flex flex-col gap-2 mt-5'>
                <label className='text-primary text-sm'>
                    Room Type
                </label>
                <select 
                    name='roomType'
                    id='roomType'
                    className='text-[14px] border outline-primary rounded py-2 px-4'
                >
                    <option value={'none'}></option>
                    <option value={'single'}>Single Room</option>
                    <option value={'double'}>Double Room</option>
                    <option value={'shared'}>Shared Room</option>
                </select>
            </div>

            <div className='flex flex-col gap-2 mt-10'>
                <button className='btn-primary1 text-white flex justify-center items-center gap-2 group'>
                    Choose Room
                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                        <img src={arrow} alt='right arrow'/>
                    </figure>
                </button>
            </div>
          </Form>
        </div>
        <div className='mt-10 flex justify-center'>
          <QuickNav />
        </div>
      </section>
    </div>
  )
}
