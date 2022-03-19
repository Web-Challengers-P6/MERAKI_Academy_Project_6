const connection = require("../database/db");


const getAllRider=(req,res)=>{
    const tripId=req.params.tripId
    const query=`select* FROM rider inner join user ON rider.riderid =user.id where rider.tripid=? and rider.softDelete=0 `;
    const data =[tripId]
    connection.query(query, data, (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            massage: "Server error ",
            err: err,
          });
        } else {
          res.status(200).json({
            success: true,
            massage: "all rider",
            results: result,
          });
        }
      });
    
}
const softDelete=(req,res)=>{
  const id=req.body.id
  const query=`UPDATE rider SET softDelete=? where id=? `;
  const data =[id]
  connection.query(query, data, (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          massage: "Server error ",
          err: err,
        });
      } else {
        res.status(200).json({
          success: true,
          massage: "deleted",
          results: result,
        });
      }
    });
  
}

module.exports = {getAllRider,softDelete}
