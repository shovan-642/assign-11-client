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
<div className="flex rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
  <img src={image} alt="" className="mt-5 ml-5 object-cover object-center w-84 h-84 rounded-md h-72 dark:bg-gray-500" />
  <div className="flex flex-col justify-between p-6 space-y-8">
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-wide uppercase">{language}</h2>
      <p className="text-lg font-bold">Name :   
            <span className="font-light"> {name}</span></p>
            <p className="text-lg font-bold">Price : BDT  
            <span className="font-light"> {price}</span></p>
            <p className="text-lg font-bold">Review :   
            <span className="font-light"> {review}</span></p>
            <p className="text-lg font-bold mt-5 mb-5">Description :   
            <span className="font-light mt-5"> {description}</span></p>
    </div>
      <div className='space-x-3'>
      <Link to={`/update-tutorial/${_id}`}><button className='btn btn-accent'>Edit</button></Link>
      <button onClick={()=>handleDelete(_id)} className='btn btn-error'>Delete</button>
      </div>
  </div>
</div>

        </div>
    );
};

export default Tutorial;