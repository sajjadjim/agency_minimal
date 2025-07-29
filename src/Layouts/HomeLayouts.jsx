import React from 'react';
import { Outlet } from 'react-router';
import HomeHero from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;