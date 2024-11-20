import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ContactPage = () => {
    return (
        <div>
             <div className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-400">Contact Us</h1>
          <p className="mt-4 text-lg">
            Have questions? We'd love to hear from you! Get in touch with the Tech-Hub team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Send Us a Message</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm border-orange-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm border-orange-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm border-orange-300"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 px-4 rounded-md shadow hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-700">Our Contact Details</h2>
            <p className="mt-4">
              <strong>Email:</strong> support@tech-hub.com
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p className="mt-2">
              <strong>Address:</strong> 123 Tech Street, Innovation City, TX 75001
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-8">Follow Us</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="">
                <FaFacebook size={24}></FaFacebook>
              </a>
              <a href="#">
                <FaXTwitter size={24}/>
              </a>
              <a href="#" >
                <FaInstagram size={24}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ContactPage;