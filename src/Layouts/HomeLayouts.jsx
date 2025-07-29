import React from 'react';
import { Outlet } from 'react-router';
import HomeHero from '../components/Home/Home';

const HomeLayouts = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayouts;