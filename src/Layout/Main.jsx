import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Headers/Nav';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <div className='bg-orange-50'>
              <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;