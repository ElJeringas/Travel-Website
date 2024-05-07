import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './containers/Header/Header';
import Ourservices from './containers/OurServices/Ourservices';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Ourservices/>
    </div>
  )
}

export default App