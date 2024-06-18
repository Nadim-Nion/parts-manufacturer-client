import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/SharedComponent/Header/Header';
import Footer from '../pages/SharedComponent/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;