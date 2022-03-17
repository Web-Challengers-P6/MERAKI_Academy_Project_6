const express = require("express");
const { joinTripFunc, update } = require("../controllers/join");

// main route is /join
const joinRouter = express.Router();
joinRouter.post("/:tripId", joinTripFunc);
joinRouter.put("/update/:id", update);

module.exports = { joinRouter };
