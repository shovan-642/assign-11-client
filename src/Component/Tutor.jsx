import React from 'react';
import { Link } from 'react-router-dom';

const Tutor = ({tutor}) => {

    const {_id, name, tutor_email, image, language, price, description, review, TutorImage}=tutor

    return (
        <div>
            <h1>{name}</h1>
            <p>{tutor_email}</p>
            <p>{language}</p>
            <p>{review}</p>
            <p>{price}</p>
            <p>{description}</p>
            <Link to={`/tutor/${_id}`}><button className='btn btn-accent'>View Details</button></Link>

        </div>
    );
};

export default Tutor;