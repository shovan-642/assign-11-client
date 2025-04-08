import React from 'react';
import Swal from 'sweetalert2';

const BookTutorCart = ({bookTutor}) => {

    const {tutorId, name, image, language, price, tutorEmail, userEmail} = bookTutor

    const handleReviewCount = (tutorId)=>{
        console.log(tutorId)

                fetch(`https://assignment-11-server-six-gamma.vercel.app/review/${tutorId}`,{
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
            
                })
                .then((res)=>res.json())
                .then((data)=>{
                  console.log(data)
                  if(data.modifiedCount > 0){
                    Swal.fire({
                      title: "Success!",
                      text: "Review Given successfully",
                      icon: "success",
                      confirmButtonText: "Cool",
                    });
                  }
                })

    }

    return (
        <div>

<div className=" flex rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
  <img src={image} alt="" className="mt-5 ml-5 mb-5 object-cover object-center w-84 h-84 rounded-t-md h-72 dark:bg-gray-500" />
  <div className="flex flex-col justify-between p-6 space-y-8">
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-wide uppercase">{name}</h2>
      <p className="text-lg font-bold">Language :
            <span className="font-light"> {language}</span></p>
            <p className="text-lg font-bold">Price : BDT  
            <span className="font-light"> {price}</span></p>

    </div>
    <div>
      <button onClick={()=>handleReviewCount(tutorId)} className='btn btn-accent'>Review</button>
      </div>
    </div>

    </div>
    </div>
    );
};

export default BookTutorCart;