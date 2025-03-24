import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;