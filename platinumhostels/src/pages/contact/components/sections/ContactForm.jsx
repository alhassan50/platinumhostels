import React from 'react'
import { useForm } from 'react-hook-form'

//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'


export default function ContactForm() {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (contactFormData) => {
        console.log(contactFormData);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2'>
            <label className='text-primary text-sm'>
                Full Name
            </label>
            <input 
                type='text'
                {...register("fullName", {
                    required: "Your name is required to identify the sender of the message",

                })}
                id='fullName'
                placeholder='John Doe'
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
            />

            <div className='max-w-[400px]'>
                <p className='text-red-600 text-[12px]'>{errors.fullName?.message}</p>
            </div>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <label className='text-primary text-sm'>
                Phone Number
            </label>
            <input 
                type='tel'
                {...register('phoneNumber', { 
                    required: "Your phone number is required so we can contact you.",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Please enter a 10-digit number with no spaces or special characters."
                    }
                })}
                id='tel'
                placeholder='0123456789'
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
            />
            
            <div className='max-w-[400px]'>
                <p className='text-red-600 text-[12px]'>{errors.phoneNumber?.message}</p>
            </div>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <label className='text-primary text-sm'>
                Email Address
            </label>
            <input 
                type='email'
                {...register("email", { 
                    required: "Your email is needed in order to send your message.",
                    pattern: {
                        value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                        message: "Oops! Pls make sure you email address matches the format 'abc@example.domain'"
                    }
                })}
                id='email'
                placeholder='abc@gmail.com'
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
            />

            <div className='max-w-[400px]'>
                <p className='text-red-600 text-[12px]'>{errors.email?.message}</p>
            </div>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <label className='text-primary text-sm'>
                Message
            </label>
            <textarea
                {...register("message", {
                    required: "Oops! You forgot your message."
                })}
                id='message'
                placeholder='Your message goes here...'
                rows={5}
                cols={100}
                className='border outline-primary rounded w-full py-2 px-4'
            ></textarea>

            <div className='max-w-[400px]'>
                <p className='text-red-600 text-[12px]'>{errors.message?.message}</p>
            </div>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <button className='btn-primary1 text-white flex justify-center items-center gap-2 group'>
                Sumit Message
                <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                    <img src={arrow} alt='right arrow'/>
                </figure>
            </button>
        </div>
    </form>
  )
}
