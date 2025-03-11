import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../Css/swiper.css'
import banner1 from '../assets/Banner1.jpg'
import banner3 from '../assets/Banner3.avif'
import banner2 from '../assets/b.jpg'

const bannerData = [
    {
      title: "Discover the Latest Gadgets",
      description: "Explore cutting-edge technology at Tech-Hub.",
      img: banner1
    },
    {
      title: "Upgrade Your Smart Home",
      description: "Innovative solutions to modernize your lifestyle.",
      img: banner2
    },
    {
      title: "Level Up Your Gaming Setup",
      description: "Premium gaming accessories for ultimate performance.",
      img: banner3
    }
  ];

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

     {bannerData.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black bg-opacity-50 text-white">
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
            >
              <h1 className="text-2xl lg:text-5xl font-semibold font-barlow">{slide.title}</h1>
              <p className="mt-4 text-gray-200 text-lg lg:max-w-xl">{slide.description}</p>
              <button className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white">
                Shop Now
              </button>
            </div>
          </div>
          <img className="object-cover w-full h-full" src={slide.img} alt={slide.title} />
        </SwiperSlide>
      ))}
          
           
            
      </Swiper>
        </div>
    );
};

export default Banner;
