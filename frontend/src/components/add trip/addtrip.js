import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown } from "react-bootstrap";
import "../add trip/addtrip.css"






//===============================================================

const NewTrip = () => {
  
  const history = useNavigate();

  

  // const { token, isLoggedIn } = state;

  

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [tripName, settripName] = useState("");
  const [TRIPfrom, setTRIPfrom] = useState("");
  const [TRIPto, setTRIPto] = useState("");
  const [numbersite, setnumbersite] = useState();
  const [Price, setPrice] = useState();
  

  const createNewTrip = async (e) => {
    e.preventDefault();
    try {
      const trip = {
        tripName,
        TRIPfrom,
        TRIPto,
        numbersite,
        Price
      };
      const result = await axios.post(
        "http://localhost:5000/trip/createNewTrip",
        trip,
        {
        tripName,
        TRIPfrom,
        TRIPto,
        numbersite,
        Price
        },
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );
      if (result.data.success) {
        setStatus(true);
       
        setMessage("The trip has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
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
  let update = "";
 
  return (
    <>
    <br />
      <form onSubmit={createNewTrip}>
      <label for="inputEmail3" class="col-sm-2 col-form-label">Trip name</label>
        <input
          type="text"
          placeholder="Please type here"
        className="form-control"
        id="formGroupExampleInput"
          onChange={(e) => settripName(e.target.value)}
        />
        <br />
        <label for="inputEmail3" class="col-sm-2 col-form-label">Trip from</label>
        <input
          placeholder="Please type here"
          className="form-control"
        id="formGroupExampleInput"
          onChange={(e) => setTRIPfrom(e.target.value)}
        ></input>
        <br />
        <label for="inputEmail3" class="col-sm-2 col-form-label">Trip to</label>
        <input
          placeholder="Please type here"
          className="form-control"
        id="formGroupExampleInput"
          onChange={(e) => setTRIPto(e.target.value)}
        ></input>
        <br />
        <label for="inputEmail3" class="col-sm-2 col-form-label">Number of passengers</label>
        <input
          placeholder="Please type here a number"
          className="form-control"
        id="formGroupExampleInput"
          onChange={(e) => setnumbersite(e.target.value)}
        ></input>
        <br />
        <label for="inputEmail3" class="col-sm-2 col-form-label">Price per passenger</label>
        <input
          placeholder="Please type here a number"
          className="form-control"
        id="formGroupExampleInput"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
   <br />
<Dropdown  >
  <Dropdown.Toggle variant="success" id="dropdown-basic" onChange={(e)=>{ update = e.target.value ;console.log("select",e.target.value)}}>
    Select Month
  </Dropdown.Toggle>
  <Dropdown.Menu>
  <Dropdown.Item  >Jan</Dropdown.Item>
    <Dropdown.Item >Feb</Dropdown.Item>
    <Dropdown.Item >Mar</Dropdown.Item>
    <Dropdown.Item >April</Dropdown.Item>
    <Dropdown.Item >May</Dropdown.Item>
    <Dropdown.Item >June</Dropdown.Item>
    <Dropdown.Item >July</Dropdown.Item>
    <Dropdown.Item >August</Dropdown.Item>
    <Dropdown.Item >Sep</Dropdown.Item>
    <Dropdown.Item >Oct</Dropdown.Item>
    <Dropdown.Item >Nov</Dropdown.Item>
    <Dropdown.Item >Dec</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<br />
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select Day
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item >1</Dropdown.Item>
    <Dropdown.Item >2</Dropdown.Item>
    <Dropdown.Item >3</Dropdown.Item>
    <Dropdown.Item >4</Dropdown.Item>
    <Dropdown.Item >5</Dropdown.Item>
    <Dropdown.Item >6</Dropdown.Item>
    <Dropdown.Item >7</Dropdown.Item>
    <Dropdown.Item >8</Dropdown.Item>
    <Dropdown.Item >9</Dropdown.Item>
    <Dropdown.Item >10</Dropdown.Item>
    <Dropdown.Item >11</Dropdown.Item>
    <Dropdown.Item >12</Dropdown.Item>
    <Dropdown.Item >13</Dropdown.Item>
    <Dropdown.Item >14</Dropdown.Item>
    <Dropdown.Item >15</Dropdown.Item>
    <Dropdown.Item >16</Dropdown.Item>
    <Dropdown.Item >17</Dropdown.Item>
    <Dropdown.Item >18</Dropdown.Item>
    <Dropdown.Item >19</Dropdown.Item>
    <Dropdown.Item >20</Dropdown.Item>
    <Dropdown.Item >21</Dropdown.Item>
    <Dropdown.Item >22</Dropdown.Item>
    <Dropdown.Item >23</Dropdown.Item>
    <Dropdown.Item >24</Dropdown.Item>
    <Dropdown.Item >25</Dropdown.Item>
    <Dropdown.Item >26</Dropdown.Item>
    <Dropdown.Item >27</Dropdown.Item>
    <Dropdown.Item >28</Dropdown.Item>
    <Dropdown.Item >29</Dropdown.Item>
    <Dropdown.Item >30</Dropdown.Item>
    <Dropdown.Item >31</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<br />
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select Year
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
    <Dropdown.Item href="#/action-2">2023</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2024</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2024</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2025</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2026</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2027</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2028</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2029</Dropdown.Item>
    <Dropdown.Item href="#/action-3">2030</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>

        <br />
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


