import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from '../assets/Banner1.jpg'
import banner3 from '../assets/Banner3.avif'
import banner2 from '../assets/b.jpg'


const Banner = () => {
    return (
        <div>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-[400px] lg:h-[650px] z-10"
      >
            <SwiperSlide>
                <img className='absolute object-cover w-full h-full' src={banner1} alt="" />

                <div className="relative top-1/3 text-white px-8 py-4 text-center rounded-md">
                    <h1 className="text-3xl lg:text-5xl font-bold">Discover the Latest Gadgets</h1>
                    <p className="mt-4 text-lg">Explore cutting-edge technology at Tech-Hub.</p>
                    <button className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white">
                        Shop Now
                    </button>
                 </div>
                
            </SwiperSlide>
            
            <SwiperSlide>
                <img className='absolute object-cover w-full h-full' src={banner2} alt="" />

                <div className="relative top-1/3 text-white px-8 py-4 text-center rounded-md">
                    <h1 className="text-3xl lg:text-5xl font-bold">Upgrade Your Smart Home</h1>
                    <p className="mt-4 text-lg">Innovative solutions to modernize your lifestyle.</p>
                    <button className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='absolute object-cover w-full h-full' src={banner3} alt="" />

                <div className="relative top-1/3 text-white px-8 py-4 text-center rounded-md">
                    <h1 className="text-3xl lg:text-5xl font-bold">Level Up Your Gaming Setup</h1>
                    <p className="mt-4 text-lg">Premium gaming accessories for ultimate performance.</p>
                    <button className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
           
            
      </Swiper>
        </div>
    );
};

export default Banner;
