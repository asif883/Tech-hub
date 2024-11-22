import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaHome } from 'react-icons/fa';
import { GrOverview } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import useUserData from '../../Hooks/useUserData';
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BiCollection } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const AdminRoutes = [
    {
       id: 1,
       route: "dashboard/users" ,
       icon: <PiUsersThreeBold/>,
       name: 'All-User'
    }
]
const SellerRoutes = [
    {
       id: 1,
       route: "dashboard/my-product" ,
       icon: <BiCollection/>,
       name: 'My Product'
    },
    {
       id: 1,
       route: "dashboard/add-product" ,
       icon: <MdOutlineAddCircleOutline/>,
       name: 'Add Product'
    }
]
const BuyerRoutes = [
    {
       id: 1,
       route: "dashboard/my-cart" ,
       icon: <MdOutlineShoppingCart/>,
       name: 'My Cart'
    },
    {
       id: 1,
       route: "dashboard/my-wishList" ,
       icon: <FaRegHeart/>,
       name: 'My Wish List'
    }
]

const Sidebar = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    const {role} = useUserData()

    const handleLogout= () =>{
        logout()
        .then(()=>{
            navigate("/")
        })

    }
    return (
        <div className='space-y-3'>
            <div className='mb-4'>
                <h1 className="text-3xl text-orange-400 font-bold">Tech-Hub</h1>
            </div>
            <Link to='dashboard/overview' className='border-2  border-orange-300 px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center '>
                <GrOverview/>
                < >Overview</>
            </Link>
            {
                role === "admin" && 
                <>
              {
                AdminRoutes.map((r, idx)=>
                    <Link to={`${r.route}`} key={idx} className='border-2 border-orange-300 px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center '>
                        <>{r.icon}</>
                        <>{r.name}</>
                    </Link>   
                )
              }
                </>
            }
            {
                role === "seller" && 
                <>
              {
                SellerRoutes.map((r, idx)=>
                    <Link to={`${r.route}`
                    } key={idx} className='border-2 border-orange-300 px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center '>
                        <>{r.icon}</>
                        <>{r.name}</>
                    </Link>   
                )
              }
                </>
            }
            {
                role === "buyer" && 
                <>
              {
                BuyerRoutes.map((r, idx)=>
                    <Link to={`${r.route}`
                    } key={idx} className='border-2 border-orange-300 px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center '>
                        <>{r.icon}</>
                        <>{r.name}</>
                    </Link>   
                )
              }
                </>
            }
            
           
            <Link to='/' className='border-2 border-orange-300 px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center '>
                 <IoHomeOutline/>
                <>Home</>
            </Link>
            <button onClick={handleLogout} className='border-2 border-orange-300 w-full px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center '>
                 <CiLogout/>
                 <>Logout</>
            </button>
           
        </div>
    );
};

export default Sidebar;