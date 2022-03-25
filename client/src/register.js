//----necessary imports
//importing hooks from React
import { useState, useEffect } from "react";
import "./App.css";

//---component function
export default function Registry(props) {
  //uses state to hold the result of the fetch
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    //fetches information from a local API route set up on the server
    fetch("http://localhost:5000/allentries")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllEntries(json);
      });
  }, []);

  return (
    <>
      {/* <div id="entries">
              <table>
                  <tr>
                    <th>Username</th>
                    <th>Message</th>
                  </tr>
                  {/* programmatically renders every entry in the table */}
      {/* creates a table with name, date and msg when they are entered into the database */}
      {/* {allEntries.map((entry) => { */}
      {/* return ( */}
      {/* <tr key={entry._id}> */}
      {/* <td>{entry.date}</td>, */}
      {/* <td>{entry.UserName}</td>, */}
      {/* <td>{entry.msg}</td> */}
      {/* </tr>  */}
      {/* )} */}
      {/* )} */}
      {/* </table> */}
      {/* // </div>   */}  
      
        <div>
          <div id="entries">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Message</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {/* programmatically renders every entry in the table */}
                {/* creates a table with name, date and msg when they are entered into the database */}
                {allEntries.map((entry) => {
                  return (
                  <tr key={entry._id}>
                    <td>{entry.name}</td>
                    <td>{entry.date}</td>
                    <td>{entry.msg}</td>
                    <td>
                      {" "}
                      {/* programmatically uses the Mongo _id of the entry to access the correct document in the database */}
                      <form action={`/delete/${entry._id}`} method="POST">
                        <button>Scribble this out?</button>
                      </form>
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}
