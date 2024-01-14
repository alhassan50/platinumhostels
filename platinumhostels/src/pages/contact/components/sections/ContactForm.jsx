import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles


//icons
import arrow from '../../../../assets/icons/right-arrow-3.png'


export default function ContactForm() {
    const {register, handleSubmit, formState: {errors, isSubmitting}, reset } = useForm({
        defaultValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: ""
        }
    })
    const [resetForm, setResetForm] = useState(false)

    const onSubmit = async (contactFormData) => {
        /* console.log(contactFormData); */
    
        try {
            /* console.log("start fetching..."); */
            let responseRAW = await fetch("http://localhost:8888/.netlify/functions/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactFormData),
            })
            /* console.log("done fetching..."); */
    
            if (!responseRAW.ok) {
                throw new Error(`HTTP error! Status: ${responseRAW.status}.`);
            }
            
            let responseJSON = await responseRAW.json();
    
            if (responseJSON.error) {
                throw new Error("Error: " + responseJSON.error);
            }
            
            setResetForm(true)
    
            alert(responseJSON.message);
        } catch (error) {
            /* console.error(error); */
            alert('Message not sent. Pls try again. ' + error.message);
        }
    };

    useEffect(() => {
        if (resetForm) {
            reset()
        }
    }, [resetForm, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-2'>
            <label className='text-primary text-sm'>
                Full Name &nbsp;
                <span 
                    className='text-red-600'
                    title='this is a required field'
                >
                    *
                </span>
            </label>
            <input 
                type='text'
                {...register("fullName", {
                    required: "Your name is required to identify the sender of the message",
                    maxLength: {
                        value: 200,
                        message: "Pls your full name cannot exceed 200 characters"
                    }
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
                Email Address &nbsp;
                <span 
                    className='text-red-600'
                    title='this is a required field'
                >
                    *
                </span>
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
                Message Subject
            </label>
            <input 
                type='text'
                {...register("subject", {
                    maxLength: {
                        value: 100,
                        message: "Message's subject cannot exceed 100 characters"
                    }
                })}
                id='subject'
                placeholder='Enter the subject of your message'
                className='border outline-primary rounded py-2 px-4 placeholder:font-light'
            />

            <div className='max-w-[400px]'>
                <p className='text-red-600 text-[12px]'>{errors.subject?.message}</p>
            </div>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <label className='text-primary text-sm'>
                Message &nbsp;
                <span 
                    className='text-red-600'
                    title='this is a required field'
                >
                    *
                </span>
            </label>
            <textarea
                {...register("message", {
                    required: "Oops! You forgot your message.",
                    maxLength: {
                        value: 500,
                        message: "Message cannot exceed 500 characters"
                    }
                })}
                id='message'
                placeholder='Your message goes here...'
                rows={5}
                cols={100}
                className='border outline-primary rounded w-full py-2 px-4 placeholder:font-light'
            ></textarea>

            <div className='max-w-[400px]'>
                <p className='text-red-600 text-[12px]'>{errors.message?.message}</p>
            </div>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
            <button className={`${isSubmitting ? 'btn-disabled' : 'btn-primary1 group'} text-white flex justify-center items-center gap-2`}>
                {isSubmitting ? "Submitting" : 'Sumit Message'}

                {
                    isSubmitting ? 

                    <FontAwesomeIcon icon={faSpinner}  spinPulse />                 

                    :

                    <figure className='arrow w-5 group-hover:translate-x-1 transition-all duration-150'>
                        <img src={arrow} alt='right arrow'/>
                    </figure>
                }

            </button>
        </div>
    </form>
  )
}
