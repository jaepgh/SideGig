const router = require("express").Router();
const UserInfoController = require("../../controllers/UserInfoController");

// Matches with "/api/UserInfo"
router
  .route("/")
  .get(UserInfoController.findAll)
  .post(UserInfoController.create);

// Matches with "/api/UserInfo/:id"
router
  .route("/:id")
  .get(UserInfoController.findById)
  .put(UserInfoController.update)
  .delete(UserInfoController.remove);

module.exports = router;
