import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import { CiMenuFries } from "react-icons/ci";
import useAuth from '../Hooks/useAuth';
import Loading from '../Components/Loading';
import DashLoader from '../Components/Dashboard/DashLoader';

const Dashboard = () => {
    const {user} = useAuth()
    const [ loading , setLoading ] = useState(true)
    useEffect(()=> {
        fetch(`https://tech-hub-server-five.vercel.app/user/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
        })
    }, [])
    return (
            <div>
                {
                    loading ? <DashLoader/>
                    :
                    <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-8">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button mb-6 lg:hidden">
                    <CiMenuFries size={24}/>
                    </label>
                   <Outlet/>
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-orange-50  min-h-full w-80 p-8">
                    {/* Sidebar content here */}
                        <Sidebar/>
                    </ul>
                </div>
            </div>
                }
            </div>
    );
};

export default Dashboard;