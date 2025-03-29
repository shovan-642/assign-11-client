import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';

const TutorDetails = () => {

    const {user}= useContext(AuthContext
    )

    const tutorDetails = useLoaderData()

    const {_id, name, tutor_email, image, language, price, description, review, TutorImage}=tutorDetails

    const handleBookTutor = ()=>{

        

        const bookTutorData = {
            tutorId : _id,
            image : image,
            language: language,
            price : price,
            tutorEmail: tutor_email,
            userEmail: user.email,
        }

        fetch('https://assignment-11-server-six-gamma.vercel.app/bookTutor',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookTutorData)
    
        })
            .then((res)=>res.json())
            .then((data)=>{
              console.log(data)
              if(data.insertedId){
                Swal.fire({
                  title: "Success!",
                  text: "Tutorial added successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            })


        
    }



    return (
        <div>
            <h1>{name}</h1>
            <p>{tutor_email}</p>
            <p>{language}</p>
            <p>{review}</p>
            <p>{price}</p>
            <p>{description}</p>
            
            <button onClick={handleBookTutor}  className='btn btn-accent'>Book Now</button>
            
        </div>
    );
};

export default TutorDetails;