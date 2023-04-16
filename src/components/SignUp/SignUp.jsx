import React from 'react';

const SignUp = () => {
    
    return (
        <div className='w-[90%] mx-auto'>
            <div className="border-[1px] border-[#95a0a77a] mt-5 w-[30%] mx-auto signUp-box-shadow  bg-white">
                <h1 className='text-3xl font-medium text-center my-4'>Sign Up</h1>
                <form className="w-[80%] mx-auto">
                    <p className='text-[#2A414F] mb-2'>Email</p>
                    <input type="email" className='border outline-none w-full py-2 px-3 ' required placeholder='Email' />
                    <p className='text-[#2A414F] mb-2'>Password</p>
                    <input type="password" className='border w-full outline-none py-2 px-3 ' required placeholder='Password' />
                    <p className='text-[#2A414F] mb-2'>Confirm Password</p>
                    <input type="password" className='border w-full py-2 px-3 outline-none' name="lk" placeholder='Confirm Password' required id="" />
                    <button className='py-2 w-full bg-[#ff99007f] text-xl font-medium  my-8 rounded-lg '>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;