const express = require("express");
const { getAllRider,softDelete } = require("../controllers/rider");
const riderRouter = express.Router();
riderRouter.put("/:id",softDelete)
riderRouter.get("/:tripId", getAllRider);
module.exports = { riderRouter };
