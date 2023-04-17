import React, { useContext, useState } from 'react';
import { userContext } from '../../Utilities/AuthContext';
import { MoonLoader } from 'react-spinners'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.svg'
const Login = () => {
    const { logIn } = useContext(userContext);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/' ; 
    const handelLoginFrom = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(false);
                navigate(from)
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
                        <h1 className='text-3xl font-medium text-center my-4'>Login</h1>
                        <form onSubmit={handelLoginFrom} className="w-[80%] mx-auto">
                            <p className='text-[#2A414F] mb-2'>Email</p>
                            <input type="email" name='email' className='border outline-none w-full py-2 px-3 ' required placeholder='Email' />
                            <p className='text-[#2A414F] mb-2'>Password</p>
                            <input type="password" name='password' className='border w-full outline-none py-2 px-3 ' required placeholder='Password' />
                            <button className='py-2 w-full bg-[#ff99007f] text-xl font-medium  mt-9 mb-5 rounded-lg '>Login</button>
                        </form>
                        <p className='text-center'><small>New to Ema-Jhon ? <Link className='text-[#FF9900]' to={'/signup'}>Sign Up</Link></small></p>
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

export default Login;