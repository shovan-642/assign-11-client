import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()

    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
    },[])

    const updatedProfile=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }


    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        createUser, 
        user, 
        setUser, 
        loading,
        signInUser,
        logout,
        updatedProfile,
        signInWithGoogle
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;