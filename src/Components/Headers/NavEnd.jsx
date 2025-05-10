import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { CiBoxes } from "react-icons/ci";
import { BsCart3 } from 'react-icons/bs';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import useUserData from '../../Hooks/useUserData';

const NavEnd = () => {

    const { user } = useAuth();
    const { role } = useUserData();

    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [myProducts, setMyProduct] = useState([])

    useEffect(() => {
        const fetch = () => {
            axios.get(`https://tech-hub-server-five.vercel.app/cart/${user?.email}`)
                .then(res => {
                    setCartItems(res.data);
                    setLoading(false);
                });
        };
        if (user?.email) {
            fetch();
        }
    }, [user?.email]);

    useEffect(() => {
        const fetch = () => {
            axios.get(`https://tech-hub-server-five.vercel.app/list/${user?.email}`)
                .then(res => {
                    setListItems(res.data);
                    setLoading(false);
                });
        };
        if (user?.email) {
            fetch();
        }
    }, [user?.email]);

   
    
    useEffect(()=>{
        const fetch = () =>{
            axios.get(`https://tech-hub-server-five.vercel.app/my-product/${user?.email}`)
            .then(res =>{
                setMyProduct(res.data)
                setLoading(false)
            })
        }
        fetch()
    },[])

  
    if (loading || !role) {
        return (
            <div className="flex justify-center items-center h-10">
                <span className="loading loading-ring loading-md"></span>
            </div>
        );
    }

    return (
        <div>
            <div className='flex gap-5 items-center'>

                <Link to='/dashboard/dashboard/overview'>
                    <button><FaRegCircleUser size={24} /></button>
                </Link>

                {
                    role === "admin" ? null :
                        role === "seller" ? (
                            <Link to='/dashboard/dashboard/my-product'>
                                <button className="indicator">
                                    <CiBoxes size={24} />
                                    <div className="indicator-item badge badge-sm">{myProducts?.length}</div>
                                </button>
                            </Link>
                        ) : (
                            <div className='flex items-center gap-4'>
                                <Link to='/dashboard/dashboard/my-wishList'>
                                    <button className="indicator">
                                        <FaRegHeart size={24} />
                                        <div className="indicator-item badge badge-sm">{listItems?.length}</div>
                                    </button>
                                </Link>
                                <Link to='/dashboard/dashboard/my-cart'>
                                    <button className="indicator">
                                        <BsCart3 size={24} />
                                        <div className="indicator-item badge badge-sm">{cartItems?.length}</div>
                                    </button>
                                </Link>
                            </div>
                        )
                }

            </div>
        </div>
    );
};

export default NavEnd;
