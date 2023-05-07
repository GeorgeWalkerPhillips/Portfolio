import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link';
import logo from './images/Logo.jpg';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link 
          to='/#hero' 
          className='navbar-logo' 
          onClick={closeMobileMenu}
          smooth
          >         
            <img src={logo}></img>
                GWP
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link
              to="/#about"
              className="nav-links"
              onClick={closeMobileMenu}
              smooth
            >
              <a style={{ color: "aquamarine" }}>// 01.</a>About
            </Link>
            </li>
            <li className='nav-item'>
              <Link
                to="/#education"
                className='nav-links'
                onClick={closeMobileMenu}
                smooth
              >
                <a style={{ color: 'aquamarine' }}>// 02.</a>Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/#project'
                className='nav-links'
                onClick={closeMobileMenu}
                smooth
              >
                <a style={{ color: 'aquamarine' }}>// 03.</a>Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/#contact'
                className='nav-links'
                onClick={closeMobileMenu}
                smooth
              >
                <a style={{ color: 'aquamarine' }}>// 04.</a>Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;