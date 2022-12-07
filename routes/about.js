const express = require('express');
const router = express.Router();
const About = require("../models/About")
const Skills = require("../models/Skills")

router.get("/about", async (req, res) => {
    const abouts = await About.find({});
    const skills = await Skills.find({});
    res.render("about", {title: "About me", abouts, skills})
})


module.exports = router;