import React, { useState } from 'react'
import { DarkBlueLeftEllipse, LightCyanRightEllipse, NavBarCloseMenu, NavBarOpenMenu } from './common/Icons';
import EvCharger from '../assets/webp/hero_ev_charger.png'

const Hero = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='bg-primary-background min-h-screen relative'>
            {/* left ellipse  */}
                <DarkBlueLeftEllipse />
                <LightCyanRightEllipse/>
            {/* left ellipse  */}
            {/* Nav Bar */}
            <div className='container mx-auto px-3 xl:px-0 max-w-[1380px] pt-3.5'>
                <div className='border rounded-full border-[#1a3242] h-[60px] md:h-[80px] w-full flex items-center justify-between '>
                    {/* company logo */}
                    <a className='font-inter font-normal text-xl md:text-4xl tracking-[15px] text-white pl-[30px] z-[3]' href="#">MAIVO</a>
                    <ul className={` ${show ? "right_0" : " "} flex items-start flex-col fixed min-h-screen w-[360px] bg-[#D2E2EB] -right-full top-0 gap-5 z-10 pl-5 pt-20 duration-200 ease-in-out `}>
                        <li className='text-black font-inter text-[28px] font-bold'>
                            <a href="">Owners and Operators</a>
                        </li>
                        <li className='text-black font-inter text-[28px] font-bold'>
                            <a href="">Services</a>
                        </li>
                        <li className='text-black font-inter text-[28px] font-bold'>
                            <a href="">Contractors</a>
                        </li>
                        <li className='text-black font-inter text-[28px] font-bold'>
                            <a href="">Q&A</a>
                        </li>
                        <li className='text-black font-inter text-[28px] font-bold'>
                            <a href="">Contact US</a>
                        </li>
                    </ul>
                    <button onClick={() => setShow(!show)} className='text-white text-3xl z-10 transition-all duration-300 '>{show ? <NavBarCloseMenu /> : <NavBarOpenMenu />}</button>
                </div>
            </div>
            {/* Hero section */}
            <div className='container mx-auto px-3 max-w-[1350px]'>
                <div className="flex flex-wrap justify-between items-center ">
                    <div className='w-full lg:w-5/12 '>
                        <div className='mt-12 lg:mt-20  lg:pt-16 text-center lg:text-start flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                            <h1 className='font-parabolica-bold text-4xl md:text-[64px] leading-[110%] text-white  '><span className='text-sky-blue'>Electrifying</span> Repair <br/> And Maintenance</h1>
                            <p className='font-grotesk text-white text-lg md:text-2xl mt-2 md:mt-[25px]  max-w-[620px] lg:max-w-full '>The go to repair and maintenance network for alternative fueling and renewable energy infrastructure</p>
                            <div className='flex items-center  flex-col lg:flex-row gap-3 md:gap-[26px] mt-5 md:mt-[45px]'>
                                <button className='bg-sky-blue py-4 px-5 md:py-7  md:px-[30px] rounded-full font-parabolica-medium text-base sm:text-lg !leading-[73%] z-[2]'>For Owners and Operators</button>
                                <button className='border border-white text-white py-4 px-5 md:py-7  md:px-[30px] rounded-full font-parabolica-medium text-base sm:text-lg !leading-[73%] z-[2]'>For Contractors</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-end lg:w-5/12 mt-3 lg:mt-0'>
                        <img height={700} width={600} className='lg:absolute right-0 top-[25%] 2xl:top-[20%] min-w-[320px] w-[65%] lg:w-[45%]  max-w-[600px]' src={EvCharger} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero