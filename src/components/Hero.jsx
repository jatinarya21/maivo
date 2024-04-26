import React, { useState } from 'react';
import { NavBarCloseMenu, NavBarOpenMenu } from './common/Icons';

const Hero = () => {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow_hidden")
    }
    else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div className='hero_bg min-h-screen relative'>
            {/* Nav Bar */}
            <div className='container mx-auto px-3 xl:px-0 max-w-[1380px] pt-3.5'>
                <div className='border rounded-full border-[#1a3242] h-[60px] md:h-[80px] w-full flex items-center justify-between '>
                    {/* company logo */}
                    <a className='font-inter font-normal text-xl md:text-4xl tracking-[15px] text-white pl-[30px] z-[3]' href="#">MAIVO</a>
                    <ul className={` ${show ? "right_0" : " "} flex items-start flex-col fixed min-h-screen max-w-[350px] w-full sm:w-[360px] bg-[#D2E2EB] -right-full top-0 gap-5 z-10 pl-5 pt-40 duration-200 ease-in-out `}>
                        <li className='text-primary font-inter text-xl md:text-[28px] font-bold'>
                            <a href="">Owners and Operators</a>
                        </li>
                        <li className='text-primary font-inter text-xl md:text-[28px] font-bold'>
                            <a href="">Services</a>
                        </li>
                        <li className='text-primary font-inter text-xl md:text-[28px] font-bold'>
                            <a href="">Contractors</a>
                        </li>
                        <li className='text-primary font-inter text-xl md:text-[28px] font-bold'>
                            <a href="">Q&A</a>
                        </li>
                        <li className='text-primary font-inter text-xl md:text-[28px] font-bold'>
                            <a href="">Contact US</a>
                        </li>
                        <p className='absolute bottom-3'>Terms and Condition</p>
                    </ul>
                    <button onClick={() => setShow(!show)} className='text-white text-3xl z-10 transition-all duration-300 '>{show ? <NavBarCloseMenu /> : <NavBarOpenMenu />}</button>
                </div>
            </div>
            {/* Hero section */}
            <div className='container mx-auto px-3 max-w-[1350px] min-h-[95vh]'>
                <div className="flex flex-wrap justify-between items-center ">
                    <div className='w-full lg:w-6/12 xl:w-5/12 '>
                        <div className='mt-12 lg:mt-20 xl:mt-20  xl:pt-16 text-center lg:text-start flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                            <h1 className='font-parabolica-bold text-3xl sm:text-4xl md:text-[56px] xl:text-[64px] !leading-[110%] text-white  '><span className='text-sky-blue'>Electrifying</span> Repair <br /> And Maintenance</h1>
                            <p className='font-grotesk text-white font-normal text-lg md:text-2xl mt-2 md:mt-[25px]  max-w-[620px] lg:max-w-full '>The go to repair and maintenance network for alternative fueling and renewable energy infrastructure</p>
                            <div className='flex items-center  flex-col lg:flex-row gap-3 md:gap-[26px] mt-5 md:mt-[45px]'>
                                <button className='bg-sky-blue relative fill-btn-hover overflow-hidden py-4 px-5 md:py-7  md:px-[30px] rounded-full font-parabolica-medium text-base sm:text-lg !leading-[73%] z-[2]'>For Owners and Operators</button>
                                <button className='border border-white text-white dark-fill-hover relative overflow-hidden py-4 px-5 md:py-7  md:px-[30px] rounded-full font-parabolica-medium text-base sm:text-lg !leading-[73%] z-[2]'>For Contractors</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero