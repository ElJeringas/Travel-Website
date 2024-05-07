import React, { useState } from 'react';
import { FaHiking } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import './NavBar.css';

const NavBar = () => {
const [isOpen, setIsOpen] = useState(false);

const  Menu = () => {
    setIsOpen(!isOpen);
}

  return (
    <nav>
        <div className='nav__header'>
            <div className='nav__logo'>
                <a href='#' className='logo'>Tour<span>ism</span><span><FaMapSigns size={20} color='green'/></span></a>
            </div>
            <div className='nav__menu__btn'onClick={Menu}>
                <FaHiking size={25} color='white'/>
            </div>
        </div>
        {isOpen &&
            <ul className={isOpen ? "nav__links" : "nav__links-open"} id='nav-links'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#service'>Services</a></li>
                <li><a href='#destination'>Destination</a></li>
                <li><a href='#trip'>Trips</a></li>
                <li><a href='#clients'>Clients</a></li>
            </ul>
        }
    </nav>
  )
}

export default NavBar