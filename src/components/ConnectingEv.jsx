import React from 'react'
import ConnectingEvCharger from '../assets/webp/connecting_ev_charger.png'

const ConnectingEv = () => {
    return (
        <div className='mt-12 xl:mt-20  xl:pt-8'>
            <div className="container mx-auto px-3 2xl:px-0 max-w-[1364px]">
                <div className="flex flex-wrap-reverse lg:flex-wrap items-center justify-center lg:justify-between">
                    <div className='w-full lg:w-[47%] flex items-center justify-center'>
                        <img width={683} height={401} className='2xl:h-[401px] 2xl:w-[683px]' src={ConnectingEvCharger} alt="" />
                    </div>
                    <div className='w-full md:w-[80%] lg:w-[44%] flex flex-col items-center justify-center text-center lg:text-start '>
                        <h2 className='font-parabolica-bold text-xl 2xl:max-w-[580px] max-w-[310px] sm:max-w-full sm:text-4xl  xl:text-[50px] text-primary !leading-[115%]'>Connecting EV Charging Station Owners and Repair Contractors</h2>
                        <p className='font-grotesk font-normal text-base md:text-xl lg:text-2xl text-secondary !leading-[115%] mt-1.5 md:mt-6'>MAIVO Streamlines the connection between EV Charging Station owners and expert repair technician contractors through a specialized network that facilitates maintenance contracting</p>
                    </div>
                </div>
            </div>
            {/* <div className="container max-w-[1510px] px-3 mx-auto 2xl:px-0 pb-20">
                <div className="flex flex-wrap">
                    <div className='w-2/12'>
                        <div className='shadow-[-10px_10px_0px_0px_#45CDFF] pl-[29px] pr-6 pt-[38px] pb-5 border border-[#45CDFF] border-2'>
                            <p className='font-parabolica-bold font-bold text-secondary text-lg'>Contractors go through a proprietary vetting process and join MAIVO's network of qualified contracting parties</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ConnectingEv