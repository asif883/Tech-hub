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
import SectionTitle from "../SharedItems/SectionTitle";
import { Zoom } from "react-awesome-reveal";


const Categories = () => {
    const [categories , setCategory] = useState([]);
  
    useEffect(()=>{
        fetch('https://tech-hub-server-five.vercel.app/all-products')
        .then(res => res.json())
        .then(data => setCategory(data.categories))
    },[])


    return (
        <div className="my-6 lg:my-20">

             <SectionTitle
                heading='Shop By Category'
                subHeading="200+  unique products"
             ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">          
               <Zoom>
               {
                  categories?.map(( category , idx) =>
                    <Link to='/product' key={idx} className="card w-64 mx-auto border border-orange-300 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            {
                                category==='Smart Phone' && <><SlScreenSmartphone size={50}/></>
                            }
                            {
                                category==='Camera' && <><MdOutlinePhotoCamera size={50}/></>
                            }
                            {
                                category==='Audio' && <><MdOutlineSpatialAudio size={50}/></>
                            }
                            {
                                category==='Television' && <><PiTelevisionLight size={50}/></>
                            }
                            {
                                category==='Wearables' && <><MdOutlineDevicesOther size={50}/></>
                            }
                            {
                                category==='Computer' && <><RiComputerLine size={50}/></>
                            }
                        </h2>
                        
                        <div className="flex items-center justify-between">
                          <p className='font-semibold text-xl'>{category}</p>
                          <div className="badge bg-orange-400 badge-lg text-white">33</div>    
                        </div>
                    </div>
                  </Link>
                )
               }
               </Zoom>
             
            </div>
        </div>
    );
};

export default Categories;