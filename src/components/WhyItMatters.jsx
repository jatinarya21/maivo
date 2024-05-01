import React from 'react'
import { WhyMattersCards } from './common/Helper'

const WhyItMatters = () => {
    return (
        <div className='bg-light-blue py-12 lg:py-20 xl:py-[100px]'>
            <div className='container mx-auto px-3 xl:px-0 max-w-[1322px]'>
                <h2 className='text-center font-parabolica-bold font-bold text-3xl md:text-[50px] !leading-[72%]'>Why It Matters</h2>
                <div className='flex flex-wrap justify-between pt-9 md:pt-[59px] gap-y-8 md:gap-y-14 lg:gap-y-20'>
                    {
                        WhyMattersCards.map((cards) => (
                            <div className='w-full sm:w-6/12 lg:w-4/12 xl:w-[24%] flex items-center justify-center'>
                                <div className='border-2 border-sky-blue shadow-[5px_5px_0px_0px_#45CDFF] pt-5 pl-5 pr-[19px] max-w-[308px] h-[429px] bg-white group'>
                                    <div className='border border-sky-blue shadow-[3px_3px_0px_0px_#45CDFF] max-w-[269px] h-[173px] bg-[#DAF5FF] flex justify-center py-1.5 group-hover:shadow-inherit duration-200 overflow-hidden group-hover:scale-105'>
                                        <img src={cards.imgsrc} alt="" />
                                    </div>
                                    <div className='mt-[18px]'>
                                        <h3 className='font-parabolica-medium font-medium text-2xl leading-[142%] mb-5'>{cards.heading}</h3>
                                        <p className='font-grotesk font-normal text-lg w-[270px]'>{cards.para}</p>
                                    </div>
                                </div>
                            </div>
                        )

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default WhyItMatters