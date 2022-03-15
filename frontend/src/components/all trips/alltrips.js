import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import "../add trip/addtrip.css";

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
  }
  useEffect(() => {
    AllTrips();
  }, []);

    return (
      <>
        <p>{tripsShower.map((elem,index)=>{
          return(
            <div>

<Row xs={1} md={3} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title><p>Going to: {elem.TRIPto}</p></Card.Title>
          <Card.Text>
          <p>Start point: {elem.TRIPfrom}</p>
          <p>Number of passengers: {elem.numbersite}</p>
          <p>Price per person: {elem.Price} JD</p>
         
          <p>{elem.TRIPto}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>



         
          <p>{elem.TRIPto}</p>
          <p>{elem.numbersite}</p>
          <p>{elem.Price}</p>
          <p>{elem.TRIPto}</p>
          <p>{elem.TRIPto}</p>
          </div>
          )
        })}</p>
      </>
    );
  };


export default Trips;
