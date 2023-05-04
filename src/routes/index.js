const express = require("express");

const router = express.Router();

const CreateUserController = require("../controllers/user/CreateUserController");
const AuthController = require("../controllers/user/AuthController");

//controller
const createUserController = new CreateUserController();
const authController = new AuthController();

router.get("/", (req, res) => {
  res.send({ ok: true });
});

router.post("/signup", createUserController.handle);
router.post("/auth", authController.handle);

module.exports = router;
