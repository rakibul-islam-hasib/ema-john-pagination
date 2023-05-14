import React, { useContext, useState } from 'react';
import { userContext } from '../../Utilities/AuthContext';
import { MoonLoader } from 'react-spinners'
import { Link } from 'react-router-dom';
import google from '../../assets/google.svg'
const SignUp = () => {
    const { createUser, user } = useContext(userContext);
    console.log(user)
    const [loading, setLoading] = useState(false);
    const handelFromSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        // console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoading(false);
            })
            .catch(err => {
                console.log(err.code)
                setLoading(false)
            })
    }

    return (
        <div className='w-[90%] mx-auto'>
            {
                loading ? <div className="h-screen flex justify-center items-center">
                    <MoonLoader color="#36d7b7" />
                </div> :
                    <div className="border-[1px] border-[#95a0a77a] mt-5 w-[30%] mx-auto signUp-box-shadow  bg-white">
                        <h1 className='text-3xl font-medium text-center my-4'>Sign Up</h1>
                        <form onSubmit={handelFromSubmit} className="w-[80%] mx-auto">
                            <p className='text-[#2A414F] mb-2'>Email</p>
                            <input type="email" name='email' className='border outline-none w-full py-2 px-3 ' required placeholder='Email' />
                            <p className='text-[#2A414F] mb-2'>Password</p>
                            <input type="password" name='password' className='border w-full outline-none py-2 px-3 ' required placeholder='Password' />
                            <p className='text-[#2A414F] mb-2'>Confirm Password</p>
                            <input type="password" className='border w-full py-2 px-3 outline-none' name="confPassword" placeholder='Confirm Password' />
                            <button className='py-2 w-full bg-[#ff99007f] text-xl font-medium  my-8 rounded-lg '>Sign Up</button>
                        </form>
                        <p className='text-center'><small>Already have an account ? <Link className='text-[#FF9900]' to={'/login'}>Login</Link></small></p>
                        <div className="flex items-center w-[80%] mx-auto">
                            <div className="border-t border border-gray-400 flex-grow"></div>
                            <div className="px-3 font-medium text-base text-gray-400">OR</div>
                            <div className="border-t border border-gray-400 flex-grow"></div>
                        </div>
                        <div className="w-[80%] mb-5 flex rounded items-center justify-between px-10 py-1 mx-auto border">
                            <img className='w-[30px] h-[30px]' src={google} alt="" />
                            <p className='text-gray-500 font-semibold'>Continue with Google</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SignUp;