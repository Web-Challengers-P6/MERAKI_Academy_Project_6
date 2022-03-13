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

  const updateTrip = (req, res) => {
    const userId = req.body.userId;
    const query = `insert into trip () where and id=? `;

    //we want to make the update then the delete BE AND FE
  };
};
module.exports = { creatNewTrip, getAllTrip };
