const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { subscribe } = require('./controllers/subscriber.controller');
require("dotenv").config();
const app = express();
const Subscriber = require('./models/subscriber.model');


app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.mongoURI; 

mongoose.connect(uri); 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/api/subscribe', async (req, res) => {
  try {
    const {emailAddress} = req.body;
    console.log(req.body)
 
    const existingSubscriber = await Subscriber.findOne({emailAddress});
    if (existingSubscriber) {
      return console.log('Email Address already exists');
    }
 
    const newSubscriber = new Subscriber({emailAddress});
    await newSubscriber.save();
    console.log('Subscribed Successfully');
  } catch (error) {
    console.error(error);
    console.log('Server error');
  }
 }
 )   

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});