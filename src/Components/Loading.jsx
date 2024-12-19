import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center min-h-screen h-full'>
            <Bars
            height="80"
            width="80"
            color="#FB923C"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
            </div>
        </div>
    );
};

export default Loading;