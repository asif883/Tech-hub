import React from 'react';
import SectionTitle from '../SharedItems/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from '../assets/b-1.png'
import img5 from '../assets/F5-removebg-preview.png'
import img3 from '../assets/tri pod.png'
import img4 from '../assets/b-2.png'

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
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                0: {
                slidesPerView: 1,
                },
                640: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper px-2 md:px-4 lg:px-6"
            >
            <SwiperSlide className="rounded-lg border">
                <img src={img1} alt="Sonos Ace" className="w-full h-80 object-cover" />
                <div className="py-4 text-center">
                <p className="font-bold text-lg">Sonos Ace</p>
                <p className="font-semibold text-sm text-gray-500">Head phone</p>
                </div>
            </SwiperSlide>

            <SwiperSlide className="rounded-lg border">
                <img src={img5} alt="iTel iS7" className="w-full h-80 object-cover" />
                <div className="py-4 text-center">
                <p className="font-bold text-lg">iTel iS7</p>
                <p className="font-semibold text-sm text-gray-500">TWS</p>
                </div>
            </SwiperSlide>

            <SwiperSlide className="rounded-lg border ">
                <img src={img3} alt="UG Green" className="w-full h-80 object-cover" />
                <div className="py-4 text-center">
                <p className="font-bold text-lg">UG Green</p>
                <p className="font-semibold text-sm text-gray-500">Tri pod</p>
                </div>
            </SwiperSlide>

            <SwiperSlide className="rounded-lg border ">
                <img src={img4} alt="Apple Watch" className="w-full h-80 object-cover" />
                <div className="py-4 text-center">
                <p className="font-bold text-lg">Apple Watch</p>
                <p className="font-semibold text-sm text-gray-500">Watch</p>
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