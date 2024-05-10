import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './containers/Header/Header';
import Ourservices from './containers/OurServices/Ourservices';
import Destination from './containers/Destination/Destination';
import Trip from './containers/Trip/Trip';
import Client from './containers/Testimonial/Client';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Ourservices/>
      <Destination/>
      <Trip/>
      <Client/>
      <Footer/>
    </div>
  )
}

export default App