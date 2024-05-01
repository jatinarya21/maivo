import React from 'react'
import { FooterInstagram, FooterMail } from './common/Icons'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-primary pt-12 md:pt-[96px] '>
      <div className='footer_bg border-b border-b-sky-blue'>
        <div className="container mx-auto px-3 pb-[82px] ">
          <div className='text-center flex flex-col items-center'>
            <a className='font-inter font-normal text-xl md:text-5xl tracking-[23px] text-white pl-[30px] z-[3] !leading-[71%]' href="#">MAIVO</a>
            <p className='text-white text-xl mt-6 !leading-[120%] font-parabolica-regular font-normal '>Term and Conditions</p>
            {/* social Links  */}
            <div className='flex items-center mt-6 gap-3'>
              <a className='duration-500 hover:-translate-y-1' href="https://www.instagram.com/"><FooterInstagram /></a>
              <a className='duration-500 hover:-translate-y-1' href="mailto:example@gmail.com"><FooterMail /></a>
            </div>
            <div className='flex items-center flex-wrap justify-center gap-5 md:gap-[30px] lg:gap-[80px] mt-7 md:mt-[60px]'>
              <a className='text-white font-grotesk text-base md:text-lg font-medium !leading-[73%] relative after:absolute after:h-[2px] after:w-0 after:left-0 after:bg-white after:-bottom-2 after:hover:w-full  after:duration-300' href="#">Login for Contractors</a>
              <a className='text-white font-grotesk text-base md:text-lg font-medium !leading-[73%] relative after:absolute after:h-[2px] after:w-0 after:left-0 after:bg-white after:-bottom-2 after:hover:w-full  after:duration-300' href="#">Login for Station Owners</a>
              <a className='text-white font-grotesk text-base md:text-lg font-medium !leading-[73%] relative after:absolute after:h-[2px] after:w-0 after:left-0 after:bg-white after:-bottom-2 after:hover:w-full  after:duration-300' href="#">Login for Administrators</a>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center py-[32px]'>
        <p className='text-white font-parabolica-regular font-normal text-sm sm:text-base md:text-xl !leading-[120%]'><span className='text-secondary'>©</span> {currentYear} MAIVO Repair Network LLC, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer