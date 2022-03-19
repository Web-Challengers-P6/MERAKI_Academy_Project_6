const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
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
const {
  tripRouter,
  profileTripRender,
  driverIdRouter,
} = require("./routes/tripR");
const { joinRouter } = require("./routes/joinAndAccept");
const { rejectRouter } = require("./routes/rejectR");
const { riderRouter } = require("./routes/rider");
const { sendrouter } = require("./routes/send");
//Routes Middleware
app.use("/send", sendrouter);
app.use("/profile", profileRouter);
app.use("/search", searchRouter);
app.use("/filter", fromAndToFilterRouter);
app.use("/trip", tripRouter);
app.use("/profileRender", profileTripRender);
app.use("/join", joinRouter);
app.use("/reject", rejectRouter);

app.use("/rider", riderRouter);

app.use("trip", driverIdRouter);
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello vro!')
})

app.post('/reply', async (req, res) => {
    const email = req.body.email;
    console.log(email);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'liliana.wilderman51@ethereal.email', // ethereal user
            pass: 'pvfgU6up3cx6rPeHhE', // ethereal password
        },
    });
    
    const msg = {
        from: '"The Exapress App" <pickup.p6@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Sup", // Subject line
        text: "you are in the trip", // plain text body
    }
    // send mail with defined transport object
    const info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
    res.send('Email Sent!')
})

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
