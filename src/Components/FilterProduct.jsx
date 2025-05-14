import { useState } from "react";
import useAuth from "../Hooks/useAuth";


const FilterProduct = ({setCategory, setBrand , newBrand, newCategory}) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const { isDarkMode } = useAuth()
    return (
        <div className="grid grid-cols-2 md:grid-cols-1">
          <fieldset className="fieldset p-2 w-40 md:w-48">
                <legend className="fieldset-legend font-semibold">Brand</legend>
                {
                    newBrand?.map((brand) =>  
                    <label key={brand} className="label flex gap-5 justify-start">
                        <input
                        type="checkbox"
                        className={`checkbox ${isDarkMode? 'border-gray-400' : 'border-gray-700'}`} 
                        value={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                            const { checked, value } = e.target;
                            const updated = checked
                            ? [...selectedBrands, value]
                            : selectedBrands.filter((item) => item !== value);
                            setSelectedBrands(updated);
                            setBrand(updated);
                        }}
                        />
                            {brand}
                    </label>
                )}
          </fieldset>
          <fieldset className="fieldset p-2 w-40 md:w-48">
                <legend className="fieldset-legend font-semibold">Category</legend>
                {
                    newCategory?.map((category) =>  
                    <label key={category} className="label flex gap-5 justify-start">
                        <input 
                        type="checkbox"
                        value={category}  
                        className={`checkbox ${isDarkMode? 'border-gray-400' : 'border-gray-700'}`} 
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => {
                        const value = e.target.value;
                        const checked = e.target.checked;

                        const updated = checked
                            ? [...selectedCategories, value]
                            : selectedCategories.filter((item) => item !== value);

                        setSelectedCategories(updated);
                        setCategory(updated); 
                        }}
                        />
                            {category}
                    </label>
                )}
          </fieldset>
        </div>
    );
};

export default FilterProduct;