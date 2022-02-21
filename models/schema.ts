var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        required: false,
        default: false,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});
const List = mongoose.model("LIST", schema);
module.exports = List;
