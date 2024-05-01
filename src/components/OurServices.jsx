import React from 'react'
import { ServicesCard } from './common/Helper'

const OurServices = () => {
    return (
        <div id='services' className='relative'>
            <span className='w-[273px] h-[273px] bg-sky-blue absolute  blur-[250px] left-0 -top-10 z-[-1] '></span>
            <div className="container mx-auto px-3 max-w-[1320px] py-12 lg:py-20 xl:py-[162px]">
                <h2 className='font-parabolica-bold font-bold text-3xl md:text-[50px] text-primary text-center !leading-[72%]'>Our Services</h2>
                <div className='flex flex-wrap gap-7 lg:gap-0 pt-5 lg:pt-[59px] '>
                    {
                        ServicesCard.map((cards) => (
                            <div className='w-full lg:w-6/12 px-3'>
                                <div className='border-2 border-sky-blue max-w-[645px] pl-3 lg:pl-[30px] pt-[30px] pr-3 lg:pr-[22px] pb-7 md:pb-14 flex items-center gap-10  flex-col md:flex-row text-center justify-center lg:text-start hover:shadow-[-10px_10px_0px_0px_#45CDFF] duration-300 lg:max-h-[221px]'>
                                    <div className='w-[220px] flex justify-center items-center'>
                                        <img width={100} height={100} src={cards.imgsrc} alt="" />
                                    </div>
                                    <div>
                                        <h3 className='font-parabolica-medium font-medium text-2xl text-primary leading-[142%]'>{cards.heading}</h3>
                                        <p className='font-grotesk text-secondary font-light text-lg leading-[156%] mt-3.5'>{cards.para}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default OurServices