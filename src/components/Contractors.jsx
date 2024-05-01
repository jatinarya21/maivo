import React from 'react'
import ContractorsImg from '../assets/svg/contractors_img.svg'

const Contractors = () => {
  return (
    <div id='contractors' className='bg-primary-background'>
      <div className="container mx-auto px-3 lg:px-9 xl:px-3 max-w-[1390px] py-12 md:pt-32 md:py-0 md:pb-44">
        <div className="flex flex-wrap-reverse lg:flex-wrap items-center justify-center lg:justify-between">
          <div className='w-11/12 sm:w-9/12 lg:w-6/12 mt-9 lg:mt-0'>
            <div className='shadow-[-10px_10px_0px_0px_#45CDFF] bg-white  border-[#45CDFF] border-2 flex items-center justify-center py-[26px] max-w-[621px]'>
                  <img width={375} height={375} src={ContractorsImg} alt="" />
                </div>
          </div>
          <div className='w-full flex flex-col items-center text-center justify-center lg:justify-normal lg:items-start lg:text-start lg:w-5/12 '>
            <h3 className='font-parabolica-bold font-bold text-3xl md:text-[50px] text-white leading-9'>Contractors</h3>
            <p className='text-white font-parabolica-medium text-lg md:text-2xl py-4 md:py-[46px]'>Find your role in the transition to Net Zero</p>
            <p className='text-white font-grotesk text-base font-normal'>MAIVO serves as a platform for contractors to find and respond to repair <br/> jobs in the electric vehicle infrastructure space.</p>
            <div className='w-full flex justify-center lg:justify-end'>
              <button className='mt-[45px] font-parabolica-medium font-medium text-base md:text-lg px-5 py-3 md:py-5  md:px-[30px] bg-[#D9F4FF] border border-black !leading-[65%] rounded-full hover:bg-black hover:text-white hover:border-white duration-500 ease-in-out '>Sign up for free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contractors