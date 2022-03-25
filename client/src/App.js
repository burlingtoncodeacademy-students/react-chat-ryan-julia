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

          <div id = 'item-0'>
            <center><h2>Available Rooms</h2></center>
          </div>

          <div id = 'item-1'>
            <center><h2>Current Room</h2></center>
          </div>

          <div id = 'item-2'> 
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
          

          <div id = 'item-3'>
            <center><h3>chat</h3></center>
          </div>

          <div id = 'item-4'>
          <center><img id='ad' src={ad} alt='' /></center>
          </div>

          <div id = 'item-5'>
            <center><p>
              our username / message sent etc
            </p></center>
          </div>
        </div>          
    </>
  );
}

export default App;
