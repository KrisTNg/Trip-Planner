
const express = require('express');
const mongoose = require('mongoose');//import mongoose module
const Router = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(Router);

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//============================ MongoDB connection
//setup default mongoose connection
const username = "admin";
const password = "admin";
const cluster = "cluster0";
const dbname = "";

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.pp3gy.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  { 
    useNewUrlParser:true, 
    useUnifiedTopology:true
  });

const db = mongoose.connection;//get default connection
db.on('error', console.error.bind(console,'MongoDB connection error'));//Bind connection to error event
db.once("open", function () {
  console.log("Connected successfully");
});