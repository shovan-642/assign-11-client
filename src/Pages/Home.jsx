import React from 'react';
import LanguageCategory from '../Component/LanguageCategory';
import Banner from '../Component/Banner';
import Stats from '../Component/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategory></LanguageCategory>
        </div>
    );
};

export default Home;