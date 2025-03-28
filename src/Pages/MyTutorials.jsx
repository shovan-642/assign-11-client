import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import Tutorial from '../Component/Tutorial';

const MyTutorials = () => {

    const {user}=useContext(AuthContext)

    const [tutorials, setTutorials]=useState([])

    useEffect(()=>{
        if(!user?.email) return
        
        fetch(`https://assignment-11-server-six-gamma.vercel.app/myTutorials?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{setTutorials(data)
            
        })
        
    },[user?.email])

    return (
        <div>
            {
                tutorials.map((tutorial, index)=><Tutorial key={index} tutorial={tutorial} tutorials={tutorials} setTutorials={setTutorials}></Tutorial>)
            }
        </div>
    );
};

export default MyTutorials;