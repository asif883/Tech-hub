// import Filter from "../Components/Filter";
import axios from "axios";
import FilterProduct from "../Components/FilterProduct";
import Sort from "../Components/Sort";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


const Shop = () => {

        const [products , setProduct] = useState([]);
        const [loading , setLoading] = useState(true)
        const [Search , setSearch] =useState('')
        const [sort , setSort] =useState('decs')
        const [brand , setBrand] =useState([])
        const [category , setCategory] =useState([])
    
        const [ newBrand , setNewBrand] = useState([])
        const [ newCategory , setNewCategory] = useState([])
    
        
         
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
             <div className="grid gap-5 grid-cols-4">
                 {/* left side */}
                    <div className="border min-h-screen p-5">
                        <FilterProduct
                         setBrand={setBrand}
                         setCategory={setCategory}
                         newBrand={newBrand}
                         newCategory={newCategory} 
                        />
                    </div>
                {/* right side */}
                    <div className="col-span-3 border px-4 py-2">
                        <div className="px-5 py-6 bg-gray-50 flex items-center justify-between">
                            <p className="text-xl font-medium">Shop</p>
                            <Sort/>
                        </div>

                        <div className="grid gap-3 grid-cols-1 md:grid-cols-2  pt-5">
                            {
                                products?.map((product) => <div className="border rounded p-1 hover:shadow-md" key={product?._id}>
                                    <div className="flex items-center gap-3">
                                        <img className="object-cover w-48 h-40" src={product?.imageURL} alt="" />
                                        <div className="space-y-1 relative w-full">
                                            <p className="text-lg font-semibold">{product?.title}</p>
                                            <p className="font-semibold text-gray-600">Price: ${product?.price}</p>
                                            <p className="font-medium text-gray-600">Brand: {product?.brand}</p>
                                            <div className="flex items-center gap-5 mt-3 absolute -top-9 right-5">
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