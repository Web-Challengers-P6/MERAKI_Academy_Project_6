const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

//=======================================
const usersRouter = require("./routes/users");
const login = require("./routes/login");

app.use(cors());

app.use(express.json());
// router middleware
app.use("/users", usersRouter);
app.use("/login", login);


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

//Import Routes
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");


app.use("/users", usersRouter);
app.use("/login",  loginRouter);