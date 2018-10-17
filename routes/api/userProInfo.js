const router = require("express").Router();
const UserProInfoController = require("../../controllers/UserProInfoController");

// Matches with "/api/userProInfo"
router
  .route("/")
  .get(UserProInfoController.findAll)
  .post(UserProInfoController.create);

// Matches with "/api/userProInfo/:id"
router
  .route("/:id")
  .get(UserProInfoController.findById)
  .put(UserProInfoController.update)
  .delete(UserProInfoController.remove);

module.exports = router;
