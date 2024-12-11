import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';

const MainLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;