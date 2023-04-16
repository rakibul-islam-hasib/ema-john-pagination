import React, { createContext } from 'react';
import { app } from './firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const userContext = createContext(null);
const auth = getAuth(app); 
const AuthContext = ({ children }) => {

    const createUser = (email , password) => createUserWithEmailAndPassword(auth , email , password)


    const authInfo = {createUser }
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;