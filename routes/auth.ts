import Date from "core-js/core/date";

var express = require("express");
const router = express.Router();
const list = require("../models/schema");

router.post("/add", (req, res) => {
  const { task, isComplete, created_at } = req.body;
  if (!task) {
    return res.status(422).json({ err: "Please add a task." });
  }
  const item = new list({ task, isComplete, created_at });
  item
    .save()
    .then(() => res.status(201).json({ message: "Task Added Successfully" ,todo:{item}}))
    .catch((err) => console.log(err));
});

router.get("/getrecords", (req, res) => {
  list
    .find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

router.put("/update/:id", (req, res) => {
  let id = {
    _id:req.params.id,
  };
  list
    .findOneAndUpdate(
      { _id: id },
      { $set: { task: req.body.task, isComplete: req.body.isComplete } }
    )
    .then(() => res.status(201).json({ message: "Task updated successfully!" }))
    .catch((err) => ({ error: "Cannot update Task." }));
});
module.exports = router;
