import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Headers/Nav';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;