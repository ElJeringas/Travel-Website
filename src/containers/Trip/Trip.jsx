import React from 'react';
import trip from '../../assets/trip.png'
import { FaRoute } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { MdFlightTakeoff } from "react-icons/md";
import './Trip.css';
import { Fade } from 'react-awesome-reveal';
const Trip = () => {
  return (
    <section className='section__container trip__container' id='trip'>
        <div className='trip__image'>
            <Fade direction='right'>
                <img src={trip} alt='trip'/>
            </Fade>
        </div>
        <div className='trip__content'>
            <h3 className='section__subheader'>EASY & FAST</h3>
            <h2 className='section__header'>Book your next trip in 3 easy steps</h2>

            <Fade cascade damping={0.3} direction='down' delay={50} triggerOnce>
                <ul className='trip__list'>
                    <li>
                        <span>
                            <FaRoute size={20}/>
                        </span>
                        <div>
                            <h4>Choose Destination</h4>
                            <p>Sit aliqua excepteur commodo officia.</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <MdPayment size={22}/>
                        </span>
                        <div>
                            <h4>Make Payment</h4>
                            <p>Aliqua incididunt duis est adipisicing adipisicing consectetur id fugiat.</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <MdFlightTakeoff size={22}/>
                        </span>
                        <div>
                            <h4>Confirm flight</h4>
                            <p>Exercitation est ipsum aliqua eu nisi esse in ea excepteur tempor qui nulla.</p>
                        </div>
                    </li>
                </ul>
            </Fade>
        </div>
    </section>
  )
}

export default Trip