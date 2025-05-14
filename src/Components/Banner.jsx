import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../Css/swiper.css'
import '../Css/Font.css'

import banner1 from '../assets/b-1.png'
import banner3 from '../assets/b-3.png'
import banner2 from '../assets/b-2.png'

const bannerData = [
    {
      title: "Explore Latest Music Gadgets",
      description: "Explore cutting-edge technology at Tech-Hub.",
      img: banner1
    },
    {
      title: "Upgrade Your Smart Life",
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0); 
  }, []);

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
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >

     {bannerData.map((slide, index) => (
        <SwiperSlide style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/015/452/755/small/abstract-background-horizontal-wave-lines-design-and-pattern-on-black-background-and-texture-free-vector.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} key={index} className="relative">
          <motion.div 
           key={activeIndex}
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 1, x: 10 }}
           exit={{ opacity: 0, x: -50 }}
           transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col-reverse md:flex-row-reverse items-center justify-center h-full px-0 md:px-12">

            <motion.div
               key={activeIndex}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 10 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center text-center text-white w-1/2"
            >
              <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold font-barlow">{slide.title}</h1>
              <p className="mt-1 lg:mt-4 text-gray-200 text-sm lg:text-lg lg:max-w-xl">{slide.description}</p>
              <button className="mt-3 lg:mt-6 px-3 lg:px-6 py-1 lg:py-2 bg-[#FF6600] hover:bg-orange-600 rounded text-white">
                Shop Now
              </button>
            </motion.div>
            <img className="w-1/2" src={slide?.img} alt={slide?.title} />
          </motion.div>
          
        </SwiperSlide>
      ))}
          
           
            
      </Swiper>
        </div>
    );
};

export default Banner;
