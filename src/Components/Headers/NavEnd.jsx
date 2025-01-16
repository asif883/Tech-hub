import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import img from '../../assets/profile.webp'

const NavEnd = () => {

    const { user } = useAuth()

    

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
             
                    <Link to='/dashboard/dashboard/overview' className='border rounded-xl border-orange-600 text-orange-600 p-2'>
                            <p>Dashboard</p>
                    </Link> 
        
                </div> 
                : 
                <div>
                <Link to='/login'>
                    <button className='
                     rounded-xl mr-1 md:mr-3 text-white bg-orange-500 hover:bg-orange-600 px-2 md:px-4 py-1 md:py-2'>Get Started</button>
                </Link>
                
                </div>
            }
        </div>
    );
};

export default NavEnd;