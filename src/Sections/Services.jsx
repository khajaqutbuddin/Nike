import React from 'react'
import { services } from "../constants"
import ServiceCard from '../Components/ServiceCard'



const Services = () => {
  return (
    <section className=' flex flex-wrap max-container justify-center gap-9'>
     {
      services.map((service)=>(
      < ServiceCard key={service.id} {...service} />
      ))
     }
    </section>
  )
}

export default Services