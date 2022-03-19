import React, { useState, useEffect } from "react";
import axios from "axios";
function Rider() {
  const [rider, setrider] = useState([]);
  const [email, setemail] = useState("");
  const tripId = localStorage.getItem("id");
  const getallrider = async () => {
    console.log(tripId);
    await axios
      .get(`http://localhost:5000/rider/${tripId}`)
      .then((result) => {
        console.log(result);
        setrider(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reject = async (id) => {
    console.log({ riderid: id });
    await axios
      .put(`http://localhost:5000/rider/${id}`)
      .then((result) => {
        console.log(result);
        getallrider();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallrider();
  }, []);

  return (
    <>
      {rider.map((elem, i) => {
        return (
          <div>
            <p>{elem.Username} </p>

            <p>{elem.email}</p>

            <button
              onClick={() => {
                reject(elem.id_);
              } }
            >
              rejected
            </button>
            <button onClick={() => { setemail(elem.email)
             } }>accept</button>
          </div>
        );
      })}
    </>
  );
}
export default Rider;
