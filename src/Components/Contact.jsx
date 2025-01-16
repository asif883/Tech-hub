import React from 'react';
import SectionTitle from '../SharedItems/SectionTitle';
import { BiMessageRoundedDots } from "react-icons/bi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    return (
        <div className='mt-8 lg:mt-16 mb-6 lg:mb-32'>
            <SectionTitle 
            heading="Contact Our Friendly Team" 
            subHeading="Let us know how can we help you"
            />
            <Fade duration={1000}>
                <div className='flex flex-col md:flex-row gap-4 lg:gap-8 justify-center items-center mt-3 lg:mt-8'>
                    <div className="card w-72 h-60 border border-orange-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"><BiMessageRoundedDots size={32}/></h2>
                            
                            <div className="card-actions justify-start pt-8 text-start">
                            <p className='font-semibold text-xl'>Chat to sales <br /><span className='text-sm font-medium text-gray-500'>Speak to our friendly team.</span></p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 h-60 border border-orange-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"><HiOutlineChatAlt2 size={32}/></h2>
                            
                            <div className="card-actions justify-start pt-8 text-start">
                            <p className='font-semibold text-xl'>Chat to Support <br /><span className='text-sm font-medium text-gray-500'>We're here to help you 24/7.</span></p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 h-60 border border-orange-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"><IoLocationOutline size={32}/></h2>
                            
                            <div className="card-actions justify-start pt-8 text-start">
                            <p className='font-semibold text-xl'>Visit Us <br /><span className='text-sm font-medium text-gray-500'>437/1 Paris Road,Mirpur, Dhaka.</span></p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 h-60 border border-orange-300 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"><MdOutlineCall size={32}/></h2>
                            
                            <div className="card-actions justify-start pt-8 text-start">
                            <p className='font-semibold text-xl'>Call us <br /><span className='text-sm font-medium text-gray-500'>Mon-Fri from 8am to 9pm</span></p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;