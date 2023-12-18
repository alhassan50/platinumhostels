import React from 'react'
import { Form } from 'react-router-dom'

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'


export default function ContactForm() {
  return (
    <Form>
        <div className='flex flex-col gap-2'>
            <label className='text-primary text-sm'>
                Full Name
            </label>
            <input 
                type='text'
                name='name'
                id='name'
                placeholder='John Doe'
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
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
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
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
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
            />
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <label className='text-primary text-sm'>
                Message
            </label>
            <textarea
                rows={5}
                cols={100}
                className='border outline-primary rounded w-full py-2 px-4'
            ></textarea>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            {/* <button className='btn-primary1 text-white'>
                Sumit Message
            </button> */}
            <button className='btn-primary1 text-white flex justify-center items-center gap-2 group'>
                Sumit Message
                <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                    <img src={arrow} alt='right arrow'/>
                </figure>
            </button>
        </div>
    </Form>
  )
}
