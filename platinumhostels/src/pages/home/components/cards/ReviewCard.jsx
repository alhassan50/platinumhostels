import React from 'react'

export default function ReviewCard(props) {
  return (
    <div className='card shadow rounded bg-white max-w-[350px] min-w-[350px]'>
        <div className='card-content p-5 flex flex-col items-center'>
            <p>
                "{props.reviewer.review}"
            </p>

            {/* <figure className='w-20 h-20 mt-5 overflow-hidden rounded-[50%] border-[3px] border-primary'>
                <img src={props.reviewer.image} alt={props.reviewer.name} className='w-full h-full object-cover object-center ' />
            </figure>
 */}
            <h3 className='mt-5'>
                {props.reviewer.name}, {props.reviewer.hostel}
            </h3>
        </div>
    </div>
  )
}
