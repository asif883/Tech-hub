import { FiFilter } from "react-icons/fi";

const Filter = ({setCategory, setBrand , newBrand, newCategory}) => {
    console.log(newBrand);
    return (
        <div>
            <div className="dropdown dropdown-left dropdown-end">
                <div tabIndex={0} role="button" className=""><p  className='p-3 border-2 w-48 rounded-md border-orange-300  text-orange-400 mb-6 flex gap-2 items-center justify-center'><FiFilter/> Filter </p></div>
                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-6 shadow">
                <div className='flex flex-col gap-2 items-center'>
            <select className="select w-40 border-2 border-orange-300" onChange={(e) => setCategory(e.target.value)}>   

                 <option selected disabled>Categories</option>

                 {
                    newCategory?.map((category) =>
                        <option
                         key={category} 
                         value={category}
                         >
                            {category}
                         </option>  
                        
                    )
                 }
           </select>
            <select className="select w-40 border-2 border-orange-300" onChange={(e)=> setBrand(e.target.value)}>  
            <option selected disabled>Brand</option>
                 {
                    newBrand?.map((brand , idx) =>
                        <option key={idx} value={brand}>{brand}</option>  
                    )
                 }
           </select>
            </div>
                </ul>
            </div>
        </div>
    );
};

export default Filter;