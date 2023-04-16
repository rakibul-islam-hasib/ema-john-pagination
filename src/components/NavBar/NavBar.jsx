import React from 'react';
import logo from '../../assets/images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='bg-[#1C2B35] w-full sticky top-0 z-10 '>
            <div className="w-[90%] mx-auto flex items-center justify-between px-3 py-3">
                <div className="">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="text-white">
                    <ul className='flex gap-3'>
                        <li><NavLink className={({isActive})=> isActive ? 'active-class' : ''} to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'active-class' : ''} to="/shop">Order</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'active-class' : ''} to="/order-review">Order Review</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'active-class' : ''} to="/manage-inventory">Manage Inventory</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'active-class' : ''} to="/login">Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;