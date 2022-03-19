const nodemailer = require("nodemailer");

const send=(req=1,res)=>{
    console.log(req);
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'contactexchangeweb@gmail.com',
          pass: 'Exchange@123'
        }
      });
      
    let mailOptions = {
        from: "contactexchangeweb@gmail.com",
        to: "aljariri.fayeq@gmail.com",
        subject: "Nodemailer API",
        text: "Hi from your nodemailer API",
      };
     
      transporter.sendMail(mailOptions, (err, data)=> {
        if (err) {
          console.log("Error " + err);
          res.status(500).json({
            success: false,
            massage: "Server error ",
            err: err,
          });
        } else {
          console.log("Email sent successfully");
          res.json({ status: "Email sent" });
        }
      });

}
module.exports = {send}