const express = require("express");

const { getAllTrip } = require("../controllers/Trip");
const { creatNewTrip } = require("../controllers/Trip");
const authentication = require("../middleware/authentication");

const tripRouter = express.Router();
//main route is /trip
tripRouter.get("/all", getAllTrip);
tripRouter.post("/createNewTrip", authentication, creatNewTrip);



module.exports = { tripRouter };
