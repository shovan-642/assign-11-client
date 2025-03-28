import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TutorDetails = () => {

    const tutorDetails = useLoaderData()

    const {_id, name, tutor_email, image, language, price, description, review, TutorImage}=tutorDetails
    return (
        <div>
                        <h1>{name}</h1>
            <p>{tutor_email}</p>
            <p>{language}</p>
            <p>{review}</p>
            <p>{price}</p>
            <p>{description}</p>
            
        </div>
    );
};

export default TutorDetails;