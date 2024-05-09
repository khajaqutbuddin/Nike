import React from 'react'
import { useState } from 'react'

import Button from '../Components/Button'
import {arrowRight} from "../assets/icons"
import {shoes, statistics} from "../constants"
import { bigShoe1 } from '../assets/images'
import ShoeCard from "../Components/ShoeCard"
const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
   <section
   id='home'
   className=' w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '
   >
     <div className=' relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p  className=' text-coral-red font-montserrat text-xl '>Our Summer Collection</p>
      <h1 className=' text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:padding-[82px] font-bold'> 
        <span className=' xl:bg-white xl:whitespace-nowrap relative z-10  pr-10'>The New Arrival </span><br />
        <span> <span className=' text-coral-red mt-3 inline-block'>Nike</span>  Shoes</span>
      </h1>
      <p className=' font-montserrat text-slate-gray text-lg mt-4 mb-14 sm:max-w-sm'>Meet the latest collection of retro running inspired shoes.The unlikely heroes of your easiest styling hack.</p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className=' flex justify-start items-start flex-wrap w-full mt-20 gap-16 '>
          {
          statistics.map((stat)=>(
            <div key={stat.label}>
              <p className=' font-palanquin text-4xl font-bold'>{stat.value}</p>
              <p className=' leading-7 font-montserrat text-gray'>{stat.label}</p>
            </div>
          ))
          }
        </div>

      </div>

      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-14 bg-primary bg-hero bg-cover bg-center '>
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className=' object-contain relative z-10 '/>
        <div className=' flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-10 max-sm:px-6'>
            {shoes.map((shoe)=>(
              <div key={shoe.id} className=' '>
                <ShoeCard  imgURL={shoe} 
                changeBigShoeImage={(shoe)=>{
                  setBigShoeImg(shoe)
                }}
                bigShoeImage={bigShoeImg}
                />
              
              </div>
            ))}
        </div>
      </div>
   </section>
  )
}

export default Hero