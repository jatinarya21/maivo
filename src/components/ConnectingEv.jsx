import React from 'react'
import ConnectingEvCharger from '../assets/webp/connecting_ev_charger.png'

const ConnectingEv = () => {
    return (
        <div className='mt-20 pt-8'>
            <div className="container mx-auto px-3 2xl:px-0 max-w-[1364px]">
                <div className="flex flex-wrap items-center justify-between">
                    <div className='w-[47%]'>
                        <img width={683} height={401} className='2xl:h-[401px] 2xl:w-[683px]' src={ConnectingEvCharger} alt="" />
                    </div>
                    <div className='w-[45%]'>
                        <h2 className='font-parabolica-bold text-[50px] text-primary leading-[115%]'>Connecting EV Charging Station Owners and Repair Contractors</h2>
                        <p className='font-grotesk font-normal text-2xl text-secondary leading-[115%] mt-6'>MAIVO Streamlines the connection between EV Charging Station owners and expert repair technician contractors through a specialized network that facilitates maintenance contracting</p>
                    </div>
                </div>
            </div>
            <div className="container max-w-[1510px] px-3 mx-auto 2xl:px-0 pb-20">
                <div className="flex flex-wrap">
                    <div className='w-2/12'>
                        <div className='shadow-[-10px_10px_0px_0px_#45CDFF] pl-[29px] pr-6 pt-[38px] pb-5 border border-[#45CDFF] border-2'>
                            <p className='font-parabolica-bold font-bold text-secondary text-lg'>Contractors go through a proprietary vetting process and join MAIVO's network of qualified contracting parties</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectingEv