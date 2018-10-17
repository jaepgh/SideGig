const router = require("express").Router();
const NotificationController = require("../../controllers/NotificationController");

// Matches with "/api/notification"
router
  .route("/")
  .get(NotificationController.findAll)
  .post(NotificationController.create);

// Matches with "/api/notification/:id"
router
  .route("/:id")
  .get(NotificationController.findById)
  .put(NotificationController.update)
  .delete(NotificationController.remove);

module.exports = router;
