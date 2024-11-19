import React from 'react';
import { Link } from 'react-router-dom';

const NavEnd = () => {
    return (
        <div>
            <Link to='/login'>
                  <button className='border-2 border-[#FFA43A] rounded-xl mr-3 text-[#FFA43A] px-3 py-2 font-semibold'>Login</button>
            </Link>
            <Link to='/register'>
                  <button className='border-2 border-[#FFA43A] rounded-xl mr-3 text-[#FFA43A] px-3 py-2 font-semibold'>Register</button>
            </Link>
        </div>
    );
};

export default NavEnd;