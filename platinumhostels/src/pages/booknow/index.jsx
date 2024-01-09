import {React, useContext, useEffect, useState} from 'react'
import { useLoaderData, ScrollRestoration, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useBookNowContext } from '../../Context/BookNowContext'

//components
import QuickNav from '../../shared/components/nav/QuickNav'
import PrevBtn from './components/PrevBtn'

//icons
import arrow from '../../assets/icons/right-arrow-3.png'
import NextBtn from './components/NextBtn'


//loader
export const loader = ({request}) => {
    const hostelLocation = new URL(request.url).searchParams.get('hostelLocation')
    const roomType = new URL(request.url).searchParams.get('roomType')
    const message = new URL(request.url).searchParams.get('message')

    return {hostelLocation, roomType, message}
}

export default function BookNow() {
  const navigate = useNavigate()
  const {hostelLocation, roomType, message} = useLoaderData()
  const [isReadyToRedirect, setIsReadyToRedirect] = useState(false)
  const [formStep, setFormStep] = useState(0)

  const {
    defaultValues,
    bookNowFormData, 
    handleFormData, 
    isRoomBookDataReady, 
    makeBookNowFormDataReady
  } = useBookNowContext()

  const {register, handleSubmit, formState: {errors, isValid}, trigger, control, getValues} = useForm({    
    defaultValues: {
        ...bookNowFormData, 
        hostelLocation: hostelLocation ? hostelLocation.toLowerCase() : bookNowFormData.hostelLocation,
        roomType: roomType ? roomType.toLowerCase() : bookNowFormData.roomType,
    }
  })

  const increaseFormStep = () => {
    const handleValidationOnNext = (fieldNamesList) => {
        // Trigger validation for the specified field
        fieldNamesList.map(fieldName => (
            trigger(fieldName)
        ))
      }; 

    if (formStep === 0) {
        handleValidationOnNext(["fullName", "phoneNumber", "gender"])
    } else if (formStep === 1) {
        handleValidationOnNext(["course", "level"])        
    } else if (formStep === 2) {
        handleValidationOnNext(["email", "password", "confirmPassword"])        
    } /* else if (formStep === 3) {
        handleValidationOnNext(["hostelLocation", "roomType"])
    } */

    return setFormStep (prevFormStepValue => {
        if (isValid) {
            return prevFormStepValue + 1
        } else {
            return prevFormStepValue
        }
    })
  }

  const decreaseFormStep = () => {
    return setFormStep (prevFormStepValue => (
        (prevFormStepValue - 1)
    ))
  }

  const readyToRedirect = () => {
    setIsReadyToRedirect(true)
  }


  //handles form submission
  const onSubmit = (formData) => {
    handleFormData(formData)
    readyToRedirect()
  }

  //makes booking form data ready for processing 
  useEffect(() => {
    /* console.log("use - ", bookNowFormData); */
    if ((bookNowFormData !== defaultValues) & isReadyToRedirect) {
        makeBookNowFormDataReady()
        navigate(`/booknow/rooms?hostelLocation=${bookNowFormData.hostelLocation}&roomType=${bookNowFormData.roomType}&gender=${bookNowFormData.gender}`)
    }
  }, [bookNowFormData, defaultValues, makeBookNowFormDataReady, navigate, isReadyToRedirect])

  useEffect(() => {
    // Add event listener to intercept page refresh
    const handleBeforeUnload = (e) => {
        const confirmationMessage = 'Form booking process will restart. Are you sure you want to leave?';
        e.returnValue = confirmationMessage; // Standard for most browsers
        return confirmationMessage; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
        // Cleanup: remove event listener when component unmounts
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };

  }, [bookNowFormData, defaultValues])



  return (
    <div className='booknow-page px-[5%] min-h-screen'>
      <ScrollRestoration />
      <section className=''>
        <div className='section-body mt-0 max-w-[400px] mx-auto'>

          { 
            message &&
            <div className='bg-secondary py-2 px-4 mb-2 rounded flex gap-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill fill-red-600' height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>

                <h3 className='text-red-600 '>{message}</h3>
            </div>
          }

          <h3 className='h2 mb-7 text-[24px]'>
            Secure Your Spot - Platinum Hostel Booking
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {
                formStep === 0 &&
                <>
                    <div className='personal-info'>
                    <h3>
                        Tell Us About Yourself (1/4)
                    </h3>

                    <div className='flex flex-col gap-2 mt-5'>
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

                        <div className='max-w-[380px]'>
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

                        <div className='max-w-[380px]'>
                            <p className='text-red-600 text-[12px]'>{errors.phoneNumber?.message}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 mt-5'>
                        <label className='text-primary text-sm'>
                            Gender/Sex
                        </label>
                        <select 
                            {...register("gender", {
                                validate: (genderValue) => (genderValue !== 'none' || 
                                "Please select your gender. It helps us tailor room options to your preferences.")
                            },)}
                            id='gender'
                            className='text-[14px] border outline-primary rounded py-2 px-4'
                        >
                            <option value={'none'}></option>
                            <option value={'female'}>Female</option>
                            <option value={'male'}>Male</option>
                        </select>

                        <div className='max-w-[380px]'>
                            <p className='text-red-600 text-[12px]'>{errors.gender?.message}</p>
                        </div>
                    </div>
                    </div>
                </>
            }


            {
                formStep === 1 &&
                <>
                    {/* <hr className='my-10'/> */}
                    <div className='student-info'>
                    <h3>
                        Share Your Academic Details (2/4)
                    </h3>

                    <div className='flex flex-col gap-2 mt-5'>
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

                    <div className='flex flex-col gap-2 mt-5'>
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
                            className='text-[14px] border outline-primary rounded py-2 px-4'
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
                </>
            }


            {
                formStep === 2 &&
                <>
                    {/* <hr className='my-10'/> */}
                    <div className='account-info'>
                        <h3>
                            Create Your Account (3/4)
                        </h3>

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
                                /* onChange={() => trigger('email')} */
                            />
                            <div className='max-w-[380px]'>
                                <p className='text-red-600 text-[12px]'>{errors.email?.message}</p>
                            </div>
                        </div>

                        <div 
                            className='flex flex-col gap-2 mt-5'
                            title='At least 8 characters(alphabets, digits, special characters)'
                        >
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
                                placeholder='At least 8 characters (alphabets, digits, special characters)'
                                className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                            />

                            <div className='max-w-[380px]'>
                                <p className='text-red-600 text-[12px]'>{errors.password?.message}</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 mt-5'>
                            <label className='text-primary text-sm'>
                                Confirm Password
                            </label>
                            <input 
                                type='password'
                                {...register("confirmPassword", {
                                    validate: (confirmPasswordField) => (confirmPasswordField === getValues("password")||
                                    "Passwords do not match")
                                })}
                                id='confirmPassword'
                                placeholder='Confirm your password'
                                className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                            />
                            <div className='max-w-[380px]'>
                                <p className='text-red-600 text-[12px]'>{errors.confirmPassword?.message}</p>
                            </div>
                        </div>
                    </div>
                </>
            }


            {
                formStep === 3 &&
                <div>
                    {/* <hr className='my-10'/> */}
                    <div className='hostel-info'>
                    <h3>
                        Choose Your Room Details (4/4)
                    </h3>
                    <div className='flex flex-col gap-2 mt-5'>
                        <label className='text-primary text-sm'>
                            Hostel
                        </label>
                        <select 
                            id='hostelLocation'
                            {...register("hostelLocation", {
                                validate: (hostelLocationValue) => (hostelLocationValue !== 'none' || 
                                "Please select your hostel of preference")
                            },)}
                            className='text-[14px] border outline-primary rounded py-2 px-4'
                        >
                            <option value={'none'}></option>
                            <option value={'ayeduase'}>Platinum Hostels, Ayeduase</option>
                            <option value={'bomso'}>Platinum Hostels, Bomso</option>
                            <option value={'gaza'}>Platinum Hostels, Gaza</option>
                        </select>
                        <div className='max-w-[380px]'>
                            <p className='text-red-600 text-[12px]'>{errors.hostelLocation?.message}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 mt-5'>
                        <label className='text-primary text-sm'>
                            Room Type
                        </label>
                        <select 
                            {...register("roomType", {
                                validate: (roomTypeValue) => (roomTypeValue !== 'none' || 
                                "Please select your room of preference")
                            },)}
                            id='roomType'
                            className='text-[14px] border outline-primary rounded py-2 px-4'
                        >
                            <option value={'none'}></option>
                            <option value={'single'}>Single Room</option>
                            <option value={'double'}>Double Room</option>
                            <option value={'shared'}>Shared Room</option>
                        </select>
                        <div className='max-w-[380px]'>
                            <p className='text-red-600 text-[12px]'>{errors.roomType?.message}</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row gap-4 mt-10'>
                        <PrevBtn decreaseFormStep={decreaseFormStep} />

                        <button 
                            className='btn-primary1 text-white flex justify-center items-center gap-2 group'
                            type='submit'
                        >
                            {isRoomBookDataReady ? 'Confirm Booking' : 'Choose Room'}
                            <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                                <img src={arrow} alt='right arrow'/>
                            </figure>
                        </button>
                    </div>
                </div>
            }

            {
                (formStep >= 0 & formStep <= 2) ?
                <div className='mt-10 flex flex-col md:flex-row gap-4'>
                    {   
                        (formStep !== 0) &&
                        <PrevBtn decreaseFormStep={decreaseFormStep} />
                    }
                    <NextBtn 
                        formStep={formStep}
                        increaseFormStep={increaseFormStep} 
                    />
                </div>
                :
                null
            }
          </form>
          <DevTool control={control} />
        </div>
        <div className='mt-10 flex justify-center'>
          <QuickNav />
        </div>
      </section>
    </div>
  )
}
