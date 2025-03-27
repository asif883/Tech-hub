import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { IoSearchSharp } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const NavEnd = () => {

    const {user} = useAuth()
   
    const [ loading , setLoading] = useState(true)
    const [cartItems , setCartItems] = useState([])

    useEffect(()=>{
        const fetch= () =>{
            axios.get(`https://tech-hub-server-five.vercel.app/cart/${user?.email}`)
            .then(res =>{
                setCartItems(res.data)
                setLoading(false)
            })
        }
        fetch()
    },[])


    const [listItems , setListItems] = useState([])

    useEffect(()=>{
        const fetch= () =>{
            axios.get(`https://tech-hub-server-five.vercel.app/list/${user?.email}`)
            .then(res =>{
                setListItems(res.data)
                setLoading(false)
            })
        }
        fetch()
    },[])

    return (
        <div>
                <div className='flex gap-5 items-center'>
                <Link to='#'>
                    <button className=''><IoSearchSharp size={26}/></button>
                </Link>
                <Link to='/dashboard/dashboard/overview'>
                    <button className=''><FaRegCircleUser size={24}/></button>
                </Link>
                <Link to='/dashboard/dashboard/my-wishList'>
                    <button className="indicator">
                        <FaRegHeart size={24}/><div className="indicator-item badge badge-sm">{listItems?.length}</div>
                    </button>
                </Link>
                <Link to='/dashboard/dashboard/my-cart'>
                    <button className="indicator">
                        <BsCart3 size={24}/><div className="indicator-item badge badge-sm">{cartItems?.length}</div>
                    </button>
                </Link>

                </div>
            
        </div>
    );
};

export default NavEnd;