const express = require("express");
const { joinriderFunc, update } = require("../controllers/join");

// main route is /join
const joinRouter = express.Router();
joinRouter.post("/:tripId", joinriderFunc);
joinRouter.put("/update/:id", update);

module.exports = { joinRouter };
