const router = require("express").Router();
const PostCategoryController = require("../../controllers/PostCategoryController");

// Matches with "/api/postCategory"
router
  .route("/")
  .get(PostCategoryController.findAll)
  .post(PostCategoryController.create);

// Matches with "/api/postCategory/:id"
router
  .route("/:id")
  .get(PostCategoryController.findById)
  .put(PostCategoryController.update)
  .delete(PostCategoryController.remove);

module.exports = router;
