import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to='/'>
                <img className='hidden md:block' src={logo} alt="logo" width='100px' height='100px' />
            </Link>
        </>
    )
};

export default Logo;