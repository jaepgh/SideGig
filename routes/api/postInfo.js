const router = require("express").Router();
const PostInfoController = require("../../controllers/PostInfoController");

// Matches with "/api/postInfo"
router
  .route("/")
  .get(PostInfoController.findAll)
  .post(PostInfoController.create);

// Matches with "/api/postInfo/:id"
router
  .route("/:id")
  .get(PostInfoController.findById)
  .put(PostInfoController.update)
  .delete(PostInfoController.remove);

module.exports = router;
