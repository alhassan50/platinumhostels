import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

//components
import QuickNav from '../../shared/components/nav/QuickNav'

//icons
import arrow from '../../assets/icons/right-arrow-3.png'

//form action

export default function Login() {
  const {register, handleSubmit, control, formState: { errors }} = useForm()
  
  const onSubmit = (formData) => {
    console.log(formData);
    //make api posts to backend
    
  }
  

  return (
    <div className='login-page px-[5%] min-h-screen flex justify-center items-center flex-col'>
      <div>
        <h3 className='h2 mb-7 text-[24px]'>
          Log in to Platinum Hostel Portal
        </h3>

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

        </form>
        <DevTool control={control}/>
      </div>

      <div className='mt-10'>
        <QuickNav />
      </div>
    </div>
  )
}
