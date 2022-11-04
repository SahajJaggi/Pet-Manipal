const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("home/home");
});

router.get("/home/about-us", (req, res) => {
	res.render("home/aboutUs", { title: "About Us | Food Aid" });
});

router.get("/home/gallery", (req, res) => {
	res.render("home/gallery", { title: "Our mission | Food Aid" });
});

router.get("/home/contact-us", (req, res) => {
	res.render("home/contactUs", { title: "Contact us | Food Aid" });
});


module.exports = router;