const express = require('express');
const router = express.Router();
const About = require("../models/About")

router.get('/', async (req, res, next) => {
  const aboutCounts = await About.find()
  res.render('index', { title: 'Express', aboutCounts});
});

module.exports = router;
