import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const userContext = createContext(null);
const auth = getAuth(app); 
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email , password) => createUserWithEmailAndPassword(auth , email , password)
    const logIn = (email , password) => signInWithEmailAndPassword(auth , email , password); 

    // on state change 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
                setUser(currentUser) ; 
        })
        return () => unsubscribe()
    },[])

    const authInfo = {createUser  , logIn , user}
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;