import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import Tutorial from '../Component/Tutorial';
import axios from 'axios';

const MyTutorials = () => {

    const {user, setLoading}=useContext(AuthContext)

    const [tutorials, setTutorials]=useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://assignment-11-server-six-gamma.vercel.app/myTutorials?email=${user.email}`,{withCredentials: true})
        .then(res=>{setTutorials(res.data)
        setLoading(false)
    })
        
    }, [user?.email, setLoading])

    return (
        <div>
            {
                tutorials.map((tutorial, index)=><Tutorial key={index} tutorial={tutorial} tutorials={tutorials} setTutorials={setTutorials}></Tutorial>)
            }
        </div>
    );
};

export default MyTutorials;