import React, { useEffect, useState } from 'react'
import { Link, redirect, useSearchParams, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { auth } from '../../firebase'
import { signInUser } from '../../utility/authUtility'
import { useUserContext } from '../../Context/UserContext'

//components
import QuickNav from '../../shared/components/nav/QuickNav'
import Loader from '../../shared/components/Loader'

//icons
import arrow from '../../assets/icons/right-arrow-3.png'

export const loader = async () => {
  return 0
}

export default function Login() {
  const {user} = useUserContext()
  const {register, handleSubmit, control, formState: { errors, isSubmitting }} = useForm()
  const [searchParams, setsearchParams] = useSearchParams()
  const [message, setMessage] = useState(searchParams.get('message'))
  const navigate = useNavigate()

  if (user) {
    return (
      <Navigate 
        to={'/platinumportal'}
        replace
      />
    )
  }
  
  const onSubmit = async (formData) => {
    setMessage(null)
    
    try {
      await signInUser(formData.email, formData.password)

      const redirectUrl = searchParams.get("redirect")
      if (redirectUrl) {
        //console.log('naving to redi');
        navigate(redirectUrl, {replace: true})
      } else {
        //console.log('naving to /');
        navigate('/platinumportal', {replace: true})
      }
    } catch(error) {
      //console.log(error.message);

      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setMessage("Invalid email or password")
      } else if (error.message === "Firebase: Error (auth/network-request-failed).") {
        setMessage("Unable to login. Please check your network connection.")
      } else {
        setMessage("An error occurred during login. Please try again later.")
      }
    }
  }
  

  return (
    <div className='login-page px-[5%] min-h-screen flex justify-center items-center flex-col'>
      <div>
        <h3 className='h2 mb-7 text-[24px]'>
          Log in to Platinum Hostel Portal
        </h3>

        { 
            message &&
            <div className='bg-[#efefef] py-2 px-4 mb-2 rounded flex gap-4 items-center max-w-[384px]'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill fill-red-600' height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>

                <p className='text-red-600 text-[14px]'>{message}</p>
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

          <div className='flex flex-col gap-2 mt-5'>
              <label className='text-primary text-sm'>
                  Password
              </label>
              <input 
                  type='password'
                  {...register("password", { 
                    required: "Your password is required to log into the portal",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Password must contain be at least 8 characters made up of letters, digits and special characters."
                    }
                  })} 
                  id='password'
                  placeholder='Enter your password'
                  className='text-sm border outline-primary rounded py-2 px-4 placeholder:font-light'
              />

              <div className='max-w-[380px]'>
                <p className='text-red-600 text-[12px]'>{errors.password?.message}</p>
              </div>
          </div>

          <div className='mt-5'>
              <Link>
                  <p className='text-primary text-[14px] inline-block hover:underline'>
                      Forgot password?
                  </p>
              </Link>
          </div>

          <div className='flex flex-col gap-2 mt-5'>
              <button className={`${isSubmitting ? 'btn-disabled' : 'btn-primary1 group'} text-white flex justify-center items-center gap-2`}>
                  {
                    isSubmitting 
                    ? 
                      "Logging in" 
                    : 
                      'Login'
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
  )
}
