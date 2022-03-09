const express = require("express");

const getAllTrip = require("../controllers/Trip");
const creatNewTrip = require("../controllers/Trip");

const tripRouter = express.Router();
tripRouter.get("/all", getAllTrip);
tripRouter.post("/createNewTrip", creatNewTrip);

module.exports = { tripRouter };
