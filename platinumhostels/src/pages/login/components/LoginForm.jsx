import React from 'react'
import { Form, Link } from 'react-router-dom'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

export default function LoginForm() {
  return (
    <Form method='post'>
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
                Password
            </label>
            <input 
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
            />
        </div>

        <div className='mt-5'>
            <Link>
                <p className='capitalize text-primary text-[14px] inline-block hover:underline'>
                    forgot password?
                </p>
            </Link>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <button className='btn-primary1 text-white flex justify-center items-center gap-2 group'>
                Login
                <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                    <img src={arrow} alt='right arrow'/>
                </figure>
            </button>
        </div>
    </Form>
  )
}
