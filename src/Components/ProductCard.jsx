import useUserData from '../Hooks/useUserData';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';

const ProductCard = ({product}) => {
    const {isDarkMode} = useAuth()
  // const {role , email} = useUserData()

  // const handleCart = (email)=>{
  //     const buyerEmail = email
  //     const title = product.title 
  //     const imageURL = product.imageURL
  //     const price = product.price
  //     const CartInfo ={
  //       buyerEmail, title, imageURL, price,
  //     }

  //   // console.log(CartInfo);

  //   axios.post('https://tech-hub-server-five.vercel.app/cart' , CartInfo)
  //   .then(res =>{
      
  //     if(res.data.insertedId){
  //       Swal.fire({
  //           title: 'Success!',
  //           text: 'Product added to the cart',
  //           icon: 'success',
  //           confirmButtonText: 'Ok'
  //         }); 
  //   }
  //   })
  // }

  // const handleWishList = (email) =>{
  //   const buyerEmail = email
  //   const title = product.title 
  //   const imageURL = product.imageURL
  //   const price = product.price
  //   const ListInfo ={
  //      buyerEmail, title, imageURL, price,
  //   }

  //   axios.post('https://tech-hub-server-five.vercel.app/wishList' , ListInfo)
  //   .then(res =>{
      
  //     if(res.data.insertedId){
  //       Swal.fire({
  //           title: 'Success!',
  //           text: 'Product added to the Wish List',
  //           icon: 'success',
  //           confirmButtonText: 'Ok'
  //         }); 
  //   }
  //   })
  // }

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
                                   <button>
                                        <MdOutlineShoppingCart size={20}/>
                                   </button>                         
                                   <button>
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