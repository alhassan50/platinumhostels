import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

//context
import { useUserContext } from '../../../Context/UserContext'

//icon
import arrow from '../../../assets/icons/right-arrow-3.png'

export default function ProfileForm() {
    const {user} = useUserContext()

    const {register, handleSubmit, trigger, formState: {errors, dirtyFields, isValid, isDirty}, control} = useForm(
        {
            defaultValues:{
                fullName: `${user.displayName ? user.displayName : 'John Doe'}`,
                phoneNumber: `${user.phoneNumber ? user.phoneNumber : '0123456789'}`,
                gender: 'male',
                course: 'BSc Physics',
                level: '300',
               /*  privacyProfilePic: false,  
                privacyFullName: true,  
                privacyPhoneNumber: true,  
                privacyEmail: false,  
                privacyCourse: false,  
                privacyLevel: false,  */
            },
            mode: "onChange"
        })


  const enableBtn = () => {
    return;
  }

  const onSubmit = (formData) => {
    console.log(dirtyFields);
  }

  return (
    <div>
        <form /* onChange={handleSubmit(enableBtn)} */ onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3>
                    My Personal Profile
                </h3>
                
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-2 sm:col-span-2'>
                        <label className='text-primary text-sm'>
                            Full Name
                        </label>
                        <input 
                            type='text'
                            {...register('fullName', {required: "Your full name is required"})}
                            id='fullName'
                            placeholder='John Doe'
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                        />

                        <div className='max-w-[300px]'>
                            <p className='text-red-600 text-[12px]'>{errors.fullName?.message}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-primary text-sm'>
                            Phone Number
                        </label>
                        <input 
                            type='tel'
                            {...register('phoneNumber', { 
                                required: "Your phone number is required to log into the portal",
                                pattern: {
                                value: /^\d{10}$/,
                                message: "Please enter a 10-digit number with no spaces or special characters."
                                }
                            })}
                            id='tel'
                            placeholder='0123456789'
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                        />

                        <div className='max-w-[300px]'>
                            <p className='text-red-600 text-[12px]'>{errors.phoneNumber?.message}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-primary text-sm'>
                            Gender/Sex
                        </label>
                        <select 
                            name='gender'
                            id='gender'
                            disabled
                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 cursor-not-allowed'
                        >
                            <option value={'none'}></option>
                            <option value={'female'}>Female</option>
                            <option value={'male'}>Male</option>
                        </select>
                    </div>
                </div>
            </div>

            <hr className='my-10'/>

            <div>
                <h3>
                    My Academic Profile
                </h3>
                
                <div className='mt-5 student-info grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-primary text-sm'>
                            Course/Program
                        </label>
                        <input 
                            type='text'
                            {...register('course', {required: "Your course is required"})}
                            id='course'
                            placeholder='BSc Physics'
                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                        />

                        <div className='max-w-[300px]'>
                            <p className='text-red-600 text-[12px]'>{errors.course?.message}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-primary text-sm'>
                            Level
                        </label>
                        <select 
                            {...register('level', {
                                validate: (levelValue) => (
                                    levelValue !== 'none' || 
                                    "Oops! You forgot to select a level"
                                )
                            })}
                            id='level'
                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 cursor-pointer'
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

                        <div className='max-w-[300px]'>
                            <p className='text-red-600 text-[12px]'>{errors.level?.message}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <hr className='my-10'/> */}

            <div>
                {/* <h3>
                    Privacy Preferences
                </h3>
                <p className='mt-2 text-primary text-sm'>
                    Customize what information you share with your roommates. Your comfort and privacy matter.
                </p> */}
                
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5'>
                    {/* <div className='flex items-center gap-2'>
                        <input 
                            type='checkbox'
                            {...register("privacyProfilePic")}
                            id='privacyProfilePic'                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                        />
                        
                        <label className='text-primary text-sm'>
                            Profile Picture
                        </label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input 
                            type='checkbox'
                            {...register("privacyFullName")}
                            id='privacyFullName'                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light cursor-not-allowed'
                            disabled
                        />
                        
                        <label className='text-primary text-sm'>
                            Full Name
                        </label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input 
                            type='checkbox'
                            {...register("privacyPhoneNumber")}
                            id='privacyPhoneNumber'                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light cursor-not-allowed'
                            disabled
                        />
                        
                        <label className='text-primary text-sm'>
                            Phone Number
                        </label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input 
                            type='checkbox'
                            {...register("privacyEmail")}
                            id='privacyEmail'                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                            
                        />
                        
                        <label className='text-primary text-sm'>
                            Email Address
                        </label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input 
                            type='checkbox'
                            {...register("privacyCourse")}
                            id='privacyCourse'                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                        />
                        
                        <label className='text-primary text-sm'>
                            Course/Program
                        </label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input 
                            type='checkbox'
                            {...register("privacyLevel")}
                            id='privacyLevel'                            
                            className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                        />
                        
                        <label className='text-primary text-sm'>
                            Level
                        </label>
                    </div> */}

                    <div className='mt-8'>
                        <button 
                            className={
                                `flex justify-center items-center gap-2 
                                ${(isDirty && isValid) ? ' group btn-primary1 ' : ' btn-disabled '} text-white`
                            }
                            type='submit'
                        >
                            Save Changes
                            <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                <img src={arrow} alt='right arrow'/>
                            </figure>
                        </button>
                    </div>                         
                </div>

            </div>
        </form>
        <DevTool control={control} />
    </div>
  )
}
