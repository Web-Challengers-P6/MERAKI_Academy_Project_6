import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../reducers/products/index";
import {Image, Video, Transformation} from 'cloudinary-react';
// import { AuthContext } from "./context";

//===============================================================

const NewTrip = () => {
  
  const history = useNavigate();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const { token, isLoggedIn } = state;

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [tripName, settripName] = useState("");
  const [TRIPfrom, setTRIPfrom] = useState();
  const [TRIPto, setTRIPto] = useState("");
  const [numbersite, setnumbersite] = useState("");
  const [Price, setPrice] = useState("");
  

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
        "http://localhost:5000/product",
        {
        tripName,
        TRIPfrom,
        TRIPto,
        numbersite,
        Price
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.success) {
        setStatus(true);
        dispatch(
          addTrip({
            tripName,
            TRIPfrom,
            TRIPto,
            numbersite,
            Price
          })
        );
        setMessage("The product has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };

  //

  useEffect(() => {
    if (!isLoggedIn) {
      history("/login");
    }
  });

 
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
          onChange={(e) => TRIPfrom(e.target.value)}
        ></textarea>
        <br />
        <textarea
          placeholder="Trip to"
          onChange={(e) => TRIPto(e.target.value)}
        ></textarea>
        <br />
        <br />
        <textarea
          placeholder="Number of passengers"
          onChange={(e) => numbersite(e.target.value)}
        ></textarea>
        <br />
        <br />
        <textarea
          placeholder="Price per passenger"
          onChange={(e) => Price(e.target.value)}
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