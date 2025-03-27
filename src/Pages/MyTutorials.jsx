import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';

const MyTutorials = () => {

    const {user}=useContext(AuthContext)

    const [tutorials, setTutorials]=useState([])

    useEffect(()=>{
        fetch(`https://assign-11-server-zeta.vercel.app/myTutorials?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setTutorials(data))
    },[user.email])

    return (
        <div>
            {
                tutorials.map(tutorial=><h2>{tutorial.language}</h2>)
            }
        </div>
    );
};

export default MyTutorials;