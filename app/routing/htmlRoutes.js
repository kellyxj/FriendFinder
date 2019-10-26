const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
    res.render("../public/home.html");
});

router.get("/", (req,res) => {
    res.render("../public/survey.html");
})

module.exports = router;