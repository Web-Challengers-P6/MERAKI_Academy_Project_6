const express = require("express");

const profileRouter = express.Router();
const getAllInformation = require("../controllers/profile");

//the main route is /proifle
profileRouter.get("/:userId", getAllInformation);

module.exports = { profileRouter };
