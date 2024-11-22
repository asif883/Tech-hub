import { MdProductionQuantityLimits } from "react-icons/md";
import { useEffect, useState } from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { PiTelevisionLight } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineDevicesOther } from "react-icons/md";
import { MdOutlineSpatialAudio } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


const Categories = () => {
    const [categories , setCategory] = useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:4000/all-products')
        .then(res => res.json())
        .then(data => setCategory(data.categories))
    },[])


    return (
        <div className="my-3 lg:my-20 flex gap-8 lg:gap-1 flex-col lg:flex-row items-center">
            <div className="flex-1">
                <h1 className="text-3xl font-semibold mb-4">Shop <br /> By Categories</h1>
                <div className="flex gap-2 items-center">
                    <MdProductionQuantityLimits size={36}/>
                    <p className="text-gray-600">200+ <br /> unique products</p>
                </div>
                <div className="w-40 mt-6 font-semibold border-b-2 border-orange-300 rounded-xl p-2 hover:border-orange-500 hover:text-orange-500 text-orange-400 flex items-center gap-2">
                    <>All Categories</> <MdKeyboardDoubleArrowRight/>
                </div>

            </div>
            <div className="flex-1 flex flex-col lg:flex-row gap-6 items-center">          
               {
                  categories?.map(( category , idx) =>
                    <Link to='/product' className="text-center
                    " key={idx}>
                        <div className="border bg-gray-100 rounded-lg border-orange-200 p-16 lg:p-10">
                            {
                                category ==="Smart Phone" && <SlScreenSmartphone className="text-orange-400" size={64}/>
                            }
                            {
                                category ==="Camera" && <MdOutlinePhotoCamera className="text-orange-400" size={64}/>
                            }
                            {
                                category ==="Television" && <PiTelevisionLight className="text-orange-400" size={64}/>
                            }
                            {
                                category ==="Computer" && <RiComputerLine className="text-orange-400" size={64}/>
                            }
                            {
                                category ==="Wearables" && <MdOutlineDevicesOther className="text-orange-400" size={64}/>
                            }
                            {
                                category ==="Audio" && <MdOutlineSpatialAudio className="text-orange-400" size={64}/>
                            }
                        </div>
                        <p className="font-semibold text-gray-600 mt-2 text-xl lg:text-lg"> {category}</p>
                    </Link>
                )
               }
             
            </div>
        </div>
    );
};

export default Categories;