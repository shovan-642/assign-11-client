
import { useLoaderData, useParams,  } from 'react-router-dom';
import Tutor from '../Component/Tutor';
import { useEffect, useState } from 'react';

const FindTutors = () => {

        const [tutorData, setTutorData]= useState([])

        const {category} = useParams()

        const categoryTutor = useLoaderData()


        const [search, setSearch]=useState("")

        useEffect(()=>{
            if(categoryTutor){
                setTutorData(categoryTutor)
            }
        },[categoryTutor])


        useEffect(()=>{

            let url = `https://assignment-11-server-six-gamma.vercel.app/tutor`;

            if(category){
                url = `https://assignment-11-server-six-gamma.vercel.app/find-tutors/${category}`
            }
            else if (search){
                url = `https://assignment-11-server-six-gamma.vercel.app/tutor?search=${search}`
            }

            fetch(url)
            .then((res)=>res.json())
            .then((data)=>setTutorData(data))
            .catch((error)=>console.log(error))
        },[search, category])


    return (
        <div className='w-9/12 mx-auto'>
            <div className='text-center'>
            <input name='search' onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search here" className="input text-black my-10 border border-[#FF006E]" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                tutorData.map((tutor, idx)=><Tutor key={idx} tutor={tutor}></Tutor>)
            }
            </div>
        </div>
    );
};

export default FindTutors;