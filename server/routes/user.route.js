const express = require("express");
const router = express.Router();

const {
  userRegister,
  userLogin,
} = require("../controllers/user.controller");

// router for sign-up
router.route("/register", userRegister);

// router for sign-in
router.post("/login", userLogin);


module.exports = router;
