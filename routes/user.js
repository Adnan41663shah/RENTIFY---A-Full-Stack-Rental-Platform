const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js")
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js")
const userController = require("../controllers/users.js");


router.route("/signup")
    // signup form
    .get(userController.signupForm)
    // signup user
    .post(wrapAsync(userController.signupUser))

router.route("/login")
    // login form
    .get( userController.loginForm)
    // login user
    .post( saveRedirectUrl,
    passport.authenticate('local',{ failureRedirect: '/login', failureFlash: true}), userController.loginUser)

// logout user
router.get("/logout", wrapAsync(userController.logoutUser));

module.exports = router;