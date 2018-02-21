const router = require("express").Router();
const articleRoutes = require("./articles");
const noteRoutes = require("./notes");

// Article routes
router.use("/articles", articleRoutes);
router.use("/notes", noteRoutes);

module.exports = router;
