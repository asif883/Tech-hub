import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const NavEnd = () => {



    

    return (
        <div>
                <div>
                <Link to='/dashboard/dashboard/my-wishList'>
                    <button className='hover:text-orange-600 '><FaRegHeart size={24}/></button>
                </Link>
                <Link to='/dashboard/dashboard/my-cart'>
                    <button className='hover:text-orange-600 ml-5'><FaCartPlus size={24}/></button>
                </Link>
                
                </div>
            
        </div>
    );
};

export default NavEnd;