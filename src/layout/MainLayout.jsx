import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';

const MainLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <NavBar></NavBar>
            <div className='my-10'>
            <Outlet></Outlet>
            </div>
            <hr className='' />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;