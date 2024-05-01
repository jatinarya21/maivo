import React, { useState } from 'react'
import { Location, Mail, Phone } from './common/Icons'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear the error for the current input field
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            // Form is valid, you can perform further actions here
            setFormData({ name: '', email: '', company: '' , message:''});
            setErrors({}); // Clear all errors
        } else {
            setErrors(errors);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.name) {
            errors.name = 'Name is required';
        }
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.message) {
            errors.message = 'Message is required';
        }
        return errors;
    };


    return (
        <div id='contact' className=' my-12 md:my-[80px] lg:my-[150px] relative'>
            <span className='w-[315px] h-[315px] bg-[#6AD6FF] blur-[250px] absolute top-0 left-0 z-[-1] hidden md:flex'></span>
            <div className='container mx-auto px-3  max-w-[1320px]  '>
                <div className='shadow-[-5px_5px_0px_0px_#45CDFF] border bg-[#F6FCFF] border-sky-blue py-[60px] lg:py-[80px] px-3 md:px-[60px] relative z-[1]'>
                    <div className='flex flex-wrap-reverse justify-between lg:flex-wrap'>
                        <div className='w-full lg:w-4/12 xl:w-4/12'>
                            <h2 className='font-parabolica-bold font-bold text-5xl hidden lg:inline-flex'>Contact Us</h2>
                            <div className='flex flex-col mt-[40px]'>
                                {/* Mail */}
                                <div className='py-3 md:py-[26.5px] pr-1  gap-4 items-center inline-flex'>
                                    <Mail />
                                    <a className='font-grotesk text-xl md:text-2xl font-medium' href="mailto:example@gmail.com">example@gmail.com</a>
                                </div>
                                {/* phone */}
                                <div className='py-3 md:py-[26.5px] pr-1 inline-flex gap-4 items-center'>
                                    <Phone />
                                    <a className='font-grotesk text-xl md:text-2xl font-medium' href="tel:+123 456 789">+123 456 789</a>
                                </div>
                                {/* Location */}
                                <div className='py-3 md:py-[26.5px] pr-1 inline-flex gap-4 items-center'>
                                    <Location />
                                    <a className='font-grotesk text-xl md:text-2xl font-medium' href="ma">123 Street 456 House</a>
                                </div>
                            </div>
                        </div>
                        {/* FOrm */}
                        <div className='w-full lg:w-7/12 xl:w-8/12'>
                            <h2 className='font-parabolica-bold font-bold text-3xl sm:text-5xl text-center mb-10 lg:hidden'>Contact Us</h2>
                            <form onSubmit={handleSubmit} className="max-w-[694px] mx-auto ">
                                <div className="mb-[30px]">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Name'
                                        className={`w-full pl-[21px]  border font-grotesk font-regular text-lg placeholder:text-lg py-4 text-black placeholder:text-black placeholder:font-grotesk ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                                </div>
                                <div className="mb-[30px] flex flex-col md:flex-row items-center gap-[30px]">
                                    <div className='w-full relative'>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='Email'
                                            className={`w-full pl-[21px]  border font-grotesk font-regular text-lg placeholder:text-lg py-4 text-black placeholder:text-black placeholder:font-grotesk  ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        />
                                        {errors.email && <p className="text-red-500 mt-1 absolute">{errors.email}</p>}
                                    </div>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        placeholder='Company'
                                        onChange={handleChange}
                                        className={`w-full pl-[21px]  border font-grotesk font-regular text-lg placeholder:text-lg py-4 text-black placeholder:text-black placeholder:font-grotesk  ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                </div>
                                <div className="mb-[30px]">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder='Message'
                                        className={`w-full pl-[21px]  border font-grotesk font-regular text-lg placeholder:text-lg py-4 text-black placeholder:text-black placeholder:font-grotesk  resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4  md:py-[22.5px] bg-sky-blue text-black font-parabolica-medium font-medium rounded-full  fill-btn-hover relative z-[1] overflow-hidden  focus:outline-none "
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs