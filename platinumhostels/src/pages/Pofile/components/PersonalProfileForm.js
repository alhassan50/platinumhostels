import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

//context
import { useUserContext } from '../../../Context/UserContext'

//icon
import arrow from '../../../assets/icons/right-arrow-3.png'

//utility
import getAcademicProfile from '../../../utility/getAcademicProfile'
import Loader from '../../../shared/components/Loader'
import updatePersonalProfile from '../../../utility/updatePersonalProfile'

/* function formatPhoneNumber(inputNumber) {
    // Remove the country code if present
    const formattedNumber = inputNumber.replace(/^\+?233/, '');

    // Remove leading zeros if any
    const finalNumber = formattedNumber.replace(/^0+/, '');

    return finalNumber;
} */

export default function PersonalProfileForm() {
    const {user, setUser,userTokenID} = useUserContext()

    const [tokenState, setTokenState] = useState('pending')
    const [isLoading, setIsLoading] = useState(false)

    
    const enableBtn = () => {
        return;
    }


    const onSubmit = async (formData) => {
        if (dirtyFields) {
            //setIsLoading(true)

            let profileInfo = {}

            Object.keys(dirtyFields).forEach(field => {
                profileInfo[field] = formData[field]
            })

            console.log(profileInfo);

            try {
                const user = await updatePersonalProfile(profileInfo, userTokenID)
                setUser(user)
                alert('success')
            } catch (error) {
                alert(error)
            }
        } else {
            console.log('no');
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields, isValid, isDirty },
        control,
        setValue,
    } = useForm({
        defaultValues: {
          fullName: `${user.displayName ? user.displayName : 'N/A'}`,
          phoneNumber: `${user.phoneNumber ? user.phoneNumber : 'N/A'}`,
          gender: 'male',
        },
        mode: 'onChange',
    })

  return (
    <div>
        <form onChange={handleSubmit(enableBtn)} onSubmit={handleSubmit(onSubmit)}>
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
                                value: /^\+233\d{9}$/,
                                message: "Your phone number should match the format +233123456789."
                                }
                            })}
                            id='tel'
                            placeholder='+233123456789'
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

            

            <div>
                <div className='mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5'>
                    <div className='mt-8'>
                        <button 
                            disabled={!(isDirty && isValid) || isLoading}
                            className={
                                `flex justify-center items-center gap-2 
                                ${(isDirty && isValid) ? ' group btn-primary1 cursor-pointer' : ' btn-disabled cursor-not-allowed'}
                                ${isLoading && ' btn-disabled cursor-not-allowed '} text-white`
                            }
                            type='submit'
                        >
                            {
                                isLoading 
                                ?
                                    'Saving Changes'
                                :
                                    'Save Changes'
                            }
                            {
                                isLoading 
                                ?
                                    <Loader />
                                :
                                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                        <img src={arrow} alt='right arrow'/>
                                    </figure>
                            }
                        </button>
                    </div>                         
                </div>
            </div>

            <hr className='my-10'/>
        </form>
    </div>
  )
}
