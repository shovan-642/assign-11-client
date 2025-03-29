import React from 'react';
import Swal from 'sweetalert2';

const BookTutorCart = ({bookTutor}) => {

    const {tutorId, image, language, price, tutorEmail} = bookTutor

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

            <p>{tutorId}</p>
            <p>{image}</p>
            <p>{language}</p>
            <p>{price}</p>
            <p>{tutorEmail}</p>
            <button onClick={()=>handleReviewCount(tutorId)} className='btn btn-accent'>Review</button>
        </div>
    );
};

export default BookTutorCart;