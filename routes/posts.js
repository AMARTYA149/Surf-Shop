const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/index");
const { getPosts, newPost } = require("../controllers/posts");

// // Restful routing
// GET index       /posts
// GET new         /posts/new
// POST create     /posts
// GET show        /posts/:id
// GET edit        /posts/:id/edit
// GET update      /posts/:id
// DELETE destroy  /posts/:id

/* GET posts index /posts */
router.get("/", errorHandler(getPosts));

/* GET posts new /posts/new */
router.get("/new", newPost);
module.exports = router;

/* POST posts create /posts */
router.post("/", (req, res, next) => {
  res.send("CREATE /posts");
});
module.exports = router;

/* GET posts show /posts/:id */
router.get("/:id", (req, res, next) => {
  res.send("SHOW /posts/:id");
});
module.exports = router;

/* GET posts edit /posts/:id/edit */
router.get("/:id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/edit");
});
module.exports = router;

/* PUT posts update /posts/:id */
router.put("/:id", (req, res, next) => {
  res.send("UPDATE /posts/:id");
});
module.exports = router;

/* DELETE posts destroy /posts/:id */
router.delete("/:id", (req, res, next) => {
  res.send(" DELETE /posts/:id");
});
module.exports = router;
