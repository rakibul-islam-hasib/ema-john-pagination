import React from 'react';
import NavBar from '../NavBar/NavBar';

const ErrorPage = () => {
    return (
        <div className='h-[80vh]'>
            <NavBar/>
            <div className="flex justify-center mt-[15%]">
                <h1 className='text-6xl'>404 <span className='border-l-2 mx-3 border-[#FF9900] text-5xl '></span> Nothing here to see</h1>
            </div>
        </div>
    );
};

export default ErrorPage;