import React from 'react';

const AboutPage = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-400">About Tech-Hub</h1>
          <p className="mt-4 text-lg">
            Your one-stop destination for the latest tech gadgets and accessories.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://thelearningrooms.com/wps/wp-content/uploads/2015/02/team.jpg"
              alt="Tech-Hub Store"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-700">Our Story</h2>
            <p className="mt-4">
              At Tech-Hub, we believe in empowering people with cutting-edge technology. 
              Established in 2024, our mission is to provide quality, affordability, 
              and convenience to tech enthusiasts worldwide. Whether you’re looking for 
              the latest gadgets, gaming equipment, or smart home solutions, we’ve got you covered.
            </p>
            <h2 className="text-2xl font-semibold text-gray-700 mt-8">Our Vision</h2>
            <p className="mt-4">
              To be the leading e-commerce platform for tech products, bringing the best 
              innovations to your fingertips.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-600">
            Join us on this journey of tech innovation!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
