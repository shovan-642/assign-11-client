import React from 'react';
import LanguageCategory from '../Component/LanguageCategory';
import Banner from '../Component/Banner';
import Stats from '../Component/Stats';
import WhyUs from '../Component/WhyUs';
import Customer_Reviews from '../Component/Customer_Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategory></LanguageCategory>
            <WhyUs></WhyUs>
            <Customer_Reviews></Customer_Reviews>
        </div>
    );
};

export default Home;