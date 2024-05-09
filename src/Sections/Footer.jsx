import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className=' max-container '>
      <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className=' flex flex-col items-start '>
      <a href="#home"> <img src={footerLogo} width={150} height={46} alt="" /></a>
      <p className=' text-whtie-400 sm:max-w-sm mt-6 text-base leading-7 font-montserrat'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis consectetur qui eum voluptate, maiores optio! Eos dolor iusto qui minima.
      </p>
      <div className=' flex items-center gap-5 mt-8'>
        {
          socialMedia.map((icon)=>(
            <div className=' flex justify-center items-center w-12 h-12  bg-white text-black rounded-full'>
              <img src={icon.src} alt={icon.alt} width={24} height={24} srcset="" />
            </div>
          ))
        }
      </div>
        </div>
        <div className=' flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap '>
          {footerLinks.map((section)=>(
              <div id={section.id} className=' cursor-pointer '>
                <h3 className=' font-montserrat text-2xl leading-normal font-medium'>{section.title}</h3>
                <ul className=' mt-4'> {section.links.map((links)=>(
                  <li className=' hover:text-slate-gray mt-2 text-base' >
                  <a href={links.link}>{links.name}</a>
                    </li>
                ))}</ul>
              </div>
          ))}
        </div>
      </div>
      <div className=' flex justify-between mt-24 max-sm:flex-col max-sm:items-center'>
            <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
              <img src={copyrightSign} alt="Copy Right Sign"  height={20} width={20} className=' rounded-full m-0'/>
              <p> <a href="https://full-stack-developer-fbf96.web.app/"> CopyRight. All rights Reserved.</a></p>
            </div>
            <p className=' font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
      </footer>
  )
}

export default Footer