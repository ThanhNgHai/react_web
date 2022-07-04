import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } 
    else {
      setButton(true);
    }
  };

  useEffect(() => {showButton()}, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link 
            to='/home' 
            className='navbar-logo' 
            onClick={closeMobileMenu}
          >
            LOVE MUSIC
            <i class="fa-solid fa-headphones"></i>
          </Link>
          <div 
            className='menu-icon' 
            onClick={handleClick}
          >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
                to='/home' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/korea'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Korea
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/china'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                China
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/japan'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Japan
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/thailand'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Thailand
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/us-uk'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                US - UK
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-sign-up'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
