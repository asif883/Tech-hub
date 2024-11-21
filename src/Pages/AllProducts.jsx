import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Components/Loading';
import SearchBar from '../Components/Searchbar';
import ProductCard from '../Components/ProductCard';
import Sort from '../Components/Sort';


const AllProduct = () => {
    const [products , setProduct] = useState([]);
    const [loading , setLoading] = useState(true)
    const [Search , setSearch] =useState('')
    const [sort , setSort] =useState('decs')

    
     
    useEffect(()=>{
        setLoading(true)
        const fetch =async()=>{
            axios.get(`http://localhost:4000/all-products?title=${Search}&sort=${sort}`)
            .then(res =>{
                console.log(res.data);
                setProduct(res.data.products)
                setLoading(false)
            })
            
        }
       
        fetch()
    },[Search , sort])

    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.search.value)
        e.target.search.value= ''
    }

    const handleReset = ()=>{
        setSearch('')
        setSort('')
        window.location.reload()
    }
    
  
    return (
        <div className='container mx-auto'>
            <div className='text-center my-8'>
                <h1 className="text-3xl font-bold">ALL Product</h1>
            </div>
            <div className='flex items-center justify-between mb-2'> 
                <SearchBar handleSearch={handleSearch}/>
                <Sort setSort={setSort}></Sort>
            </div>
            <button onClick={handleReset} className='p-3 border rounded-md border-orange-300  text-orange-400 mb-6'>Reset</button>
            <div>
                
                <div>

                        {
                            loading ?( <Loading/>)
                            :( <>
                            {
                              products.length === 0 ? 
                              (<div>
                                  <h1 className="text-2xl text-red-500 font-bold text-center min-h-screen flex items-center justify-center">No product found</h1>
                              </div>) :

                              (<div className='grid gap-16 grid-cols-4'>
                         {
                            products.map((product, idx)=>
                            ( <ProductCard key={idx} product={product}></ProductCard>  ))
                         }
                              </div>) 
                            }
                                </>)
                        }
                    
                        
                </div>
            </div>
        </div>
    );
};

export default AllProduct;