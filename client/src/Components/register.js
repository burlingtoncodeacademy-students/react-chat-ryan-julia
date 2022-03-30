//----necessary imports
//importing hooks from React
import { useState, useEffect } from "react";
import "../App.css";

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
            <tbody>
              {allEntries.map((entry) => {
                return (
                <tr key={entry._id}>
                  <td>Username: {entry.userName}</td>
                  <td>Message: {entry.msg}</td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
