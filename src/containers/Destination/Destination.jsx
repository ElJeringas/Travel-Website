import React from 'react';
import destination_1 from '../../assets/destination-1.jpg';
import destination_2 from '../../assets/destination-2.jpg';
import destination_3 from '../../assets/destination-3.jpg';
import { RiMapPinLine } from "react-icons/ri";
import './Destination.css';
import { Fade } from 'react-awesome-reveal';
const Destination = () => {
  return (
    <section className='section__container destination__container' id='destination'>
        <h3 className='section__subheader'>TOP SELLINGS</h3>
        <h2 className='section__header'>Top Destinations</h2>
        <div className='destination__grid'>
        <Fade cascade damping={0.1} direction='up' triggerOnce>
            <div className='destination__card'>
                    <img src={destination_1} alt='destination'/>
                    <div className='destination__details'>
                        <div>
                            <h4>Rome,Italy</h4>
                            <h4><span>$</span>542</h4>
                        </div>
                        <p>
                            <span>
                                <RiMapPinLine size={20}/>
                            </span>
                            10 Days trip
                        </p>
                    </div>
                </div>
                <div className='destination__card'>
                    <img src={destination_2} alt='destination'/>
                    <div className='destination__details'>
                        <div>
                            <h4>Londion,UK</h4>
                            <h5><span>$</span>850</h5>
                        </div>
                        <p>
                            <span>
                                <RiMapPinLine size={20}/>
                            </span>
                            7 Days trip
                        </p>
                    </div>
                </div>
                <div className='destination__card'>
                    <img src={destination_3} alt='destination'/>
                    <div className='destination__details'>
                        <div>
                            <h4>Europa</h4>
                            <h4><span>$</span>600</h4>
                        </div>
                        <p>
                            <span>
                                <RiMapPinLine size={20}/>
                            </span>
                            12 Days trip
                        </p>
                    </div>
                </div>
        </Fade>
        </div>
    </section>
  )
}

export default Destination