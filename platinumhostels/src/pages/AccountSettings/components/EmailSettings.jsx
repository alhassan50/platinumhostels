import {React, useState} from 'react'
import { Form } from 'react-router-dom'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

export default function EmailSettings() {
    const [isDisabled, setBtnEnability] = useState(true) 

    const enableBtn = () => {
      setBtnEnability(false)
      console.log(isDisabled);
    }

  return (
    <Form onChange={() => (enableBtn())}>
        <div>
            <h3>
                Change Your Email Address
            </h3>
            
            <div className='mt-5 max-w-lg flex flex-col gap-2 sm:col-span-2'>
                <label className='text-primary text-sm'>
                    Email Address
                </label>
                <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='abc@gmail.com'
                    defaultValue='abc@gmail.com'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />
            </div>

            <div className='mt-5'>
                <button 
                    className={`${isDisabled ? 'btn-disabled' : 'group btn-primary1'} text-white flex justify-center items-center gap-2`}
                    onClick={()=> {
                        console.log('save changes');
                    }}
                >
                    Change Email
                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                        <img src={arrow} alt='right arrow'/>
                    </figure>
                </button>
            </div>
        </div>
    </Form>
  )
}
