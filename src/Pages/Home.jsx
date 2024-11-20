import React from 'react';
import Banner from '../Components/Banner';
import FeaturedProduct from '../Components/FeaturedProduct';
import Testimonials from '../Components/Testimonials';
import Faqs from '../Components/Faqs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FeaturedProduct/>
            <Testimonials/>
            <Faqs/>
        </div>
    );
};

export default Home;