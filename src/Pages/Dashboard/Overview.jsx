import React from 'react';
import useUserData from '../../Hooks/useUserData';


const Overview = () => {

    const userData = useUserData()
    const {email, role} = userData
    
    return (
        <div >
            <h1 className='text-3xl'>User Email:{email}</h1>
             <p className='text-2xl'>Role:{role}</p>
        </div>
    );
};

export default Overview;