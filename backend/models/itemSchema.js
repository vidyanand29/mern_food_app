const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    imgUrl: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Item", itemSchema);
