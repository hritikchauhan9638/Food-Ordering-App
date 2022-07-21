import React from 'react';
import '../styles/Menu.css';
import { Data } from '../data/data';
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className='menu'>
      <div className='menuTitle'>
        <div className='menuList'>
          {Data.map((menuItem, index) => {
            return <MenuItem key={index} {...menuItem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
