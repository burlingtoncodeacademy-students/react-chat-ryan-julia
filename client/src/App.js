import React, { Fragment } from "react";
import { Routes, Route, NavLink } from 'react-router-dom';
import Food from './food.js'
import Dog from './dog.js'
import Life from './life.js'
import Home from './home.js'
//  
//importing hooks from react
import "./App.css";

function App() {
  return (
    <>    
      <center><h1>React Chat</h1></center>
        <div className = 'angry-grid'>
{/* Available Rooms Start */}

          <div id = 'item-0'>
            <center><h2>Available Rooms</h2></center>
          </div>
{/* Available Rooms End */}

{/* Main Chat Header */}
          <div id = 'item-1'>
            <center><h2>Main Chat</h2></center>
          </div>
          
{/* Chat Message */}
          <div id = 'item-2'>
            {/* <center><h3>Messages</h3></center> */}
            <div id="entries">
              <table>
                  <tr>
                    <th>Username</th>
                    <th>Message</th>
                  </tr>
                  {/* programmatically renders every entry in the table */}
                {/* creates a table with name, date and msg when they are entered into the database */}
                {allEntries.map((entry) => {
                  return (
                    <tr key={entry._id}>
                      <td>{entry.date}</td>,
                      <td>{entry.UserName}</td>,
                      <td>{entry.msg}</td>
                    </tr> 
                  )}
                )}
              </table>
            </div>  
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
            ad
          </div>

{/* Username, messagem Send and Refresh */}
          <div id = 'item-5'>
            <center><p>
              {/* route on the server is create */}
              {/* our username / message sent etc */}
              <form action="/create" method="POST">
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
                      <input type="submit" value="SEND"/>
                      <input type="button" value="REFRESH"/>
                      </form>
            </p></center>
          </div>
        </div>         
    </>
  );
}


export default App;
