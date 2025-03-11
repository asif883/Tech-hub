import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css'
import NavEnd from './NavEnd';

const Nav = () => {
    return (
        <div className='bg-orange-50'>
              <div className="navbar container mx-auto py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-50 mt-3 w-28 p-2 shadow bg-opacity-50 text-white">
                        <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/product'>Product</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    </ul>
                    </div>
                    <Link to='/' className="text-xl md:text-2xl font-semibold hover:text-orange-400">Tech<span className='text-orange-400'>-</span>Hub</Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu-horizontal px-1 font-medium">
                     <li className='mr-5'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='mr-5'>
                      <NavLink to='/product'>Product</NavLink>
                    </li>
                    <li className='mr-5'>
                      <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <NavEnd></NavEnd>
                </div>
              </div>
        </div>
    );
};

export default Nav;