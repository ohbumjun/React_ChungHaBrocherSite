const express    = require('express');
const cors       = require('cors')
const app        = express();
const path       = require("path");
const {connectToMongoDb} = require('./db/db')   
require("dotenv").config();

// connect to mongodb
connectToMongoDb()

// Allows our application to make HTTP requests to Express application
app.use(cors());

// Song   --- 
// const songs = require('./router/songs')
// app.use('/songs/', songs)

// Albums --- 
// const albums = require('./router/albums')
// app.use('/albums/', mypage)

// Main   --- 
const main = require('./router/main')
app.use('/', main)

const server = app.listen(5000,function(){
  console.log("Server has started on port 5000");
});