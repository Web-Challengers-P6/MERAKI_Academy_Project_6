const connection = require("../database/db");

const getAllTrip = (req, res) => {
  const query = `SELECT * FROM trip WHERE softDelete=0`;
  connection.query(query, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, massage: "server error", err: err });
    }
    res.status(200).json({
      success: true,
      massage: "All the trip",
      results: result,
    });
  });
};

const creatNewTrip = (req, res) => {
  const { tripName, TRIPfrom, TRIPto, Image, Price, numbersite } = req.body;
  const driverId = req.token.userId;
  const query = `INSERT INTO trip (tripName,TRIPfrom,TRIPto,Image,Price,numbersite,driverId) VALUES (?,?,?,?,?,?,?);`;
  const data = [tripName, TRIPfrom, TRIPto, Image, Price, numbersite, driverId];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    } else {
      console.log("asdnlaskdn;askda;sd");
      res.status(200).json({
        success: true,
        massage: "Success Trip created",
        results: result,
      });
    }
  });
};
const updateTrip = (req, res) => {
  const { tripName, TRIPfrom, TRIPto, Image, Price, numbersite } = req.body;

  const query = `UPDATE trip SET tripName=?,TRIPfrom=?,TRIPto=?,Price=?,numbersite=? WHERE id=?; `;
  //Image=?,
  const data = [tripName, TRIPfrom, TRIPto, Image, Price, numbersite];

  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "did not update the trip`s information ",
        result: result,
      });
    } else {
      console.log("updated ");
      console.log(result);
      res.status(200).json({
        success: true,
        message: "trip`s information were successfuly updated ",
      });
    }
  });
};
const deleteTrip = (req, res) => {
  const tripId = req.body.tripId;
  const query = `delete from trip where id=${tripId};`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        success: false,
        message: "somthing went wrong while deleting this trip",
      });
    } else {
      console.log(result);
      res.status(200).json({ success: true, message: "trip was deleted" });
    }
  });
};

const allTripsForTheDriver = (req, res) => {
  const userId = req.params.userId;
  const query = `select * from trip where id =${userId}`;
};
module.exports = { creatNewTrip, getAllTrip, updateTrip, deleteTrip };
