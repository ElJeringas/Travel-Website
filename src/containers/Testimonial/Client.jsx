import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import client_1 from '../../assets/client-1.jpg';
import client_2 from '../../assets/client-2.jpg';
import client_3 from '../../assets/client-3.jpg';
import './Client.css';
const Client = () => {
  return (
    <section className='section__container client__container'>
      <div className='client__content'>
        <h3 className='section__subheader'>TESTIMONIALS</h3>
        <h2 className='section__header'>Our Clients</h2>
      </div>
      <div className='swiper'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
        >
          <SwiperSlide >
          <div className='client__card'>
                    <img src={client_1} alt='client'/>
                    <div className='client__details'>
                        <div>
                            <h4>Marian Manson</h4>
                        </div>
                        <p>
                            Incredible Experience!
                        </p>
                    </div>
                </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className='client__card'>
                    <img src={client_2} alt='client'/>
                    <div className='client__details'>
                        <div>
                            <h4>Rich Cooper</h4>
                        </div>
                        <p>
                            Amazing!
                        </p>
                    </div>
                </div>
          </SwiperSlide>
          <SwiperSlide >
          <div className='client__card'>
                    <img src={client_3} alt='client'/>
                    <div className='client__details'>
                        <div>
                            <h4>Paul Smith</h4>
                        </div>
                        <p>
                            Good trip and overall experience
                        </p>
                    </div>
                </div>
          </SwiperSlide>
{/*           <SwiperSlide>
            <div className='client__card'>
              <img src={client_2} alt='clients'/>
              <div className='client__card__content'>
                <p>Sunt voluptate esse nostrud aliqua ad magna elit occaecat minim qui tempor nisi veniam qui.</p>
                <h4>Emily Watson</h4>
                <h5>Nevada,US</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='client__card'>
              <img src={client_3} alt='clients'/>
              <div className='client__card__content'>
                <p>Sunt voluptate esse nostrud aliqua ad magna elit occaecat minim qui tempor nisi veniam qui.</p>
                <h4>Emily Watson</h4>
                <h5>Nevada,US</h5>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>

  )
}

export default Client