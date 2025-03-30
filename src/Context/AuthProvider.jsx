import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import axios from 'axios';

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
            if(currentUser?.email){
                const user = {email: currentUser?.email}
                axios.post('https://assignment-11-server-six-gamma.vercel.app/jwt', user, {
                    withCredentials: true,
                  })
                  .then(res=>{console.log("token sent success",res.data)
                    setLoading(false)
                  })
            }
            else{
                axios.post('https://assignment-11-server-six-gamma.vercel.app/logout', {}, {
                    withCredentials: true,
                })
                .then(res=>{console.log("logout",res.data)
                    setLoading(false)
                })
            }




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
        signInWithGoogle,
        setLoading
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;