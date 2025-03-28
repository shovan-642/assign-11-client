import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Tutorial = ({tutorial, tutorials, setTutorials}) => {

    const {_id, name, tutor_email, image, language, price, description, review, TutorImage}=tutorial


    const handleDelete=(_id)=>{
    
    
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor/${_id}`,{
                method: "DELETE",

              })
              .then (res=>res.json())
              .then (data => {
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Tutorial has been deleted.",
                        icon: "success"
                      });
                     
                      const remaining = tutorials.filter(tu=>tu._id!==_id)
                      setTutorials(remaining)
                }
              })
            }
          });
    }




    return (
        <div>
            <h1>{name}</h1>
            <p>{tutor_email}</p>
            <p>{language}</p>
            <p>{review}</p>
            <p>{price}</p>
            <p>{description}</p>
            <Link to={`/update-tutorial/${_id}`}><button className='btn btn-accent'>Edit</button></Link>
            <button onClick={()=>handleDelete(_id)} className='btn btn-error'>Delete</button>
        </div>
    );
};

export default Tutorial;