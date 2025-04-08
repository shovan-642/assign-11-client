import React from 'react';
import { Link } from 'react-router-dom';

const Tutor = ({tutor}) => {

    const {_id, name, tutor_email, image, language, price, description, review, TutorImage}=tutor

    return (
        <div>
<div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={TutorImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-wide uppercase">{name}</h2>
			<p className="dark:text-gray-800">{language}</p>
			<p className="dark:text-gray-800 font-bold">BDT {price}</p>
			<p className="dark:text-gray-800">{review}</p>
		</div>
        <Link to={`/tutor/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#FF006E] hover:bg-[#FF0095] dark:text-gray-50">View Details</button></Link>
	</div>
</div>


        </div>
    );
};

export default Tutor;