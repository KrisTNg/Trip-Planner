
const express = require('express');
const mongoose = require('mongoose');//import mongoose module

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//============================ MongoDB connection
//setup default mongoose connection
const mongoDB = '';
mongoose.connect(mongoDB,{useNewUrlParser:true, 
                          useFindAndModify: false, 
                          useUnifiedTopology:true});

const db = mongoose.connection;//get default connection
db.on('error', console.error.bind(console,'MongoDB connection error'));//Bind connection to error event