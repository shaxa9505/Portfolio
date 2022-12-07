const { Router } = require("express");
const About = require("../../models/About");
const Skills = require("../../models/Skills");
const router = Router();


router.get("/", async (req, res) => {
    req.flash("success", "Вы вошли в систему")
    const aboutsCount = await About.find().countDocuments();
    const skillsCount = await Skills.find().countDocuments();
    res.render("admin/index", {title: "Admin Panel", aboutsCount, skillsCount});
})


module.exports = router;