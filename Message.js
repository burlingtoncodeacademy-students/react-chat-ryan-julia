//importing mongoos
const mongoose = require('mongoose')

//creating mongoos Schema
const MessageSchema = new mongoose.Schema({
    //key value pairs are the name of the key and what TYPE you want the value to be
    date: Date,
    userName: String,
    msg: String,
    room: String,
});


//exporting just the MessageSchema
module.exports = MessageSchema
