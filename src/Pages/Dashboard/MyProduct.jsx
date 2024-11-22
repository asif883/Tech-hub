import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyProduct = () => {
    const {user} =useAuth()

    const [myProducts, setMyProduct] = useState([])
    
    useEffect(()=>{
        const fetch = () =>{
            axios.get(`https://tech-hub-server-five.vercel.app/my-product/${user?.email}`)
            .then(res =>{
                setMyProduct(res.data);
            })
        }
        fetch()
    },[])

   const handleDelete = (id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert the product!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
     
        if(result.isConfirmed){
            axios.delete(`https://tech-hub-server-five.vercel.app/added-product/${id}`)
            .then( res =>{
                if(res.data.deletedCount > 0 ){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Product has been deleted.",
                        icon: "success"
                      });
                 }
            window.location.reload()
            })
        }

    }) 
   }
    return (
        <div>
           <div className='text-center my-8'>
                <h1 className="text-3xl font-bold text-orange-400">My Product</h1>
            </div>
            {
                myProducts?.length > 0 ? 
                <>
                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                {
                   myProducts?.map((item , i) =>
                       <div key={i}>
                           <div className="border border-orange-200 card card-side  shadow-xl">
                               <figure>
                                   <img className='w-[100px] lg:w-[150px]'
                                   src={item.imageURL}
                                   alt="product" />
                               </figure>
                               <div className="card-body">
                                   <h2 className="card-title">{item.title}</h2>
                                   <p>
                                   Price: ${item.price}
                                   </p>
                                   <div className="card-actions justify-end">
                                   <Link to={`/dashboard/updateProduct/${item?._id}`}><button className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500  text-[#FFA43A] px-2 py-1 font-semibold">Update</button>
                                   </Link>
                                   <button onClick={()=> handleDelete(item._id)} className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500  text-[#FFA43A] px-2 py-1 font-semibold">Delete</button>
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

export default MyProduct;