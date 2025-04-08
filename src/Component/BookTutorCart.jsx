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

<div className=" md:flex lg:flex rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
  <img src={image} alt="" className="md:mt-5 md:ml-5 md:mb-5 w-full max-w-[400px] md:max-w-[350px] lg:max-w-[300px] h-64 rounded-t-md" />
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