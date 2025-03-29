import React from 'react';

const BookTutorCart = ({bookTutor}) => {

    const {tutor_Id, image, language, price, tutorEmail} = bookTutor

    return (
        <div>

            <p>{tutor_Id}</p>
            <p>{image}</p>
            <p>{language}</p>
            <p>{price}</p>
            <p>{tutorEmail}</p>
        </div>
    );
};

export default BookTutorCart;