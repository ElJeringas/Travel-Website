import React from 'react';
import header from '../../assets/header.png'
import { FaPlay } from "react-icons/fa";
import './Header.css';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  return (
    <header className='section__container header__container' id='home'>
        <div className='header__image'>
            <Fade delay={1} direction='right'v>
                <img src={header} alt='header'/>
            </Fade>
        </div>
        <div className='header__content'>
        <Fade delay={20} direction='down'>
            <h3 className='section__subheader'>Best destinations around the World</h3>
            <h1>Travel, enjoy and live a new full life</h1>
            <p>Quis ea labore enim exercitation dolor officia ullamco nostrud adipisicing mollit eu.</p>
            <div className='header__btn'>
                <button className='btn'>Find More</button>
                <a href='#'>
                    <span><FaPlay size={20}/></span>
                    Play Demo
                </a>
            </div>
        </Fade>
        </div>
    </header>
  )
}

export default Header