import React, { Fragment } from "react";
import { Routes, Route, NavLink, useParams} from 'react-router-dom';
import Food from './food.js'
import Dog from './dog.js'
import Life from './life.js'
import Home from './home.js'
import ad from './pictures/ad.jpg'
//import Register component
import Register from './register.js'  
//importing hooks from react
import "./App.css";



function App() {
  let { id } = useParams();
  return (
    <>    
        <div className = 'angry-grid'>
{/* Available Rooms Start */}

          <div id = 'item-0'>
            <center><h2>Available Rooms</h2></center>
          </div>
{/* Available Rooms End */}

{/* Main Chat Header */}
          <div id = 'item-1'>
            <center><h2>Chat</h2></center>
          </div>
          
{/* Chat Message */}
          <div id = 'item-2'>
            {/* <center><h3>Messages</h3></center> */}
            <Register/> 
            </div>

{/* Available Rooms Navigation */}
          <div id = 'item-3'> 
            <button><NavLink to='/home'>Home Page</NavLink></button>
            <button><NavLink to='/dog'>Dog Page</NavLink></button>
            <button><NavLink to='/food'>Food Page</NavLink></button>
            <button><NavLink to='/life'>Life Page</NavLink></button>
          </div>
            <Routes>
              <Fragment> 
                <Route path='/' element={<Home />} /> 
                <Route path='home' element={<Home />} />             
                <Route path='dog' element={<Dog />} />             
                <Route path='food' element={<Food />} />             
                <Route path='life' element={<Life />} />             
              </Fragment>
            </Routes>  
{/* Ad Picture */}
          <div id = 'item-4'>
            <img src={ad}/>
          </div>

{/* Username, message Send and Refresh */}
        <div id = 'item-5'>
            <center><p>
              {/* route on the server is create */}
              {/* our username / message sent etc */}
              <form action="http://localhost:5000/create" method="POST">
                  <input
                    type="text"
                    // req.body.userName on the server
                    name="userName"
                    placeholder="Username"
                  />
                      <input
                    type="text"
                    // req.body.msg on the server
                    name="msg"
                    placeholder="User message to be sent?"
                  />
                  {/*hidden input to get the current room URL */}
                  <input type="hidden" 
                  name="currentRoom"
                  value= {id}
                  />
                  {/* Send button */}
                  <input type="submit" value="SEND"/>
                  {/* Refresh button */}
                  <input type="button" value="REFRESH"/>
              </form>
            </p></center>
          </div>
        </div>         
    </>
  );
}
  

export default App;
