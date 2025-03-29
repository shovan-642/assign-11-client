
import { useLoaderData,  } from 'react-router-dom';
import Tutor from '../Component/Tutor';
import { useEffect, useState } from 'react';

const FindTutors = () => {

        const [tutorData, setTutorData]= useState([])

        const categoryTutor = useLoaderData()


        const [search, setSearch]=useState("")

        useEffect(()=>{
            if(categoryTutor){
                setTutorData(categoryTutor)
            }
        },[categoryTutor])


        useEffect(()=>{
            fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor?search=${search}`)
            .then((res)=>res.json())
            .then((data)=>setTutorData(data))
            .catch((error)=>console.log(error))
        },[search])


    return (
        <div>
            <div>
            <input name='search' onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search here" className="input text-black" />
            </div>
            {
                tutorData.map((tutor, idx)=><Tutor key={idx} tutor={tutor}></Tutor>)
            }
        </div>
    );
};

export default FindTutors;