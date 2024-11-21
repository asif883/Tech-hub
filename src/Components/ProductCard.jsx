import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div >
          <div className="card bg-base-100 border w-[320px] border-orange-300  shadow-xl">
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
             <div className="flex-1 card-actions justify-between">
                <button className="border-2 border-[#FFA43A] rounded-xl  text-[#FFA43A] px-2 py-2 font-semibold">Add to Cart</button>
                <button className="border-2 border-[#FFA43A] rounded-xl  text-[#FFA43A] px-2 py-2 font-semibold">Add to wishlist</button>
              </div>
         </div>
        </div>
  </div>
    );
};

export default ProductCard;