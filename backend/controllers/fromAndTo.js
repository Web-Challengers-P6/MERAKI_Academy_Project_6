const db = require("../database/db");
const Connection = require("../database/db");
const fromAndTo = (req, res) => {
  const fromPoint = req.body.TRIPfrom;
  const toPoint = req.body.TRIPto;
  
  console.log(req.body);

  const query = `select * from trip where TRIPfrom=? and TRIPto=? `;
  const data = [fromPoint, toPoint];
  Connection.query(query, data, (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "no results where found", err });
    } else {
      res.status(200).json({
        success: true,
        message: "all trips found",
        result: result,
      });
    }
  });
};

const to = (req, res) => {
  const toPoint = req.body;
  const query = `select * from trip where TRIPto=?`;
  const data = [toPoint];
  Connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "no results where found", err });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "{to} Point Info",
        result: result,
      });
    }
  });
};

module.exports = { fromAndTo, to };
