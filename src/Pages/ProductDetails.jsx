import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const {id} = useParams() 
    console.log(id); 

    const [products , setProduct] = useState([])

    console.log(products);

    useEffect(()=>{
        fetch('https://tech-hub-server-five.vercel.app/all-products')
        .then(res => res.json())
        .then(data => setProduct(data.products))
    },[])

    const product = products.find((product)=> product._id == id);
    console.log(product);
    return (
        <div className='container mx-auto my-12 min-h-screen'>
            <div className="border-orange-200 card lg:card-side shadow-xl">
                <figure>
                    <img className='w-[320px]'
                    src={product?.imageURL}
                    alt={product?.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{product?.title}</h2>
                    <p>{product?.description}</p>
                    <div>
                        <p className='font-medium text-gray-600'>Brand: {product?.brand}</p>
                        <p className='font-medium text-gray-600'>Price: ${product?.price}</p>
                        <p className='font-medium text-gray-600'>Stock: {product?.inStock}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <button className="border-2 border-[#FFA43A] rounded-xl hover:text-orange-500 hover:border-orange-500  text-[#FFA43A] px-2 py-2 font-semibold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;