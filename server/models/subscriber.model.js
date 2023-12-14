const mongoose = require('mongoose');


const SubscriberSchema = new mongoose.Schema({
  emailAddress: { type: String, default: "", required: false, trim: true },
});


module.exports = mongoose.model('Subscriber', SubscriberSchema);