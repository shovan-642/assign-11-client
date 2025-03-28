import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';

const FindTutors = () => {

        const {user}=useContext(AuthContext)
    
        const [tutors, setTutors]=useState([])
    
        useEffect(()=>{
            if(!user?.email) return
            fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor`)
            .then(res=>res.json())
            .then(data=>setTutors(data))
        },[user?.email])

    return (
        <div>
            {
                tutors.map((tutor, idx)=><h1 key={idx}>{tutor.name}</h1>)
            }
        </div>
    );
};

export default FindTutors;