import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaMapSigns, FaWhatsapp } from "react-icons/fa";
import { ImInstagram } from 'react-icons/im';
import discover from '../../assets/app-store.jpg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='section__container footer__container'>
          <div className='footer__col'>
            <div className='footer__logo'>
            <a href='#' className='logo'>Tour<span>ism</span><span><FaMapSigns size={20} color='green'/></span></a>
            </div>
            <p>
              Anim veniam labore ea labore ad occaecat quis est fugiat aliqua dolor.Laborum velit magna ullamco cupidatat deserunt duis irure proident aliquip aliqua eu laborum enim.
            </p>
          </div>
          <div className='footer__col'>
            <h4>Company</h4>
            <ul className='footer__links'>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Mobile</a></li>
            </ul>
          </div>
          <div className='footer__col'>
            <h4>Contact</h4>
            <ul className='footer__links'>
              <li><a href='#'>Help/FAQ</a></li>
              <li><a href='#'>Press</a></li>
              <li><a href='#'>Affiliates</a></li>
            </ul>
          </div>
          <div className='footer__col'>
            <ul className='footer__socials'>
              <li>
                <a href='#'><FaFacebook/></a>
              </li>
              <li>
                <a href='#'><FaWhatsapp/></a>
              </li>
              <li>
                <a href='#'><FaInstagram/></a>
              </li>
            </ul>
            <h5>Discover our App</h5>
            <div className='footer__discover'>
              <a href='#'><img src={discover} alt='discover'/></a>
            </div>
          </div>
      </div>
      <div className='footer__bar'>
        Copyright ©️ 2024 Digital Canvas. All rights reserved
      </div>
    </footer>
  )
}

export default Footer