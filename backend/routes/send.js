const express = require("express");
const {send}=require("../controllers/email")
const sendrouter= express.Router();
sendrouter.get=("/em",send)
module.exports = { sendrouter };

