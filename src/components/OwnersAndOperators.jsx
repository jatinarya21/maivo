import React from 'react'
import OwnersOperatorsImg from '../assets/webp/owner_and_operator.png'

const OwnersAndOperators = () => {
  return (
      <div className='bg-[#D9F4FF] relative -left-3.5'>
          <div className="container mx-auto px-3 xl:px-0 max-w-[1378px]">
              <div className='flex flex-wrap justify-center lg:justify-between pt-12 md:pt-[72px] pb-12 md:pb-[72px] xl:pb-[136px] items-center'>
                  <div className='w-full lg:w-7/12 text-center flex flex-col items-center justify-center lg:items-start lg:text-start pl-1.5'>
                      <h2 className='font-parabolica-bold font-bold text-2xl sm:text-3xl md:text-5xl xl:text-[50px] leading-9 text-primary'>Owners and Operators</h2>
                      <p className='font-parabolica-medium font-medium text-base sm:text-2xl md:text-3xl xl:text-[40px] text-primary leading-[195%] xl:leading-[275%] sm:py-2 xl:py-0 '>A solution for your charging station repairs</p>
                        <p className='font-grotesk text-sm sm:text-xl xl:text-2xl font-light max-w-[550px] xl:max-w-[730px]'>MAIVO simplifies the complex ecosystem of EV Charging Station Repair and Maintenance procurement, ensuring your investment is always ready to serve the growing market of electric vehicle owners.</p>
                      <button className='mt-[45px] font-parabolica-medium font-medium text-base md:text-lg px-5 py-3 md:py-5  md:px-[30px] bg-white border border-black !leading-[65%] rounded-full hover:bg-black hover:text-white duration-500 ease-in-out'>Sign up for free</button>
                  </div>
                  <div className='w-full lg:w-5/12 flex justify-center mt-5 lg:mt-0'>
                      <img width={530} height={508} src={OwnersOperatorsImg} alt="" />
                  </div>
              </div>
            </div>
    </div>
  )
}

export default OwnersAndOperators