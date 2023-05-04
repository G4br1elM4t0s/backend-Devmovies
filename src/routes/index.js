const express = require("express");

const router = express.Router();

//imports
const CreateUserController = require("../controllers/user/CreateUserController");
const AuthController = require("../controllers/user/AuthController");
const CreateLikeController = require("../controllers/like/CreateLikeController");
const ListLikeController = require("../controllers/like/ListLikeController");

//controller
const createUserController = new CreateUserController();
const authController = new AuthController();
const createLikeController = new CreateLikeController();
const listLikeUseCase = new ListLikeController();

router.get("/", (req, res) => {
  res.send({ ok: true });
});

router.post("/signup", createUserController.handle);
router.post("/auth", authController.handle);

router.post("/user/:userId/likes", createLikeController.handle);
router.get("/user/:userId/likes", listLikeUseCase.handle);

module.exports = router;
