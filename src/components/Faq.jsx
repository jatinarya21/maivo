import React, { useState } from 'react';
import { FaqItems } from './common/Helper';
import { CloseAccordion, OpenAccordion } from './common/Icons';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div id='faq' className='pb-6 md:pb-24 relative'>
            <span className='w-[315px] h-[315px] bg-[#6AD6FF] blur-[250px] absolute top-0 right-0 z-[-1] hidden md:flex'></span>
            <div className="container mx-auto px-10 xl:px-3  max-w-[1320px] mt-[70px]">
                <h2 className='text-primary text-2xl md:text-4xl md:text-[50px] text-center font-bold md:!leading-[72%]'>Frequently Asked Questions</h2>
                <div className='flex flex-col sm:flex-row items-center gap-4 justify-center mt-5 md:mt-[50px]'>
                    <button className='font-parabolica-medium font-medium text-base md:text-lg bg-sky-blue z-[2] py-4 md:py-3 px-[30px] rounded-full relative fill-btn-hover overflow-hidden leading-[70%]'>Owners Operations</button>
                    <button className='font-parabolica-medium dark-fill lg:ml-6 relative overflow-hidden z-[2] font-medium text-base md:text-lg border-black border py-4 md:py-3 px-[30px] rounded-full leading-[72%]'>Contractors</button>
                </div>
                <div className="mt-9 md:mt-[72px]">
                    {FaqItems.map((item, index) => (
                        <div key={index} className={`${index === FaqItems.length - 1 ? '' : 'border-b border-b-[#959595]'
                            }  rounded`}>
                            <div
                                className={`flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out pt-5 md:pt-[39px] ${activeIndex === index ? 'pb-3' : 'pb-5 md:pb-[35px]'
                                    }`}
                                onClick={() => handleClick(index)}
                            >
                                <span className="text-base md:text-[22px] font-medium font-parabolica-medium pl-3 lg:pl-[30px] pr-2   text-primary">{item.title}</span>
                                <div>
                                    {activeIndex === index ? <div><OpenAccordion /></div> : <div><CloseAccordion /></div>}
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}
                            >
                                <div className="">
                                    <p className='max-w-[850px] font-parabolica-regular pb-[30px] pl-3 lg:pl-[30px] font-normal text-sm md:text-lg text-black'>{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
