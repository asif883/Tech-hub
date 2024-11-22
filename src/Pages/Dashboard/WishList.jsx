import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const WishList = () => {
    const {user} = useAuth()
   

    const [listItems , setListItems] = useState([])

    useEffect(()=>{
        const fetch= () =>{
            axios.get(`https://tech-hub-server-five.vercel.app/list/${user?.email}`)
            .then(res =>{
                setListItems(res.data);
            })
        }
        fetch()
    },[])
    return (
       <div>
            <div className='text-center my-8'>
                <h1 className="text-3xl font-bold text-orange-400">Wish List</h1>
            </div>
            {
                listItems?.length > 0 ? 
                <>
                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                {
                   listItems?.map((item , i) =>
                       <div key={i}>
                           <div className="border border-orange-200 card card-side  shadow-xl">
                               <figure>
                                   <img className='w-[150px]'
                                   src={item.imageURL}
                                   alt="product" />
                               </figure>
                               <div className="card-body">
                                   <h2 className="card-title">{item.title}</h2>
                                   <p>
                                   Price: ${item.price}
                                   </p>
                                   <div className="card-actions justify-end">
                                   <button className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500  text-[#FFA43A] px-2 py-1 font-semibold">Buy Now</button>
                                   </div>
                               </div>
                            </div>
                       </div>
                   )
               }
              </div>
            </>
                 : 
                <div className='text-center'>
                    <h1 className="text-2xl font-semibold text-red-500">No Product Add Yet</h1>
                </div> 
            }
       </div>
    );
};

export default WishList;