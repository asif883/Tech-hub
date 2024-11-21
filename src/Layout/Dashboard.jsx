import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';

const Dashboard = () => {
    return (
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-8">
                    {/* Page content here */}
                   <Outlet/>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-orange-50  min-h-full w-80 p-8">
                    {/* Sidebar content here */}
                        <Sidebar/>
                    </ul>
                </div>
            </div>
    );
};

export default Dashboard;