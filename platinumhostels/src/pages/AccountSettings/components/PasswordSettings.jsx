import {React, useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'

//icons
import arrow from '../../../assets/icons/right-arrow-3.png'
import updatePassword from '../../../utility/updatePassword'
import { useUserContext } from '../../../Context/UserContext'
import Loader from '../../../shared/components/Loader'

export default function PasswordSettings() {
    const {user, setUser, userTokenID} = useUserContext()

    const [isDisabled, setIsDisabled] = useState(true) 
    const [isLoading, setIsLoading] = useState(false)

    const {register, handleSubmit, formState: {errors, dirtyFields, isDirty, isValid}, reset, getValues} = useForm({
        defaultValues: {
            password: "",
            newPassword: "",
            confirmNewPassword: "",
        }
    })

    const enableBtn = () => {
      setIsDisabled(false)
      console.log(isDisabled);
    }

    useEffect(() => {
        if (isDirty || isLoading) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [isDirty, isLoading])

    const onSubmit = async(formData) => {
      console.log(formData);
      try {
        setIsLoading(true)
        
        const newUser = await updatePassword(
            user.email, 
            formData.password, 
            formData.newPassword, 
            formData.confirmNewPassword,
            userTokenID
        )

        setUser(newUser)
        alert('Password updated successfully')
        reset()
      } catch (error) {
        alert('Unable to update your password')
      } finally {
        setIsLoading(false)
      }
    }

    /* const watchNewPassword = watch("newPassword") */
    
  return (
    <form onChange={() => (enableBtn())} onSubmit={handleSubmit(onSubmit)}>
        <div>
            <h3>
                Change Your Password
            </h3>
            
            <div className='mt-5 max-w-lg flex flex-col gap-2 sm:col-span-2'>
                <label className='text-primary text-sm'>
                    Current Password
                </label>
                <input 
                    type='password'
                    {...register("password", { 
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message: "Password must contain be at least 8 characters made up of letters, digits and special characters."
                        }
                      })}
                    id='password'
                    placeholder='At least 8 characters including letter, digits and special characters'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                    /* onBlur={() => {
                        trigger("password")
                    }} */
                />

                <div className='max-w-[380px]'>
                    <p className='text-red-600 text-[12px]'>{errors.password?.message}</p>
                </div>
            </div>

            <div className='mt-5 max-w-lg flex flex-col gap-2 sm:col-span-2'>
                <label className='text-primary text-sm'>
                    New Password
                </label>
                <input 
                    type='password'
                    {...register("newPassword", { 
                        required: "Oops! You forgot to enter your new password",
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message: "Password must contain be at least 8 characters made up of letters, digits and special characters."
                        },
                        /* validate: (newPasswordField) => (newPasswordField === getValues("confirmNewPassword") ||
                        "Your new passwords do not match") */
                      })}
                    id='newPassword'
                    placeholder='At least 8 characters including letter, digits and special characters'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />

                <div className='max-w-[380px]'>
                    <p className='text-red-600 text-[12px]'>{errors.newPassword?.message}</p>
                </div>
            </div>

            <div className='mt-5 max-w-lg flex flex-col gap-2 sm:col-span-2'>
                <label className='text-primary text-sm'>
                    Confirm New Password
                </label>
                <input 
                    type='password'
                    {...register("confirmNewPassword", {
                        validate: (confirmNewPasswordField) => (confirmNewPasswordField === getValues('newPassword') ||
                        "Your new passwords do not match")
                    })}
                    id='confirmNewPassword'
                    placeholder='Confirm your new password'
                    className='text-[14px] border outline-primary rounded py-2 px-4 placeholder:font-light'
                />

                <div className='max-w-[380px]'>
                    <p className='text-red-600 text-[12px]'>{errors.confirmNewPassword?.message}</p>
                </div>
            </div>

            <div className='mt-5'>
                <button 
                    disabled={isDisabled}
                    className={`${isDisabled ? ' btn-disabled ' : ' group btn-primary1 '} 
                    text-white flex justify-center items-center gap-2`}
                    type='submit'
                >
                    {
                        isLoading 
                        ?
                            'Change Password'
                        :
                            'Changing Password'
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
    </form>
  )
}
