import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const {id} = useParams() 
    console.log(id); 

    const [products , setProduct] = useState([])

    console.log(products);

    useEffect(()=>{
        fetch('http://localhost:4000/all-products')
        .then(res => res.json())
        .then(data => setProduct(data.products))
    },[])

    const product = products.find((product)=> product._id == id);
    console.log(product);
    return (
        <div>
            <h1 className='text-3xl font-bold'>{product?.title}</h1>
        </div>
    );
};

export default ProductDetails;