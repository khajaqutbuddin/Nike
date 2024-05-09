import React from 'react'
import {products} from "../constants"
import PopularProductCard from "../Components/PopularProductCard"
const PopularProducts = () => {
  return (
    <section id='products' className=' max-container max-sm:mt-12'>
      
<div className=' flex flex-col justify-start items-start gap-5   '>
        <h1 className='pb-3 text-4xl font-bold font-montserrat'>Our <span className=' text-coral-red'>Popular</span> Products </h1>
        <p className=' mt-2 pb-10 lg:max-w-lg  text-slate-gray font-montserrat'> exprience top-notch quality & style with our sought-after selections.  Discover the world of comfort, design and value.</p>
        </div>
        
      

  <div className=' flex flex-1 py-2 mt-16     grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4  '>
    {
      products.map((product)=>(
       < PopularProductCard key={product.id}  {...product}/>
      ))
    }
  </div>






    </section>
  )
}

export default PopularProducts