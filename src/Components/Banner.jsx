import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import banner1 from '../assets/Banner1.jpg'
import banner3 from '../assets/Banner3.avif'
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <div>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[400px] lg:h-[750px]"
        >
            <SwiperSlide>
                <img className='w-full h-full' src={banner1} alt="" />
                <div className='text-gray-400 absolute top-1/3 pl-8 lg:pl-16'>
                    <p className='max-w-lg text-xl lg:text-2xl font-semibold'>Revolutionize Your Space with High-Fidelity sound and smart technology that adapts to your life style. </p>
                    <Link to='/product'>
                        <button className='flex items-center gap-1 p-3 hover:bg-gray-300 hover:text-gray-700 border border-gray-200 rounded-md mt-4 '><>Explore All Products</> <MdKeyboardDoubleArrowRight /></button>
                    </Link>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <img className='w-full h-full' src={banner3} alt="" />
                <div className='text-gray-400 absolute top-1/3 pl-8 lg:pl-16'>
                    <p className='max-w-lg text-xl lg:text-2xl font-semibold'>Revolutionize Your Space with High-Fidelity sound and smart technology that adapts to your life style. </p>
                    <Link to='/product'>
                        <button className='flex items-center gap-1 p-3 hover:bg-gray-300 hover:text-gray-700 border border-gray-200 rounded-md mt-6 '><>Explore All Products</> <MdKeyboardDoubleArrowRight size={20}/></button>
                    </Link>
                </div>
            </SwiperSlide>
           
            
      </Swiper>
        </div>
    );
};

export default Banner;