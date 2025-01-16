import React from 'react';
import useUserData from '../Hooks/useUserData';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductCard = ({product}) => {

  const {role , email} = useUserData()

  const handleCart = (email)=>{
      const buyerEmail = email
      const title = product.title 
      const imageURL = product.imageURL
      const price = product.price
      const CartInfo ={
        buyerEmail, title, imageURL, price,
      }

    // console.log(CartInfo);

    axios.post('https://tech-hub-server-five.vercel.app/cart' , CartInfo)
    .then(res =>{
      
      if(res.data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Product added to the cart',
            icon: 'success',
            confirmButtonText: 'Ok'
          }); 
    }
    })
  }

  const handleWishList = (email) =>{
    const buyerEmail = email
    const title = product.title 
    const imageURL = product.imageURL
    const price = product.price
    const ListInfo ={
       buyerEmail, title, imageURL, price,
    }

    axios.post('https://tech-hub-server-five.vercel.app/wishList' , ListInfo)
    .then(res =>{
      
      if(res.data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Product added to the Wish List',
            icon: 'success',
            confirmButtonText: 'Ok'
          }); 
    }
    })
  }

    return (
        <div >
          <div className="card bg-base-100 border w-[320px] mx-auto border-orange-300  shadow-xl">
            <figure>
             <img className='h-[200px]'
                src={product?.imageURL}
                 alt={product?.title} />
           </figure>
            <div className="flex flex-col p-6">
              <div className='flex-1 min-h-24'>
                <h2 className="card-title mb-2">{product?.title}</h2>
                <div className='flex justify-between'>
                  <p className='text-lg text-gray-500'>Price: ${product?.price}</p>
                  <p className='text-lg text-gray-500'>Brand: {product?.brand}</p>
                </div>
              </div>
             <div className="flex-1">

                {
                  role === 'buyer' ? 
                  <div className='flex flex-row-reverse justify-between items-center'>
                  <div className='space-x-3'>
                    <button onClick={()=>handleCart(email)} className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500 text-[#FFA43A] px-2 py-1 font-semibold">
                      <MdOutlineShoppingCart size={20}/>
                    </button>
                    <button onClick={()=> handleWishList(email)} className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500  text-[#FFA43A] px-2 py-1 font-semibold">
                    <FaRegHeart size={20}/>
                    </button>
                  </div>

                  <Link to={`/details/${product?._id}`}>
                    <button className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500  text-[#FFA43A] px-2 py-1 font-semibold">
                    Details
                    </button>
                  </Link>
                  </div>
                  
                  :
                  <>
                  <Link to={`/details/${product?._id}`}>
                    <button className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500  text-[#FFA43A] px-2 py-1 font-semibold">
                    Details
                    </button>
                  </Link>
                  </>
                } 
                
              </div>
         </div>
        </div>
  </div>
    );
};

export default ProductCard;