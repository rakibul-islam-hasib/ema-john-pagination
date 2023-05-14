import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const userContext = createContext(null);
const auth = getAuth(app); 
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true) ;

    const createUser = (email , password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth , email , password);
    };
    const logIn = (email , password) =>{
        setLoading(true); 
        return signInWithEmailAndPassword(auth , email , password)
    }; 
    const logOut = () => signOut(auth)
    // on state change 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
                setUser(currentUser) ; 
                setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const authInfo = {createUser  , logIn , user , logOut , loading}
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;