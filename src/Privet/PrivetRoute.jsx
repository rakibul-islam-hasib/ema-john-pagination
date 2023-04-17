import React, { useContext } from 'react';
import { userContext } from '../Utilities/AuthContext';
import { FadeLoader } from 'react-spinners'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user , loading} = useContext(userContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className="h-screen w-full flex justify-center items-center ">
            <FadeLoader color="#36d7b7" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' replace state={{from : location}}/>
};

export default PrivetRoute;