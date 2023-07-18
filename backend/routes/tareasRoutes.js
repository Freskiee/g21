const express = require("express");
const router = express.Router();
const {
  getTareas,
  createTareas,
  updateTareas,
  deleteTareas,
} = require("../controllers/tareasControllers");
const {protect} = require ('../middleware/authMiddleware.js')

router.route('/').get(protect, getTareas).post(protect, createTareas)
router.route('/:id').delete(protect, deleteTareas).put(protect, updateTareas)

module.exports = router;
