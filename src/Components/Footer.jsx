
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import useAuth from '../Hooks/useAuth';


const Footer = () => {
    const { isDarkMode } = useAuth()
    return (
        <div className={`mt-16 ${isDarkMode ? 'bg-black' : 'bg-orange-50'}`}>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20  max-w-7xl mx-auto px-3'>
                <div>
                    <h1 className="text-4xl font-bold font-barlow">Tech-Hub</h1>
                    <p className={`mt-7  ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}>Tech-Hub offers a user-friendly interface, secure authentication, advanced product search, seamless checkout, order tracking, an intuitive admin panel for product management, and a fast, responsive shopping experience.</p>
                    
                    <p className={`flex items-center gap-2 mt-6 font-semibold ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}><IoCallSharp/> <span>+880 123456789</span></p>
                    <p className={`flex items-center gap-2 mt-6 font-semibold ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}><FaLocationDot/> <span>123, ABC Street, Dhaka</span></p>
                </div>
                <div>
                    <h1 className="text-xl font-semibold font-barlow uppercase border-b pb-1 border-gray-400">Category</h1>
                    <ul className={`space-y-3 mt-3  font-semibold ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}>
                    <li><a className='hover:underline' href="#">Phone</a></li>
                    <li><a className='hover:underline' href="#">Television</a> </li>
                    <li><a className='hover:underline' href="#">Smart Watch</a> </li>
                    <li><a className='hover:underline' href="#">Household Accessories</a></li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl font-semibold font-barlow uppercase border-b pb-1 border-gray-400">About Us</h1>
                  <ul className={`space-y-3 mt-3  font-semibold ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}>
                    <li><a className='hover:underline' href="#">Our Team </a></li>
                    <li><a className='hover:underline' href="#">Our Mission</a> </li>
                    <li><a className='hover:underline' href="#">Customer Satisfaction</a> </li>
                    <li><a className='hover:underline' href="#">Community & Sustainability</a></li>
                  </ul>
                </div>
                <div>
                 <h1 className="text-xl font-semibold font-barlow uppercase border-b pb-1 border-gray-400 ">Terms & Conditions</h1>
                 <ul className={`space-y-3 mt-3  font-semibold ${isDarkMode ? 'text-gray-400': 'text-gray-600'}`}>
                    <li><a className='hover:underline' href="#">Delivery & Pickup</a></li>
                    <li><a className='hover:underline' href="#">Acceptance of Terms</a></li>
                    <li><a className='hover:underline' href="#">Ordering & Payments</a></li>
                    <li><a className='hover:underline' href="#">Cancellations & Refunds</a></li>
                  </ul>
                </div>
            </div>
            <footer className="footer max-w-7xl mx-auto  items-center p-4 border-t border-dashed border-gray-500">
                <aside className="grid-flow-col items-center">
                    
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Tech-Hub</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p>Follow Us</p>
                    <a href='#'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                    </a>
                    <a href='#'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                    </a>
                    <a href='#'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
