const mongoose = require("mongoose");


const skillsSchema = mongoose.Schema({
    skillsImg: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("skills", skillsSchema)