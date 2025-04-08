import React from 'react';
import errorImage from "../assets/404.json"
import Lottie from 'lottie-react';

const Errorpage = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <Lottie className='lg:h-[350px] w-full ' animationData={errorImage}></Lottie>
           <h1 className='text-[#FF006E] text-center font-bold text-3xl my-5'> Opps!!!!!! page not found.</h1>
        </div>
    );
};

export default Errorpage;