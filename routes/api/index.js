const router = require("express").Router();
const notificationRoutes = require("./notification");
const postCategoryRoutes = require("./postCategory");
const postInfoRoutes = require("./postInfo");
const postPhotosRoutes = require("./postPhotos");
const postSubCategoryRoutes = require("./postSubCategory");
const UserInfoRoutes = require("./userInfo");

// Routes
router.use("/notification", notificationRoutes);
router.use("/postCategory", postCategoryRoutes);
router.use("/postInfo", postInfoRoutes);
router.use("/postPhotos", postPhotosRoutes);
router.use("/postSubCategory", postSubCategoryRoutes);
router.use("/UserInfo", UserInfoRoutes);

module.exports = router;
