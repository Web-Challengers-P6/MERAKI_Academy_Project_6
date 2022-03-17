const express = require("express");
const { joinTripFunc } = require("../controllers/join");

// main route is /join
const joinRouter = express.Router();
joinRouter.post("/:tripId", joinTripFunc);

module.exports = { joinRouter };
