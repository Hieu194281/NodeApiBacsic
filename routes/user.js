const express = require("express");
const userController = require("../controller/user");
const router = express.Router();

router.route("/users").get(userController.index).post().put();

module.exports = router;
