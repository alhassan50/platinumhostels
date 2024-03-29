import React, { useEffect, useState } from 'react'
import { Link, redirect, useSearchParams, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

//components
import QuickNav from '../../shared/components/nav/QuickNav'
import Loader from '../../shared/components/Loader'

//icons
import arrow from '../../assets/icons/right-arrow-3.png'
import arrow2 from '../../assets/icons/right-arrow.png'

//utility
import { resetPassword } from '../../utility/authUtility'

export default function ResetPassword() {
    const [searchParams, setsearchParams] = useSearchParams()
    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState(null) 
    const [successMessage, setSuccessMessage] = useState(null) 
    //const [isLoading, setIsLoading] = useState(false) 
    
    const {register, handleSubmit, control, reset, formState: { errors, isSubmitting }} = useForm({
        defaultValues: {
            email: searchParams.get('email') ? searchParams.get('email') : ''
        }
    })


    const onSubmit = async (formData) => {
        //setIsLoading(true)
        setSuccessMessage( null )
        setErrorMessage( null )
        try {
            const successMessage = await resetPassword(formData.email)
            setErrorMessage(null)
            setSuccessMessage(successMessage)
            reset()
        } catch (error) {
            setSuccessMessage(null)
            setErrorMessage(error.message)
        } /* finally {
            isLoading(false)
        } */
    }

  return (
    <div className='relative'>
        <div className='absolute top-[2%] left-[2%]'>
            <Link
                to={`/login${searchParams.get("redirect") ? `?redirect=${searchParams.get("redirect")}` : ''}`}
            > 
                <div className='flex gap-2 items-center group'>
                    <figure className='w-4 rotate-180 group-hover:-translate-x-1 transition-all duration-150'>
                        <img src={arrow2} alt='arrow'/>
                    </figure>
                    <h3>
                        Log In
                    </h3>
                </div>
            </Link>
        </div>

        <div className='reset-pwd-page px-[5%] min-h-screen flex justify-center items-center flex-col'>
            <div className='s-sm:min-w-[385px]'>
                <h3 className='h2 mb-7 text-[24px]'>
                    Reset Your Password 
                </h3>

                { 
                    errorMessage &&
                    <div className='bg-[#efefef] py-2 px-4 mb-2 rounded flex gap-4 items-center max-w-[384px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill fill-red-600' height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>

                        <p className='text-red-600 text-[14px]'>{errorMessage}</p>
                    </div>
                }

                { 
                    successMessage &&
                    <div className='bg-[#efefef] py-2 px-4 mb-2 rounded flex gap-4 items-center max-w-[384px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-green-600' height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>

                        <p className='text-green-600 text-[14px]'>{successMessage}</p>
                    </div>
                }

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2 mt-5'>
                    <label className='text-primary text-sm'>
                        Email Address
                    </label>
                    <input 
                        type='email'
                        {...register("email", { 
                            required: "Your email address is required to reset your password.",
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

                <div className='flex flex-col gap-2 mt-5'>
                    <button className={`${isSubmitting ? 'btn-disabled' : 'btn-primary1 group'} text-white flex justify-center items-center gap-2`}>
                        {
                            isSubmitting 
                            ? 
                            "Sending reset link" 
                            : 
                            'Send reset link'
                        }
                        {
                            isSubmitting ? 
                            <Loader />  
                            :
                            <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                <img src={arrow} alt='right arrow'/>
                            </figure>                    
                        }
                    </button>
                </div>

                <div className='mt-5'>
                    <p className=' text-black text-[14px] inline-block'>
                        Don't have an account? 
                    </p>
                    
                    &nbsp;

                    <Link to={'/bookNow'}>
                        <p className='text-primary text-[14px] inline-block hover:underline'>
                            Book room now!
                        </p>
                    </Link>
                </div>

                </form>
                <DevTool control={control}/>
            </div>

        <div className='mt-10'>
            <QuickNav />
        </div>
        </div>
    </div>
  )
}
