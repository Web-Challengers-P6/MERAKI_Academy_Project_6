const express = require("express");
const { joinTripFunc } = require("../controllers/join");
const joinRouter = express.Router();

module.exports = { joinRouter };
