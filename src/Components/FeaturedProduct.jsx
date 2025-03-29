import React from 'react';
import SectionTitle from '../SharedItems/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from '../assets/F1.webp'
import img5 from '../assets/F5.jpg'
import img3 from '../assets/F3.webp'
import img4 from '../assets/F4.webp'

import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const FeaturedProduct = () => {
    return (
        <div className='my-12 md:my-20 container mx-auto'>
            <SectionTitle
                heading='The Best-Selling Products'
                subHeading='Designed For Seamless Sound and Advanced Technology'
            ></SectionTitle>

            <div>
            <Swiper
                 slidesPerView={3}
                 spaceBetween={30}
                 freeMode={true}
                 pagination={{
                   clickable: true,
                 }}
                 modules={[FreeMode, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide className='rounded-md border  '>
                    <img src={img1} alt="" />
                    <div className='py-4 text-center'>
                       <p className='font-bold text-lg'>Sonos Ace</p>
                       <p className='font-bold text-xs' >Head phone</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-md border '>
                    <img className='h-full' src={img5} alt="" />
                    <div className='py-4 text-center'>
                       <p className='font-bold text-lg'>iTel iS7</p>
                       <p className='font-bold text-xs' >TWS</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-md border'>
                    <img src={img3} alt="" />
                    <div className='py-4 text-center'>
                       <p className='font-bold text-lg'>UG Green</p>
                       <p className='font-bold text-xs' >Tri pod</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-md border '>
                    <img src={img4} alt="" />
                    <div className='py-4 text-center'>
                       <p className='font-bold text-lg'>Apple Watch</p>
                       <p className='font-bold text-xs' >Watch</p>
                    </div>
                </SwiperSlide>              
            </Swiper>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <Link to='/product'>
                            <button className='flex items-center gap-1 p-3 hover:bg-orange-500 text-orange-500 font-semibold hover:text-white border border-orange-400 rounded-md mt-4 '><>Explore More</> <MdKeyboardDoubleArrowRight size={20}/></button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProduct;