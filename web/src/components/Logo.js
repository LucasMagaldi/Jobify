import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

export const Logo = () => {
  return (
    <Link to='/'>
        <img src={logo} alt='logo' className='logo'/>
    </Link >
  )
}

export default Logo;