import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import img from '../../assets/profile.webp'

const NavEnd = () => {

    const { user ,logout} = useAuth()

    

    return (
        <div>
            {
                user 
                ? 
                <div>
                     <div className="dropdown dropdown-left dropdown-end">
                        <div tabIndex={0} role="button" className="border-2 border-orange-200 rounded-full">
                            <img className='w-10 rounded-full p-1' src={img} alt="" />
                        </div>
                         <ul tabIndex={0} className="dropdown-content menu  rounded-box z-[1] p-2 shadow">
                       
                        <li className='border rounded-xl border-orange-300 bg-orange-400 text-white'>
                            <Link to='/dashboard/dashboard/overview'>Dashboard</Link>
                            
                        </li>
                     </ul>
                 </div>
                </div> 
                : 
                <div>
                <Link to='/login'>
                    <button className='border-2 border-[#FFA43A] rounded-xl mr-3 text-[#FFA43A] px-3 py-2 font-semibold'>Login</button>
                </Link>
                <Link to='/register'>
                        <button className='border-2 border-[#FFA43A] rounded-xl mr-3 text-[#FFA43A] px-3 py-2 font-semibold'>Register</button>
                </Link>
                </div>
            }
        </div>
    );
};

export default NavEnd;