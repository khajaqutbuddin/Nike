import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' className=' flex flex-1  justify-between items-center max-lg:flex-col gap-10 w-full max-container' >
      <div className=' flex flex-1 flex-col'>
        <h1 className=' capitalize lg:max-w-lg text-4xl font-semibold font-palanquin'> We Provide <span className=' text-coral-red'> Super Quality</span> Shoes</h1>
        <p className=' info-text lg:max-w-lg'> 
        encapsulates our commitment to excellence in footwear. Our store specializes in delivering shoes that not only boast superior craftsmanship and durable materials but also offer unparalleled comfort and style. Each pair from our collection is meticulously designed to meet the highest standards of quality, ensuring that our customers enjoy both luxury and longevity in their footwear choices. Whether you're searching for the perfect shoes for an athletic endeavor, a formal event, or casual day-to-day wear,
        </p>
        <p className=' mt-6 info-text lg:max-w-lg'>
          our promise is to provide you with footwear that enhances your lifestyle and stands the test of time.
        </p> 
        <div className=' mt-11'>
        <Button label="View Details"/>
        </div>
      </div>
      <div className=' flex flex-1 justify-center items-center '>
        <img src={shoe8} alt="shoe8" height={570} width={522} className=' object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality