const express = require("express");
const multer = require("multer");
const multerConfig = require("../utils/multer");

const router = express.Router();

//imports
const CreateUserController = require("../controllers/user/CreateUserController");
const AuthController = require("../controllers/user/AuthController");
const CreateLikeController = require("../controllers/like/CreateLikeController");
const ListLikeController = require("../controllers/like/ListLikeController");
const CreateMovieController = require("../controllers/movie/CreateMovieController");

//controller
const createUserController = new CreateUserController();
const authController = new AuthController();
const createLikeController = new CreateLikeController();
const listLikeController = new ListLikeController();
const createMovieController = new CreateMovieController();

router.get("/", (req, res) => {
  res.send({ ok: true });
});

router.post("/signup", createUserController.handle);
router.post("/auth", authController.handle);

router.post("/user/:userId/likes", createLikeController.handle);
router.get("/user/:userId/likes", listLikeController.handle);

router.post(
  "/movie/:userId",
  multer(multerConfig).single("file"),
  createMovieController.handle
);

module.exports = router;
