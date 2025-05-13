import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Components/Loading';
import SearchBar from '../Components/Searchbar';
import ProductCard from '../Components/ProductCard';
import Sort from '../Components/Sort';
import Filter from '../Components/Filter';


const AllProduct = () => {
    const [products , setProduct] = useState([]);
    const [loading , setLoading] = useState(true)
    const [Search , setSearch] =useState('')
    const [sort , setSort] =useState('decs')
    const [brand , setBrand] =useState('')
    const [category , setCategory] =useState('')

    const [ newBrand , setNewBrand] = useState([])
    const [ newCategory , setNewCategory] = useState([])

    
     
    useEffect(()=>{
        setLoading(true)
        const fetch =async()=>{
            axios.get(`https://tech-hub-server-five.vercel.app/all-products?title=${Search}&sort=${sort}&brand=${brand}&category=${category}`)
            .then(res =>{
                console.log(res.data);
                setProduct(res.data.products)
                setNewBrand(res.data.brands)
                setNewCategory(res.data.categories)
                setLoading(false)
            })
            
        }
       
        fetch()
    },[Search , sort, brand, category])

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
            <div className='flex gap-4 md:gap-1 flex-col md:flex-row items-center justify-between mb-2'> 
                <SearchBar handleSearch={handleSearch}/>
                <Sort setSort={setSort}></Sort>
            </div>
            <div className='flex  flex-col-reverse md:flex-row items-center justify-between mb-2'> 
                 <button onClick={handleReset} className='p-3 border rounded-md border-orange-300  text-orange-400 mb-6'>Reset</button>
                 <Filter 
                 setBrand={setBrand}
                 setCategory={setCategory}
                 newBrand={newBrand}
                 newCategory={newCategory}       
                 />
                
            </div>
            
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

                              (<div className='grid gap-6 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
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