const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const twilio = require('twilio');


const wrapAsync = require("../utility/wrapAsync.js");
const passport = require("passport");
const { saveRedirect } = require("../middleware.js");
const userControllers = require("../controllers/users.js");

router.get("/signup", wrapAsync(userControllers.signupform));

router.post("/signup", wrapAsync(userControllers.signup));

router.get("/login",(req,res)=>{
	res.render("users/login.ejs");
});
router.get("/chatbot",(req,res)=>{
	console.log("hii");
	res.render("users/chatbot.ejs");
})

router.post("/login",
		saveRedirect,
		passport.authenticate("local",{ failureRedirect: "/login", failureFlash: true}),
		 userControllers.login);

router.get("/logout", userControllers.logout);




module.exports = router;