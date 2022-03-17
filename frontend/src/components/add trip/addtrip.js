import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Dropdown } from "react-bootstrap";
import "../add trip/addtrip.css";

//===============================================================

const NewTrip = () => {
  const history = useNavigate();

  // const { token, isLoggedIn } = state;
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [tripName, settripName] = useState("");
  const [TRIPfrom, setTRIPfrom] = useState("");
  const [TRIPto, setTRIPto] = useState("");
  const [numberOfSeats, setNumberOfSeats] = useState();
  const [Price, setPrice] = useState();
  const [Datetrip, setDatetrip] = useState("");
  const [Timetrip, setTimetrip] = useState("");

  const createNewTrip = async (e) => {
    e.preventDefault();
    try {
      const trip = {
        tripName,
        TRIPfrom,
        TRIPto,
        numberOfSeats,
        Price,
        Datetrip, 
        Timetrip
      };
      const result = await axios.post(
        "http://localhost:5000/trip/createNewTrip",
        {
          tripName,
          TRIPfrom,
          TRIPto,

          numberOfSeats,
          Price,


       
          Datetrip, 
          Timetrip

        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(token);
      console.log(result);
      if (result.data.success) {
        setStatus(true);

        setMessage("The trip has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
        // console.log(token);

        // console.log(result);

        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };

  //

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     history("/login");
  //   }
  // });

  return (
    <>
      <br />
      <form onSubmit={createNewTrip}>
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Trip from
        </label>
        <input
          placeholder="Please type here"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setTRIPfrom(e.target.value)}
        ></input>
        <br />
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Trip to
        </label>
        <input
          placeholder="Please type here"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setTRIPto(e.target.value)}
        ></input>
        <br />
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Number of passengers
        </label>
        <input
          placeholder="Please type here a number"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setNumberOfSeats(e.target.value)}
        ></input>
        <br />
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Price per passenger
        </label>
        <input
          placeholder="Please type here a number"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(e) => setPrice(e.target.value)}
        ></input>

   <br />


   <label for="inputEmail3" class="col-sm-2 col-form-label">
          Day (Day/month) example : 18/3
        </label>
        <input
          placeholder="Please type here the date of the trip"
          className="form-control"
          id="formGroupExampleInput"
          type="date"
          onChange={(e) => setDatetrip(e.target.value)}
        ></input>

        <br />
   <label for="inputEmail3" class="col-sm-2 col-form-label">
          Time (Hour:Minute AM or PM) example: 3:30 PM
        </label>
        <input
          placeholder="Please type here the time of the trip"
          className="form-control"
          id="formGroupExampleInput"
          type="time"
          onChange={(e) => setTimetrip(e.target.value)}
        ></input>
        <br/>
        <Button type = "submit" variant="primary">Create New Trip</Button>

      </form>
      {status
        ? message && (
            <div className="SuccessMessage">
              {message} && <p>{console.log(status)}</p>
            </div>
          )
        : message && (
            <div className="ErrorMessage">
              {message}
              <p>{console.log(status)}</p>
            </div>
          )}
    </>
  );
};

export default NewTrip;
