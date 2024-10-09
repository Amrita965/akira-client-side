import React from 'react';
import Promobar from '../Pages/Promobar/Promobar';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* <Promobar></Promobar> */}
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;