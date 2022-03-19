//first when we click join we it will send the user(who clicked join ) id

const connection = require("../database/db");
const db = require("../database/db");
let maxNumberOfSeats = require("../controllers/Trip");

const joinriderFunc = (req, res) => {
  const tripId = req.params.tripId;
  const riderId = req.body.riderId;
  const query = `INSERT INTO rider (tripId,riderId) VALUES (?,?);`;
  const data = [tripId, riderId];
  connection.query(query,data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "did not join" });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "joined successfully",
        result: result,
        tripId: tripId,
        
      });
    }
  });
  
};
const update = (req, res) => {
  const id = req.params.id;
  let seats = req.body.seats;
  const query = `update trip set numberOfSeats=${seats} where id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "did not join" });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "joined successfully(seat is reserved)",
        result: result,
       
      });
    }
  });
};
module.exports = { joinriderFunc, update };
//use something like the useState for the back end sp when the trip changes it will reset each time but when you join trip a then trip b then trip a the counter for trip a will be reassigned to 0
