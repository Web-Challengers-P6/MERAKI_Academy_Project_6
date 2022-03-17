const express = require("express");
const { reject } = require("../controllers/reject");
const rejectRouter = express.Router();
// main route is /reject
rejectRouter.put("/:tripId", reject);

module.exports = { rejectRouter };
