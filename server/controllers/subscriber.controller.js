const Subscriber = require("../models/subscriber.model");

exports.subscribe = async (req, res) => {
  try {
    const { emailAddress } = req.body;

    const existingSubscriber = await Subscriber.findOne({ emailAddress });
    if (existingSubscriber) {
      return console.log("Email Address already exists");
    } else {
      const newSubscriber = new Subscriber({ emailAddress });
      await newSubscriber.save();
      console.log("Subscribed Successfully");
    }
  } catch (error) {
    console.error(error);
    console.log("Server error");
  }
};
