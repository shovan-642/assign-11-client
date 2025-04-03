import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
        <div className='relative z-0'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{delay: 3000, disableOnInteraction: false}}
    >
      <SwiperSlide>
        <div className='relative w-full h-screen'>
        <div className="absolute inset-0 bg-black opacity-80 z-20"></div>
        <img className='w-full h-full object-cover z-10' src="https://i.ibb.co.com/kgkG0XgV/steptodown-com713633.jpg" alt="" />
        
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-30'>
        <h1 className='font-bold text-4xl uppercase'>Master a New Language with Confidence</h1>
        <p className='text-gray-300 text-xl pt-3 px-10 text-center'>Unlock the power of communication by learning a new language with expert tutors. Whether you're a beginner or advanced learner, our personalized lessons help you achieve fluency.</p>
        </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-screen'>
        <div className="absolute inset-0 bg-black opacity-80 z-20"></div>
        <img className='w-full h-full object-cover' src="https://i.ibb.co.com/SXLdrmwF/steptodown-com561941.jpg" alt="" />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-30'>
        <h1 className='font-bold text-4xl uppercase'>Flexible Learning, Anytime, Anywhere</h1>
        <p className='text-gray-300 text-xl pt-3'>Learn at your own pace with interactive online lessons. Our tutors are available 24/7, making it easy to fit language learning into your busy schedule.</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative w-full h-screen'>
        <div className="absolute inset-0 bg-black opacity-60 z-20"></div>
        <img className='w-full h-full object-cover' src="https://i.ibb.co.com/zVr6XmnP/steptodown-com938816.jpg" alt="" />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-30'>
        <h1 className='font-bold text-4xl uppercase'>Real Conversations, Real Progress</h1>
        <p className='text-gray-300 text-xl pt-3 px-10 text-center'>Practice speaking with native tutors and gain real-world communication skills. Build confidence, improve pronunciation, and achieve your language goals faster.</p>
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
            
        </div>
    );
};

export default Banner;