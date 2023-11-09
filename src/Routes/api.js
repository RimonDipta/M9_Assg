const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController.js");
const postController = require("../Controllers/postController.js");
const subAdminController = require("../Controllers/subAdminController.js");
const userController = require("../Controllers/userController.js");

router.get("admin/create", adminController.create);
router.get("admin/read", adminController.read);
router.get("admin/delete", adminController.delete);
router.get("admin/update", adminController.update);

router.get("/post/create", postController.create);
router.get("/post/read", postController.read);
router.get("/post/delete", postController.delete);
router.get("/post/update", postController.update);

router.get("/subadmin/create", subAdminController.create);
router.get("/subadmin/read", subAdminController.read);
router.get("/subadmin/delete", subAdminController.delete);
router.get("/subadmin/update", subAdminController.update);

router.get("/user/create", userController.create);
router.get("/user/read", userController.read);
router.get("/user/delete", userController.delete);
router.get("/user/update", userController.update);

module.exports = router;
