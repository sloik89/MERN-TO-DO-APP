const Task = require("../models/task");
const { createCustomError } = require("../Errors/custom-error");
// to avoid try catch block
const assyncWrapper = require("../middleware/assyncWrapper");
const getAllTask = assyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json(task);
});
const createTask = assyncWrapper(async (req, res) => {
  const task = await Task.create({ name: req.body.task });
  res.json(task);
});
const getSingleTaks = assyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const item = await Task.findById(id);
  if (!item) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }
  res.json(item);
});
const removeTask = assyncWrapper(async (req, res) => {
  const item = await Task.findByIdAndDelete(req.params.id);
  if (!item) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }
  res.json({ msg: "item removed" });
});
const updateTask = assyncWrapper(async (req, res) => {
  const response = await Task.findByIdAndUpdate(req.params.id, req.body);
  if (!response) {
    return next(createCustomError(`No task with id: ${id}`, 404));
  }
  res.status(200).json({ msg: "item updated" });
});
module.exports = {
  getAllTask,
  createTask,
  getSingleTaks,
  removeTask,
  updateTask,
};
