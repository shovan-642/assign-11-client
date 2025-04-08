import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);

  const tutorDetails = useLoaderData();

  const {
    _id,
    name,
    tutor_email,
    image,
    language,
    price,
    description,
    review,
    TutorImage,
  } = tutorDetails;

  const handleBookTutor = () => {
    const bookTutorData = {
      tutorId: _id,
      name: name,
      image: image,
      language: language,
      price: price,
      tutorEmail: tutor_email,
      userEmail: user.email,
    };

    fetch("https://assignment-11-server-six-gamma.vercel.app/bookTutor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookTutorData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tutorial added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl font-bold leading-none mb-5 sm:text-5xl">
              <span className="dark:text-violet-600 uppercase">{name}</span>
            </h1>
            <p className="text-lg font-bold">Language :   
            <span className="font-light"> {language}</span></p>
            <p className="text-lg font-bold">Price : BDT  
            <span className="font-light"> {price}</span></p>
            <p className="text-lg font-bold">Review :   
            <span className="font-light"> {review}</span></p>
            <p className="text-lg font-bold mt-5 mb-5">Description :   
            <span className="font-light mt-5"> {description}</span></p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button onClick={handleBookTutor} className="btn btn-accent">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorDetails;
