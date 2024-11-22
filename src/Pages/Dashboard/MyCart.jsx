import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const MyCart = () => {
    const {user} = useAuth()
   

    const [cartItems , setCartItems] = useState([])
//    console.log(cartItems);
    useEffect(()=>{
        const fetch= () =>{
            axios.get(`http://localhost:4000/cart/${user?.email}`)
            .then(res =>{
                setCartItems(res.data);
            })
        }
        fetch()
    },[])
    return (
        <div>
            {
                cartItems.map((item , i) =>
                    <div className='text-center' key={i}>
                        <h1 className="text-xl text-black mb-4">{item.title}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default MyCart;