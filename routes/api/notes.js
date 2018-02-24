const router = require("express").Router();
const notesController = require("../../controllers/notesController");
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/notes"
router.route("/")
    .get(notesController.findAll);

// Matches with "/api/notes/:id"
router
    .route("/:id")
    .post(articlesController.addNote)
    .get(notesController.findById)
    .put(notesController.update)
    .delete(notesController.remove);

module.exports = router;