import React, { useContext, useState } from 'react';
import { userContext } from '../../Utilities/AuthContext';
import { MoonLoader } from 'react-spinners'
const Login = () => {
    const { logIn } = useContext(userContext);
    const [loading, setLoading] = useState(false);

    const handelLoginFrom = (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoading(false)
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
                    </div>
            }
        </div>
    );
};

export default Login;