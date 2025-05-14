import React from 'react';
import useAuth from '../Hooks/useAuth';

const Sort = ({setSort}) => {
    const {isDarkMode} = useAuth()
    return (
        <div>
            <select className={`select w-48 border-2 border-gray-200 ${isDarkMode ? 'text-black bg-gray-300' : 'bg-gray-100'}`} onChange={(e) => setSort(e.target.value)}>          
                <option value='decs'>Price Low to High</option>
                <option value='asc'>Price High to Low</option>
           </select>
        </div>
    );
};

export default Sort;