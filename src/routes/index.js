const express = require("express");

const router = express.Router();

const CreateUserController = require("../controllers/user/CreateUserController");

//controller
const createUserController = new CreateUserController();

router.get("/", (req, res) => {
  res.send({ ok: true });
});

router.post("/signup", createUserController.handle);

module.exports = router;
