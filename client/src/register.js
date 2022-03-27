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
        <div>
          <div id="entries">
            <table>
              <thead>
                <tr>
                </tr>
              </thead>
              <tbody>
                {/* programmatically renders every entry in the table */}
                {/* creates a table with name and msg when they are entered into the database */}
                {allEntries.map((entry) => {
                  return (
                  <tr key={entry._id}>
                    {/* <tr>{entry.date}</tr> */}
                    <tr>Username: {entry.userName}</tr>
                    <tr>Message: {entry.msg}</tr>
                    <td>
                      {" "}
                      {/* programmatically uses the Mongo _id of the entry to access the correct document in the database */}
                      {/* <form action={`/delete/${entry._id}`} method="POST">
                        <button>Scribble this out?</button>
                      </form> */}
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
