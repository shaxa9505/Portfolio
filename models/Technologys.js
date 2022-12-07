const mongoose = require("mongoose");

const technologySchema = mongoose.Schema({
    technologyImg: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("technology", technologySchema)