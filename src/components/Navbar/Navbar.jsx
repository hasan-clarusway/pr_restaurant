import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => { 
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="blc__navbar">
      <div className="blc__navbar-logo">
        <h4>MARY'S KITCHEN</h4>
      </div>
        <ul className="blc__navbar-links">
          <li className="p__sans"><a href="#home">Home</a></li>
          <li className="p__sans"><a href="#about">About</a></li>
          <li className="p__sans"><a href="#menu">Menu</a></li>
          <li className="p__sans"><a href="#awards">Awards</a></li>
          <li className="p__sans"><a href="#contact">Contact</a></li>
          <li className="p__sans"><a href="#gallery">Gallery</a></li>
        </ul>
        <div className="blc__navbar-login">
          <a href="#login" className='p__sans'>Log In / Register</a>
          <div />
          <a href="/" className="p__sans">Book Table</a>
        </div> 
        <div className="blc__navbar-smallscreen">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="blc__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className="blc__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
            </ul>
           </div> 
          )}          
        </div>
    </nav>
  );
}
export default Navbar;
