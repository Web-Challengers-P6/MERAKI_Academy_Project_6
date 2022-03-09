const express = require("express");

const { login } = require("../controllers/login");

const authRouter = express.Router();

authRouter.post("/login", login);

module.exports = authRouter;
