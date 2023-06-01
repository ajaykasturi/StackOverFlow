import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import search from '../../assets/searchicon.svg';
const Navbar=()=>{

    return  (
    <nav>
        <div className="navbar">
            <Link to='/' className='nav-item nav-btn'>
                <img src={logo} alt="stackoverflow-logo" />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type='text' placeholder='Search...' />
                <img src={search} alt='search-icon' width=18/>
            </form>
        </div>
    </nav>
    );
};

export default Navbar;