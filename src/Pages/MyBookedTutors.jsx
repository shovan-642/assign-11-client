import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import BookTutorCart from '../Component/BookTutorCart';
import axios from 'axios';

const MyBookedTutors = () => {

        const {user, setLoading}=useContext(AuthContext)
    
        const [bookTutors, setBookTutors]=useState([])
    
        useEffect(()=>{            
            setLoading(true)
            axios.get(`https://assignment-11-server-six-gamma.vercel.app/myBookTutor?email=${user.email}`,{withCredentials: true})
            .then(res=>{setBookTutors(res.data)
                setLoading(false)
            })
            
        },[user?.email, setLoading])

    return (
        <div>
            {
                bookTutors.map((bookTutor, idx)=><BookTutorCart key={idx} bookTutor={bookTutor}></BookTutorCart>)
            }
        </div>
    );
};

export default MyBookedTutors;