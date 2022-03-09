const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());

const PORT = 5000;
//Import Routers
const { profileRouter } = require("./routes/profileR");
const { fromAndToFilterRouter } = require("./routes/fromAndtoR");
const { searchRouter } = require("./routes/searchR");

//Routes Middleware
app.use("/profile", profileRouter);
app.use("/search", searchRouter);
app.use("/filter", fromAndToFilterRouter);

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
