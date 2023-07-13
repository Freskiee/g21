const express = require("express");
const router = express.Router();
const {
  getTareas,
  createTareas,
  updateTareas,
  deleteTareas,
} = require("../controllers/tareasControllers");

router.route('/').get(getTareas).post(createTareas)
router.route('/:id').delete(deleteTareas).put(updateTareas)

module.exports = router;
