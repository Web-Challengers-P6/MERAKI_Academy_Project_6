const express = require("express");

const profileRouter = express.Router();
const { getAllInformation, editProfile } = require("../controllers/profile");

//the main route is /proifle
profileRouter.get("/:userId", getAllInformation);
profileRouter.put("/edit/:userId", editProfile);

module.exports = { profileRouter };
