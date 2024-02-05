import {React, useState} from 'react'
import { useForm } from 'react-hook-form'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'

//context
import { useUserContext } from '../../../Context/UserContext'

export default function EmailSettings() {
    const {user} = useUserContext()

    const {register, handleSubmit, formState: {errors, dirtyFields, isDirty, isValid}} = useForm({
        defaultValues: {
            email: user.email
        }
    })

    const enableBtn = (event) => {
        return;
    }
    
    const onSubmit = (formData) => {
        if (dirtyFields.email) {
            console.log(formData.email);
        }
    }

  return (
    <form onChange={handleSubmit(enableBtn)} onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("email", { 
                        required: "Your email address is required to verify your account.",
                        pattern: {
                          value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                          message: "Oops! Pls make sure you email address matches the format 'abc@example.domain'"
                        }
                      })}
                    id='email'
                    placeholder='abc@gmail.com'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />

                <div className='max-w-[380px]'>
                    <p className='text-red-600 text-[12px]'>{errors.email?.message}</p>
                </div>
            </div>

            <div className='mt-5'>
                <button 
                    disabled={!(isDirty && isValid)}
                    className={`${(isDirty && isValid) ? ' group btn-primary1 ' : ' btn-disabled cursor-not-allowed '} text-white flex justify-center items-center gap-2`}
                    type='submit'
                >
                    Change Email
                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                        <img src={arrow} alt='right arrow'/>
                    </figure>
                </button>
            </div>
        </div>
    </form>
  )
}
