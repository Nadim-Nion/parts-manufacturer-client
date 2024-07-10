import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../pages/SharedComponent/Header/Header';
import Footer from '../pages/SharedComponent/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();
    // console.log(location);

    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register');

    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;