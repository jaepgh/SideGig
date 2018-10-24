const router = require("express").Router();
const PostJobInfoController = require("../../controllers/PostJobInfoController");

// Matches with "/api/postJob"
router
  .route("/")
  .get(PostJobInfoController.findAll)
  .post(PostJobInfoController.create);

// Matches with "/api/UserInfo/:id"
router
  .route("/:id")
  .get(PostJobInfoController.findById)
  .put(PostJobInfoController.update)
  .delete(PostJobInfoController.remove);

module.exports = router;
