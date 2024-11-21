import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='flex items-center justify-center min-h-screen h-full'>
               <span className="loading loading-dots loading-lg"></span>
            </div>
        </div>
    );
};

export default Loading;