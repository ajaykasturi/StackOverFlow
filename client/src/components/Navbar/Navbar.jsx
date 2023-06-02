import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import search from '../../assets/searchicon.svg';
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'
const Navbar=()=>{
    var User=null;
    return  (
    <nav>
        <div className="navbar">
            <Link to='/' className='nav-item nav-logo '>
                <img src={logo} alt="stackoverflow-logo" />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type='text' placeholder='Search...' />
                <img src={search} alt='search-icon' width="18" className='search-icon' />
            </form>
            {
                User===null ? 
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                <>
                <Link to='/' className=''><Avatar>A</Avatar></Link> :
                <Button >Log out</Button>
                </>
            }
        </div>
    </nav>
    );
};

export default Navbar;
