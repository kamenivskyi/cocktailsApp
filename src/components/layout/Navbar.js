import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../layout/Button';

import logo from '../../assets/drink-logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm sticky-top navbar-dark bg-primary'>
      <NavLink to='/' className='navbar-brand'>
        <img src={logo} alt='Drink' />
        Cocktail-app
      </NavLink>
      <Button
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarCollapse'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </Button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to='/' exact className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/random' className='nav-link'>
              Random
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/categories' className='nav-link'>
              Categories
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
