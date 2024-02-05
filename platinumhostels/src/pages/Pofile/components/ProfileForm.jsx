import React, { useMemo, useState } from 'react'
import {Await, defer} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

//context
import { useUserContext } from '../../../Context/UserContext'

//icon
import arrow from '../../../assets/icons/right-arrow-3.png'

//utility
import getAcademicProfile from '../../../utility/getAcademicProfile'
import AcademicProfileLoader from './AcademicProfileLoader'
import TryAgain from '../../Rooms/components/TryAgain'
import Loader from '../../../shared/components/Loader'

function formatPhoneNumber(inputNumber) {
    // Remove the country code if present
    const formattedNumber = inputNumber.replace(/^\+?233/, '');

    // Remove leading zeros if any
    const finalNumber = formattedNumber.replace(/^0+/, '');

    return finalNumber;
}

//load
const loadAcademicProfile = (userTokenID) => {
    const academicProfilePromise = getAcademicProfile(userTokenID)
    return defer({academicProfile: academicProfilePromise})
}

export default function ProfileForm() {
    const {user, userTokenID} = useUserContext()

    const [refreshComponent, setRefreshComponent] = useState(false)
    const [tokenState, setTokenState] = useState('pending')
    const [initialRender, setInitialRender] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const academicProfilePromise = useMemo(() => {
        if (userTokenID) {
            setTokenState('valid')
            return loadAcademicProfile(userTokenID)
        } else {
            if (!initialRender) {
                setTokenState(null)
            }
        }
        setInitialRender(false)
    }, [userTokenID, refreshComponent])

    
    const enableBtn = () => {
        return;
    }


    
    const onSubmit = (formData) => {
        if (dirtyFields) {
            setIsLoading(true)

            let profileInfo = {}

            Object.keys(dirtyFields).forEach(field => {
                profileInfo[field] = formData[field]
            })

            console.log(profileInfo);

            setTimeout(() => {
                setIsLoading(false)
            }, 5000);
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

            <hr className='my-10'/>

            <div>
                <h3>
                    My Academic Profile
                </h3>
                
                <div className=''>
                    {
                        tokenState === 'valid' ?
                            <React.Suspense
                                fallback={
                                    <AcademicProfileLoader />
                                }
                            >
                                <Await
                                    resolve={academicProfilePromise.data.academicProfile}
                                    errorElement={
                                        <TryAgain 
                                            errorMessage={"Something went wrong."} 
                                            setRefreshComponent={setRefreshComponent}
                                        />
                                    }
                                >
                                    {
                                        (academicProfile) => {
                                            /* setValue('course', academicProfile.course, { shouldTouch: true })
                                            setValue('level', academicProfile.level, { shouldTouch: true }) */
                                            return (
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
                                                                defaultValue={academicProfile.course}
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
                                                            defaultValue={academicProfile.level}
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
                                            )
                                        }
                                    }
                                </Await>
                            </React.Suspense>
                        :
                        tokenState === 'pending' ?
                            <AcademicProfileLoader />
                        :   
                            <div className='mt-4 flex justify-start items-center'>
                                <p>Couldn't load your academic profile.</p>
                            </div>
                    }
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
                            disabled={!(isDirty && isValid) || isLoading}
                            className={
                                `flex justify-center items-center gap-2 
                                ${(isDirty && isValid) ? ' group btn-primary1 cursor-pointer' : ' btn-disabled cursor-not-allowed'}
                                ${isLoading && ' btnisfckingdis btn-disabled cursor-not-allowed text-lg'} text-white`
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
                        {/* <button 
                            disabled={!(isDirty && isValid)}
                            className={
                                `flex justify-center items-center gap-2 
                                ${(isDirty && isValid) ? ' group btn-primary1 ' : ' btn-disabled cursor-not-allowed'} text-white`
                            }
                            type='submit'
                        >
                            Save Changes
                            <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                <img src={arrow} alt='right arrow'/>
                            </figure>
                        </button> */}
                    </div>                         
                </div>

            </div>
        </form>
        {/* <DevTool control={control} /> */}
    </div>
  )
}
