const connection = require("../database/db");

const getAllTrip = (req, res) => {
  const query = `SELECT * FROM trip WHERE is_deleted=0`;
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
  const { tripName, from, to, Image, Price, numbersite } = req.body;
  const userId = req.token.userId;
  const query = `INSERT INTO articles (tripName,from,to,Image,Price,numbersite,userId) VALUES (?,?,?,?,?,?,?);`;
  const data = [tripName, from, to, Image, Price, numbersite, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "Success Trip created",
      results: result,
    });
  });
};
module.exports = { creatNewTrip, getAllTrip };
