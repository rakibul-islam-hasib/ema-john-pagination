import React, { createContext } from 'react';

export const userContext = createContext(null);
const AuthContext = ({ children }) => {

    const user = { displayName: 'Hasib Hossain' }
    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;