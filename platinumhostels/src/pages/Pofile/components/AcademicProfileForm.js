import React, { useMemo, useState } from 'react'
import {Await, defer} from 'react-router-dom'
import { useForm } from 'react-hook-form'

//context
import { useUserContext } from '../../../Context/UserContext'

//icon
import arrow from '../../../assets/icons/right-arrow-3.png'

//utility
import getAcademicProfile from '../../../utility/getAcademicProfile'
import AcademicProfileLoader from './AcademicProfileLoader'
import TryAgain from '../../Rooms/components/TryAgain'
import Loader from '../../../shared/components/Loader'
import updateAcademicProfile from '../../../utility/updateAcademicProfile'

//load
const loadAcademicProfile = (userTokenID) => {
    const academicProfilePromise = getAcademicProfile(userTokenID)
    return defer({academicProfile: academicProfilePromise})
}

export default function AcademicProfileForm() {
    const {userTokenID} = useUserContext()

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


    
    const onSubmit = async (formData) => {
        if (dirtyFields) {
            //setIsLoading(true)

            let profileInfo = {}

            Object.keys(dirtyFields).forEach(field => {
                profileInfo[field] = formData[field]
            })

            console.log(profileInfo);

            try {
                await updateAcademicProfile(profileInfo, userTokenID)
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
    } = useForm({
        defaultValues: {
          gender: 'male'
        },
        mode: 'onChange',
    })

  return (
    <div>
        <form onChange={handleSubmit(enableBtn)} onSubmit={handleSubmit(onSubmit)}>
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
        </form>
    </div>
  )
}
