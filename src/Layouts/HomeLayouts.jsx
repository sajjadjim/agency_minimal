import React from 'react';
import { Outlet } from 'react-router';
import HomeHero from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayouts;