import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({handleSearch}) => {
    return (
        <form onSubmit={handleSearch}>
            <label className='flex items-center '>
                <input type="text" name='search' className="p-3 border-2 border-orange-300 rounded-l-md" placeholder="Search" />
                <button className='p-4 border-2 border-orange-300 rounded-r-md bg-[#FFA43A] text-white'><FaSearch></FaSearch></button>
            </label>
        </form>
    );
};

export default SearchBar;