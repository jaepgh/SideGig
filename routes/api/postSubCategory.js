const router = require("express").Router();
const PostSubCategoryController = require("../../controllers/PostSubCategoryController");

// Matches with "/api/postSubCategory"
router
  .route("/")
  .get(PostSubCategoryController.findAll)
  .post(PostSubCategoryController.create);

// Matches with "/api/postSubCategory/:id"
router
  .route("/:id")
  .get(PostSubCategoryController.findById)
  .put(PostSubCategoryController.update)
  .delete(PostSubCategoryController.remove);

module.exports = router;
