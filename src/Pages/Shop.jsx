import axios from "axios";
import FilterProduct from "../Components/FilterProduct";
import Sort from "../Components/Sort";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";


const Shop = () => {

        const [products , setProduct] = useState([]);
        const [loading , setLoading] = useState(true)
        const [Search , setSearch] =useState('')
        const [sort , setSort] =useState('decs')
        const [brand , setBrand] =useState([])
        const [category , setCategory] =useState([])
    
        const [ newBrand , setNewBrand] = useState([])
        const [ newCategory , setNewCategory] = useState([])
        const { isDarkMode } = useAuth()
        
         
        useEffect(()=>{
            setLoading(true)
            const fetch =async()=>{
                axios.get(`https://tech-hub-server-five.vercel.app/all-products`, {
                params: {
                    title: Search,
                    sort,
                    brand: brand.join(','),      
                    category: category.join(',')  
                }
            })

                .then(res =>{
                    // console.log(res.data);
                    setProduct(res.data.products)
                    setNewBrand(res.data.brands)
                    setNewCategory(res.data.categories)
                    setLoading(false)
                })
                
            }
           
            fetch()
        },[Search , sort, brand, category])
    
    return (
        <div className="container mx-auto mt-10">
             <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                 {/* left side */}
                    <div className={`border p-5 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <FilterProduct
                         setBrand={setBrand}
                         setCategory={setCategory}
                         newBrand={newBrand}
                         newCategory={newCategory} 
                        />
                    </div>
                {/* right side */}
                    <div className={`col-span-1 md:col-span-2 lg:col-span-3 border px-4 py-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className={`px-5 py-6  flex items-center justify-between ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                            <p className="text-xl font-medium">Product Gallery</p>
                            <Sort setSort={setSort}/>
                        </div>

                        {
                            loading 
                            ? 
                            (<Loading/>)
                            :
                            (<>
                              {
                                products?.length === 0 
                                ? 
                                <div>
                                    <h1 className="text-2xl text-red-500 font-bold text-center min-h-screen flex items-center justify-center">No product found</h1>
                                </div>
                                :
                                <div className="grid gap-3 grid-cols-1 lg:grid-cols-2  pt-5">
                                {
                                    products?.map((product) => (
                                        <ProductCard key={product?._id} product={product}></ProductCard>
                                    ))
                                }
                             </div>
                              }
                            </>)
                        }
                    </div>
             </div>
        </div>
    );
};

export default Shop;