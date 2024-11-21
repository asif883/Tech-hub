import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import { CiMenuFries } from "react-icons/ci";

const Dashboard = () => {
    return (
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
    );
};

export default Dashboard;