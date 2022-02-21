var mongoose = require("mongoose");
var schema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: false,
        "default": false
    },
    created_at: {
        type: Date,
        required: true,
        "default": Date.now
    }
});
var List = mongoose.model("LIST", schema);
module.exports = List;
