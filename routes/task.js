const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  getSingleTaks,
  removeTask,
  updateTask,
} = require("../controllers/task");
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTaks).delete(removeTask).patch(updateTask);
module.exports = router;
