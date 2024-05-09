import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className=' flex flex-col max-sm:w-full w-full'>
        <img src={imgURL} alt="" className=' w-[280px] h-[280px]' />
       <div className=' flex justify-start gap-2.5 mt-8'>
        <img src={star} alt="rating" height={24} width={24} /> 
        <p className=' text-xl font-palanquin leading-normal text-slate-gray'>(4.5)</p>
       </div>
       <h4 className=' mt-3 text-2xl font-bold font-palanquin font-semibold'>{name}</h4>
        <h5 className=' text-coral-red font-bold leading-normal'>{price}</h5>
    </div>
  )
}

export default PopularProductCard