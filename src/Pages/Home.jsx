import React from 'react';
import Banner from '../Components/Banner';
import FeaturedProduct from '../Components/FeaturedProduct';
import Testimonials from '../Components/Testimonials';
import Faqs from '../Components/Faqs';
import Contact from '../Components/Contact';
import Categories from '../Components/Categories';


const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='container mx-auto'>
                <Categories/>
                <FeaturedProduct/>
                <Faqs/>
                <Contact/>
                <Testimonials/>
            </div>
            
        </div>
    );
};

export default Home;