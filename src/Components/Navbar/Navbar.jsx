import React from 'react';
import logo from './../../assets/logo.png';
import cart from './../../assets/icons/cart-icon.png';

const Navbar = () => {

    const navItems = <>
        <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>About us</a></li>
        <li tabIndex={0}>
            <select className="w-full max-w-xs bg-transparent">
                <option selected>EN</option>
                <option>BN</option>
            </select>
        </li>
        <li> <a className="btn rounded-full primary-btn text-white md:hidden">Login</a></li>
    </>


    return (
        <div className='navbar-bg'>
            <div className="navbar shadow-sm sm:px-0 md:px-24 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="normal-case text-xl">
                        <img  style={{width:"141px",height:"46px"}} src={logo} alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <a className="btn rounded-full primary-btn btn-width text-white hidden md:flex">Login</a>
                    <a className="btn rounded-full primary-btn cart-btn relative">
                        <span className='absolute -top-2 -right-2 p-2 px-3 rounded-full' style={{ background: '#FF8B01' }}>2</span>
                        <img src={cart} alt="cart-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar