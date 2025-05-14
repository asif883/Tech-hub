// import Filter from "../Components/Filter";
import axios from "axios";
import FilterProduct from "../Components/FilterProduct";
import Sort from "../Components/Sort";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import useAuth from "../Hooks/useAuth";


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
                    console.log(res.data);
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
                            <p className="text-xl font-medium">Shop</p>
                            <Sort/>
                        </div>

                        <div className="grid gap-3 grid-cols-1 lg:grid-cols-2  pt-5">
                            {
                                products?.map((product) => <div className={`border rounded p-1 hover:shadow-md
                                ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`} key={product?._id}>
                                    <div className="flex items-center gap-3">
                                        <img className="object-cover w-32 md:w-48 h-32 md:h-40" src={product?.imageURL} alt="" />
                                        <div className="space-y-1 relative w-full">
                                            <p className="text-sm md:text-lg font-semibold">{product?.title}</p>
                                            <p className="text-xs md:text-base
                                             font-semibold text-gray-600">Price: ${product?.price}</p>
                                            <p className="text-xs md:text-base font-medium text-gray-600">Brand: {product?.brand}</p>
                                            <div className="flex items-center gap-5 mt-3 absolute -top-8 right-5">
                                                <MdOutlineShoppingCart/>
                                                <FaRegHeart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
             </div>
        </div>
    );
};

export default Shop;