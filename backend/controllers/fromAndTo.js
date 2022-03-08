const Connection = require("mysql2/typings/mysql/lib/Connection");
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
