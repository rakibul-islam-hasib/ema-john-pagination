import React, { useContext } from 'react';
import { userContext } from '../Utilities/AuthContext';
import Login from '../components/Login/Login';

const PrivetRoute = ({ children }) => {
    const { user } = useContext(userContext);
    if (user) {
        return children;
    }
    return <Login />
};

export default PrivetRoute;