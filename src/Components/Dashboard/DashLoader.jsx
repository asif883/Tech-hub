import React from 'react';
import { Circles } from 'react-loader-spinner';

const DashLoader = () => {
    return (
        <div className='flex items-center justify-center min-h-screen h-full'>
            <Circles
                height="80"
                width="80"
                color="#FB923C"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
        </div>
    );
};

export default DashLoader;