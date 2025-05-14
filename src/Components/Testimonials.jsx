import SectionTitle from "../SharedItems/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa"

const reviews = [
    
        {
            "_id": "643010e0f5a7e52ce1e8fa65",
            "name": "Jane Doe",
            "details": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            "rating": 3
        },
        {
            "_id": "643010f9f5a7e52ce1e8fa66",
            "name": "John Doe",
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
            "rating": 4.5
        },
        {
            "_id": "6430110af5a7e52ce1e8fa67",
            "name": "MJ Doe",
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
            "rating": 5
        },
        {
            "_id": "64301123f5a7e52ce1e8fa68",
            "name": "Sarah Smith",
            "details": "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
            "rating": 4
        },
]

const Testimonials = () => {
    return (
        <div className="mt-16 lg:mt-28">
            <SectionTitle heading='Testimonials' subHeading='What our client says'/>

            <div className="max-w-4xl lg:max-w-6xl mx-auto">
            <Swiper navigation={true} 
                    modules={[Navigation]} className="mySwiper">

                        {
                            reviews.map((review , idx) =>
                                <SwiperSlide key={idx}>
                                       <div className="my-8 lg:my-10 mx-12 lg:mx-24 flex flex-col items-center text-center
                                       ">
                                       <Rating
                                           style={{ maxWidth: 180 }}
                                           value={review.rating}
                                           readOnly
                                       />
                                            <p className="text-5xl mt-5"><FaQuoteLeft></FaQuoteLeft></p>
                                           <p className="my-6">{review.details}</p>
                                           <p className="text-3xl font-semibold text-orange-400">{review.name}</p>
                                       </div>
                                </SwiperSlide>)
                        }
   
                </Swiper>
            </div>
        </div>
        
    );
};

export default Testimonials;