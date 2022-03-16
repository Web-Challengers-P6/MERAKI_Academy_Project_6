import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
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
    <div className="gridcontainer">
      {ownTrips.map((elem, index) => {
        return (
          <div>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header>
                <p key={index}> Going to: {elem.TRIPto}</p>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <p> Start Point: {elem.TRIPfrom}</p>
                </Card.Title>
                <Card.Text>
                  <p>Number of passengers: {elem.numbersite}</p>
                  <p>Charge per passenger: {elem.Price} JD</p>
                </Card.Text>
              </Card.Body>{" "}
              <button>join trip</button>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default RenderInTheProfile;
