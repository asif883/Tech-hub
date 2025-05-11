import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Headers/Nav';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import useAuth from '../Hooks/useAuth';
import '../Css/theme.css'

const Main = () => {
    const { isDarkMode } = useAuth()
 
    const [ loading , setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://tech-hub-server-five.vercel.app/all-products')
        .then( res => res.json())
        .then (data => {
            setLoading(false)
        })
    },[])
    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            {
                loading 
                ? 
                <><Loading/></>
                :
                <>
                 <div>
                    <Nav></Nav>
                 </div>
                  <Outlet></Outlet>
                  <Footer></Footer>
                </>
            }
        </div>
    );
};

export default Main;