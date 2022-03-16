const express = require("express");
const { joinTripFunc } = require("../controllers/join");

// main route is /join
const joinRouter = express.Router();
joinRouter.post("/", joinTripFunc);

module.exports = { joinRouter };
