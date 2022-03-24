import React, { Fragment } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import Food from './food.js'
import Dog from './dog.js'
import Life from './life.js'
import Home from './home.js'
import ad from './pictures/ad.jpg'
import "./App.css";

function App() {
  return (
    <>    
      <center><h1>React Chat</h1></center>
      <div className = 'wrapper'>

          <div className = 'one'>
            <center><h2>Available Rooms</h2></center>
          </div>

          <div className = 'two'>
            <center><h2>Current Room</h2></center>
          </div>

          <div className = 'three'>
            <div className = 'nav-container'> 
              <div className = 'buttons'>
                <button><NavLink to='/home'>Home Page</NavLink></button>
                <button><NavLink to='/dog'>Dog Page</NavLink></button>
                <button><NavLink to='/food'>Food Page</NavLink></button>
                <button><NavLink to='/life'>Life Page</NavLink></button>
              </div>
              <Routes>
                <Fragment>  
                  <Route path='home' element={<Home />} />             
                  <Route path='dog' element={<Dog />} />             
                  <Route path='food' element={<Food />} />             
                  <Route path='life' element={<Life />} />             
                </Fragment>
              </Routes>
            </div>
          </div>

          <div className id = 'four'>
            <center><h3>chat</h3></center>
          </div>

          <div className id = 'five'>
          <center><img id='ad' src={ad} alt='' /></center>
          </div>

          <div className id = 'six'>
            <center><p>
              our username / message sent etc
            </p></center>
          </div>
      </div>      
    </>
  );
}

export default App;
