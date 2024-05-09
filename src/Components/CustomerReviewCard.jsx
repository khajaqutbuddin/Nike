import React from 'react'
import { star } from '../assets/icons'


const CustomerReviewCard = ({...review}) => {
  return (
          <div className='flex-1  bg-purple-250 justify-evenly items-center text-center flex-col sm:w-[350px] sm:min-w-[350px]  w-full rounded-[23px] shadow-3xl px-10 py-16  '>
          <div className='flex justify-center items-center'>
          <img src={review.imgURL} alt="CustomerReview" height={70} width={70} className=' rounded-full' /> 
            </div>
            <div className=' mt-2 flex justify-center items-center gap-2'>
          <img src={star} className="   text-orange-300 h-4 "></img> <span> ({review.rating})</span>
            </div>
          <h3 className=' mt-4 font-semibold font-palanquin text-3xl leading-normal'>{review.customerName}</h3>
          <p className=' mt-4 break-words info-text text-slate-gray'>{review.feedback}</p>
          </div>
   
  )
}

export default CustomerReviewCard