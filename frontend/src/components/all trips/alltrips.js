import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../all trips/alltrips.css";

// -------------------------------------------------------------------------------
// const [tripsShower, settripsShower] = useState([]);
const Trips = () => {
  const [tripsShower, settripsShower] = useState([]);

  const AllTrips = async () => {
    try {
      const result = await axios.get("http://localhost:5000/trip/all");
      if (result.data.success) {
        settripsShower(result.data.results);
      } else throw Error;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AllTrips();
  }, []);

  return (
    <>
      <div className="gridcontainer">
        {tripsShower.map((elem, index) => {
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
    </>
  );
};

export default Trips;
