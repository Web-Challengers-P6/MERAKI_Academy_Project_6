import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "../add trip/addtrip.css";

// -------------------------------------------------------------------------------
// const [tripsShower, settripsShower] = useState([]);
const Trips = () => {
  const [tripsShower, settripsShower] = useState([]);

  const AllTrips = async () => {
    try {
      const result = await axios.get("http://localhost:5000/trip/all");
      if (result.data.success) {
        console.log(result.data.results);
        settripsShower(result.data.results);
        console.log(tripsShower);
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
        <p>hi</p>
        <p>{tripsShower.map((elem,index)=>{
          return <p key={index}>{elem.TRIPfrom}</p>
        })}</p>
      </>
    );
  };


export default Trips;
