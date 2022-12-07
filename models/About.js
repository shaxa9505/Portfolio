const mongoose = require("mongoose");


const aboutSchema = mongoose.Schema({
    aboutTitle: {
        type: Object,
        required: true
    },
    aboutMe: {
        type: Object,
        required: true
    },
    aboutImg: [{
        type: Object,
        required: true
    }]
})

module.exports = mongoose.model("about", aboutSchema)