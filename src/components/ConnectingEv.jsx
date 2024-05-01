import React from 'react'
import ConnectingEvCharger from '../assets/webp/connecting_ev_charger.png'
import ConnectingEvChargerRecentActivty from '../assets/webp/connecting_ev_charger_recent_activity.png'
import StickerBackground from '../assets/webp/light_plus_stickers_bg.png'

const ConnectingEv = () => {
    return (
        <div className='mt-12 xl:mt-20  xl:pt-8'>
            <div className="container mx-auto px-3 2xl:px-0 max-w-[1364px]">
                <div className="flex flex-wrap-reverse lg:flex-wrap items-center justify-center lg:justify-between relative">
                    <span className='w-[315px] h-[315px] bg-[#6AD6FF] blur-[250px] absolute  left-[40%] z-[-1] hidden md:flex'></span>
                    <div className='w-full xl:w-[47%] flex items-center justify-center'>
                        <img width={683} height={401} className='2xl:h-[401px] 2xl:w-[683px]' src={ConnectingEvCharger} alt="" />
                    </div>
                    <div className='w-full md:w-[80%] lg:w-[44%] flex flex-col items-center justify-center text-center lg:text-start '>
                        <h2 className='font-parabolica-bold text-xl 2xl:max-w-[580px] max-w-[310px] sm:max-w-full sm:text-4xl  xl:text-[50px] text-primary !leading-[115%]'>Connecting EV Charging Station Owners and Repair Contractors</h2>
                        <p className='font-grotesk font-normal text-base md:text-xl lg:text-2xl text-secondary !leading-[115%] mt-1.5 md:mt-6'>MAIVO Streamlines the connection between EV Charging Station owners and expert repair technician contractors through a specialized network that facilitates maintenance contracting</p>
                    </div>
                </div>
            </div>
            <div className="container max-w-[1510px] px-3 mx-auto py-12 lg:py-[85px]">
                <div className="flex flex-wrap justify-between relative">
                    <span className='w-[315px] h-[315px] bg-[#6AD6FF] blur-[250px] absolute bottom-0 right-0 z-[-1] hidden md:flex'></span>
                    <div className='w-full  lg:w-[24%] xl:w-[20%] relative top-1.5 '>
                        <div className='shadow-[-10px_10px_0px_0px_#45CDFF] bg-white pl-3 pr-2 pt-3 pb-4  md:pl-[29px]  md:pr-6  md:pt-[38px]  md:pb-11  border-[#45CDFF] border-2 max-w-[200px] md:max-w-[288px] xl:absolute -top-3'>
                            <p className='font-parabolica-bold font-bold text-secondary text-sm md:text-base xl:text-lg'>Contractors go through a proprietary vetting process and join MAIVO's network of qualified contracting parties</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-[47%] xl:w-[51%] flex justify-center '>
                        <img width={728} height={439} className='w-[728px]' src={ConnectingEvChargerRecentActivty} alt="" />
                    </div>
                    <div className='w-full relative -top-4 lg:w-[24%] xl:w-[24%] flex items-end justify-end '>
                        <div className='shadow-[-10px_10px_0px_0px_#45CDFF] bg-white pl-3 pr-2 pt-3 pb-2 md:pl-[26px]  md:pr-6  md:pt-[14px]  md:pb-3  border-[#45CDFF] border-2 max-w-[200px] md:max-w-[288px] xl:absolute -bottom-3'>
                            <p className='font-parabolica-bold font-bold text-secondary text-sm md:text-base xl:text-lg'>EV Charging Station Owners and Operators add their infrastructure to MAIVO and request repair and maintenance services from qualified contractors.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-full' src={StickerBackground} alt="" />
        </div>
    )
}

export default ConnectingEv