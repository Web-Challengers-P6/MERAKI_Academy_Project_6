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
  