import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import BookTutorCart from '../Component/BookTutorCart';

const MyBookedTutors = () => {

        const {user}=useContext(AuthContext)
    
        const [bookTutors, setBookTutors]=useState([])
    
        useEffect(()=>{
            if(!user?.email) return
            
            fetch(`https://assignment-11-server-six-gamma.vercel.app/bookTutor?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{setBookTutors(data)
                
            })
            
        },[user?.email])

    return (
        <div>
            {
                bookTutors.map((bookTutor, idx)=><BookTutorCart key={idx} bookTutor={bookTutor}></BookTutorCart>)
            }
        </div>
    );
};

export default MyBookedTutors;