const router = require("express").Router();
const PostPhotosController = require("../../controllers/PostPhotosController");

// Matches with "/api/postPhotos"
router
  .route("/")
  .get(PostPhotosController.findAll)
  .post(PostPhotosController.create);

// Matches with "/api/postPhotos/:id"
router
  .route("/:id")
  .get(PostPhotosController.findById)
  .put(PostPhotosController.update)
  .delete(PostPhotosController.remove);

module.exports = router;
