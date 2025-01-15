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
                <div className='flex items-center gap-1'>
                   {
                       user?.photoURL 
                                ?
                         <><img className='w-12 rounded-full p-1 border border-orange-100' src={user?.photoURL} alt={user?.email} /></> 
                                : 
                         <><img className='w-12 rounded-full p-1 border border-orange-100' src={img} alt={user?.email} /></>
                    }
             
                    <Link to='/dashboard/dashboard/overview' className='border rounded-xl border-orange-400 text-orange-400 p-2'>
                            <p>Dashboard</p>
                    </Link> 
        
                </div> 
                : 
                <div>
                <Link to='/login'>
                    <button className='border-2 border-[#FFA43A] rounded-xl mr-1 md:mr-3 text-white bg-orange-400 hover:bg-orange-600 px-2 md:px-3 py-1 md:py-2'>Get Started</button>
                </Link>
                
                </div>
            }
        </div>
    );
};

export default NavEnd;