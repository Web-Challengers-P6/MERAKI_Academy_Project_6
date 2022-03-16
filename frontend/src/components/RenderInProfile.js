import React, { useState, useEffect } from "react";
import axios from "axios";
const RenderInTheProfile = () => {
  const [ownTrips, setOwnTrips] = useState([]);

  const renderOwnTrips = async () => {
    const userId = localStorage.getItem("User");
    await axios
      .get(`http://localhost:5000/profileRender/${userId}`)
      .then((result) => {
        console.log(result);
        setOwnTrips(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    renderOwnTrips();
  }, []);
  //what is left is to return the result using HOF
  return (
    <div>
      <p>
        {" "}
        trips:
        {ownTrips.map((elem) => {
          return <p>{elem.tripName}</p>;
        })}
      </p>
    </div>
  );
};

export default RenderInTheProfile;
