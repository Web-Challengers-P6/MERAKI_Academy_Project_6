const express = require("express");

const profileRouter = express.Router();
const getAllInformation = require("../controllers/profile");
profileRouter.get("/:userId", getAllInformation);

module.exports = { profileRouter };
