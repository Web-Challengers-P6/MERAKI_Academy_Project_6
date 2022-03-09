const db = require("../database/db");
const from = (req, res) => {
  const fromPoint = req.body;
  const query = `select * from trip where from=${fromPoint}`;
  Connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "no results where found", err });
    } else {
      res.status(200).json({
        success: true,
        message: "{from} Point Info",
        result: result,
      });
    }
  });
};

const to = (req, res) => {
  const toPoint = req.body;
  const query = `select * from trip where from=${toPoint}`;
  Connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "no results where found", err });
    } else {
      res.status(200).json({
        success: true,
        message: "{to} Point Info",
        result: result,
      });
    }
  });
};

module.exports = { from, to };
