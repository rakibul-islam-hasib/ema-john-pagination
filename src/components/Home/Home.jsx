import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div className='w-[80%] items-center  mt-9 md:flex justify-between mx-auto'>
            {/* text part  */}
            <div className="">
                <p className='text-[#FF9900] text-xl mb-12'>Sale up to 70% off</p>
                <h1 className='font-bold text-5xl'>New Collection For Fall</h1>
                <p className='text-[#2A414F] mb-12 mt-2 text-[21px]'>Discover all the new arrivals of ready-to-wear collection.</p>
                <button onClick={()=> navigate('/shop')} className='bg-[#FF9900] px-6 py-2 font-semibold'>Shop Now</button>
            </div>
            {/* Image part */}
            <div className=" bg-blue-400 rounded-xl relative w-[350px] mt-5 h-[450px]">
                <div className="left-3 bottom-3 absolute">
                    <img src="demo-men.png" className='w-[350px] rounded-xl h-[450px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;