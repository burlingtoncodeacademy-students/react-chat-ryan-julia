//importing express
const express = require("express");

//importing mongoose
const mongoose = require("mongoose")

//importing cors to resolve any CORS errors in the browser
const cors = require("cors")

//setting up default port
const port = process.env.PORT || 5000;

//binding express to a variable
const app = express();

//importing message schema
const Message = require('./Message.js')

//creating the intial connection to the database
mongoose.connect("mongodb://localhost:27017/chat")

//init the database through the connectino construstor, stored in a variable
const db = mongoose.connection

//binds error message to the connection variable to print if an error occurs
db.on('error', console.error.bind(console, 'connection error'))

//creating the entry model utilizing the entry schema and entries collection 
const Entry = mongoose.model("entries", Message)

//middleware functions
app.use(express.static("./build"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`) 
})

//creating API route for the front end to access the entries from the database

