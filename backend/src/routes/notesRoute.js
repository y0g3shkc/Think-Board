const {
  getNotes,
  createNotes,
  updateNote,
  deleteNote,
  getNote,
} = require("../controller/notesController");

const router = require("express").Router();

router.route("/").get(getNotes).post(createNotes);
router.route("/:id").patch(updateNote).delete(deleteNote).get(getNote);

module.exports = router;
