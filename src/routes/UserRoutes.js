const router = require("express").Router();
const zodMiddleware = require("../middleware/zodMiddleware");
const userValidationSchema = require("../validationSchema/UserValidationSchema");
const userController = require("../controllers/UserController");

router.post(
  "/",
  zodMiddleware(userValidationSchema),
  userController.createUser
);

router.post("/login", userController.loginUser);

module.exports = router;
