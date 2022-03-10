import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";





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

 
  return (
    <>
      <form onSubmit={createNewTrip}>
        <br />
        <input
          type="text"
          placeholder="Trip name "
          onChange={(e) => settripName(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Trip from"
          onChange={(e) => setTRIPfrom(e.target.value)}
        ></textarea>
        <br />
        <textarea
          placeholder="Trip to"
          onChange={(e) => setTRIPto(e.target.value)}
        ></textarea>
        <br />
        <br />
        <textarea
          placeholder="Number of passengers"
          onChange={(e) => setnumbersite(e.target.value)}
        ></textarea>
        <br />
        <br />
        <textarea
          placeholder="Price per passenger"
          onChange={(e) => setPrice(e.target.value)}
        ></textarea>
        <br />
        <button>Create New Trip</button>
      </form>
      <br />
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


