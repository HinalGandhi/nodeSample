var express = require("express");
var router = express.Router();
var list = require("../models/schema");
router.post("/add", function (req, res) {
    var _a = req.body, task = _a.task, isComplete = _a.isComplete, created_at = _a.created_at;
    if (!task) {
        return res.status(422).json({ err: "Please add a task." });
    }
    var item = new list({ task: task, isComplete: isComplete, created_at: created_at });
    item
        .save()
        .then(function () { return res.status(201).json({ message: "Task Added Successfully", todo: { item: item } }); })["catch"](function (err) { return console.log(err); });
});
router.get("/getrecords", function (req, res) {
    list
        .find()
        .then(function (result) { return res.send(result); })["catch"](function (err) { return console.log(err); });
});
router.put("/update/:id", function (req, res) {
    var id = {
        _id: req.params.id
    };
    list
        .findOneAndUpdate({ _id: id }, { $set: { task: req.body.task, isComplete: req.body.isComplete } })
        .then(function () { return res.status(201).json({ message: "Task updated successfully!" }); })["catch"](function (err) { return ({ error: "Cannot update Task." }); });
});
module.exports = router;
