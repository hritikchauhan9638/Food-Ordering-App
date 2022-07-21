import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const click = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={showLinks ? 'open' : 'close'}>
        <img src={logo} alt='logo' />
        <div className='hiddenLinks'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact</Link>
        <button>
          <ReorderIcon onClick={click} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
