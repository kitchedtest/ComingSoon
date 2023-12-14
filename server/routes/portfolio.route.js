const express = require("express");
const router = express.Router();
const PortfolioModel = require("../models/portfolio.model");

const {
  deletePortfolio,
} = require("../controllers/portfolio.controller");

router.post("/create", async (req, res) => {
  try {
    // Get portfolioInfo
    const {
      firstName,
      lastName,
      emailAddress,
      address,
      phoneNumber,
      careerTitle,
      driversLicence,
      degreeTitle,
      statement,
      templateName,
      accomplishments,
      education,
      skills,
      experience,
      userID
    } = req.body;

    const newPortfolio = new PortfolioModel({
      firstName,
      lastName,
      emailAddress,
      address,
      phoneNumber,
      careerTitle,
      driversLicence,
      degreeTitle,
      statement,
      templateName,
      userID: userID._id,
      accomplishments,
      education,
      skills,
      experience,
    });
    await newPortfolio.save()
    console.log("Portfolio created successfully");
    

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete("/delete", deletePortfolio);

module.exports = router;
