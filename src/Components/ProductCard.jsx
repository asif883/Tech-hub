import useUserData from '../Hooks/useUserData';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import { useEffect, useState } from 'react';

const ProductCard = ({product}) => {
    const {user, isDarkMode} = useAuth()
    const {role , email} = useUserData()
    const navigate = useNavigate()

    const [cartItems , setCartItems] = useState([])
    //    console.log(cartItems);
    useEffect(()=>{
      const fetch= () =>{
       axios.get(`https://tech-hub-server-five.vercel.app/cart/${user?.email}`)
         .then(res =>{
          setCartItems(res.data)
         })
         }
      fetch()
   },[])

  const handleCart = (email)=>{
      if(!user){
        return navigate('/login')
      }
      const buyerEmail = email
      const title = product.title 
      const imageURL = product.imageURL
      const price = product.price
      const CartInfo ={
        buyerEmail, title, imageURL, price,
      }

      const isAlreadyAdded = cartItems.some(item => item.title === product.title);
      if (isAlreadyAdded) {
        return Swal.fire({
              title: "Check Your Cart!!!",
              text: "The Product Already Added To Your Cart",
              icon: "question",
              confirmButtonColor: '#fb923c'
              });
      } 


    axios.post('https://tech-hub-server-five.vercel.app/cart' , CartInfo)
    .then(res =>{
      
      if(res.data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Product added to the cart',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#fb923c'
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
    console.log(ListInfo);
    // axios.post('https://tech-hub-server-five.vercel.app/wishList' , ListInfo)
    // .then(res =>{
      
    //   if(res.data.insertedId){
    //     Swal.fire({
    //         title: 'Success!',
    //         text: 'Product added to the Wish List',
    //         icon: 'success',
    //         confirmButtonText: 'Ok'
    //       }); 
    // }
    // })
  }

    return (
        <div>
            <div className={`border rounded p-1 hover:shadow-md
            ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                        <div className="w-48 md:w-64 h-32 md:h-40">
                             <img className=" w-full h-full" src={product?.imageURL} alt={product?.title} />
                        </div>
                        <div className="space-y-1 relative w-full">
                            <p className="text-sm md:text-lg font-semibold">{product?.title}</p>
                            <p className={`text-xs md:text-base font-semibold  ${isDarkMode ? 'text-gray-300': 'text-gray-600'}`}>Price: ${product?.price}</p>
                              <p className={`text-xs md:text-base font-medium  ${isDarkMode ? 'text-gray-300': 'text-gray-600'}`}>Brand: {product?.brand}</p>
                              <div className="flex items-center gap-4  absolute -top-8 right-5">
                                   <button onClick={()=> handleCart(email)}>
                                        <MdOutlineShoppingCart size={20}/>
                                   </button>                         
                                   <button onClick={() => handleWishList(email)}>
                                      <FaRegHeart size={20}/>
                                   </button>
                              </div>
                        </div>
                  </div>
              </div>
       </div>
    );
};

export default ProductCard;