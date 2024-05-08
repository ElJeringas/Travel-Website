import React from 'react';
import './OurServices.css';
import weather from '../../assets/weather.png'
import plane from '../../assets/plane.png'
import event from '../../assets/event.png'
import customisation from '../../assets/customisation.png'
import { Fade } from 'react-awesome-reveal';

const Ourservices = () => {
  return (
    <section className='section__container service__container' id='service'>
        <h3 className='section__subheader'>CATEGORY</h3>
        <h2 className='section__header'>We Offer Best Services</h2>
        <div className='service__grid'>
        <Fade damping={0.7}>
        <Fade duration={1000}>
                <div className='service__card'>
                    <img src={weather} alt='service'/>
                    <h4>Calculated Weather</h4>
                    <p>Excepteur aute consectetur ut commodo.</p>
                </div>
            </Fade>
            <Fade duration={1000}>
                <div className='service__card'>
                    <img src={plane} alt='service'/>
                    <h4>Flight assistance</h4>
                    <p>Excepteur aute consectetur ut commodo.</p>
                </div>
            </Fade>
            <Fade duration={1000}>
                <div className='service__card'>
                    <img src={event} alt='service'/>
                    <h4>Local Events</h4>
                    <p>Excepteur aute consectetur ut commodo.</p>
                </div>
            </Fade>
            <Fade duration={1000}>
                <div className='service__card'>
                    <img src={customisation} alt='service'/>
                    <h4>Customisation</h4>
                    <p>Excepteur aute consectetur ut commodo.</p>
                </div>
            </Fade>
        </Fade>
        </div>
    </section>
  )
}

export default Ourservices