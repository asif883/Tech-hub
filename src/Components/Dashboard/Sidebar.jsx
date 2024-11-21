import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Sidebar = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout= () =>{
        logout()
        .then(()=>{
            navigate("/")
        })

    }
    return (
        <div>
            <li>
                <Link to='dashboard/overview'>Overview</Link>
            </li>
            <li>
                <Link to='dashboard/users'>All-User</Link>
            </li>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                 <button onClick={handleLogout}>Logout</button>
            </li>
           
        </div>
    );
};

export default Sidebar;