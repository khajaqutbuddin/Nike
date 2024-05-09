import React from 'react'

const ServiceCard = ({...service}) => {
  return (
    <div>
          <div className=' flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[23px] shadow-3xl px-10 py-16  '>
          <img src={service.imgURL} alt="fast-truck" height={40} width={40} className=' p-2 bg-coral-red rounded-full' />
          <h3 className=' mt-8 font-semibold font-palanquin text-3xl leading-normal'>{service.label}</h3>
          <p className=' mt-4 break-words text-slate-gray'>{service.subtext}</p>
          </div>
    </div>
  )
}

export default ServiceCard