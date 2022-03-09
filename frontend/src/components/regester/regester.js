import React, { useContext, useState } from "react";

import axios from "axios";

import { useSelector} from "react-redux";
//=====================================================
const Register = () => {
    const state = useSelector((state) => {
      return { isLoggedIn: state.loginReducer.isLoggedIn };
    });
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const role_id = "1";
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
  
    // =================================================================

    const addNewUser = async (e) => {
        e.preventDefault();
        try {
          const result = await axios.post("http://localhost:5000/users", {
            firstName,
            lastName,
            age,
            country,
            email,
            password,
            role_id,
          });
          if (result.data.success) {
            setStatus(true);
            setMessage("The user has been created successfully");
          } else throw Error;
        } catch (error) {
          setStatus(false);
          if (error.response && error.response.data) {
            return setMessage(error.response.data.message);
          }
          setMessage("Error happened while register, please try again");
        }
      };
    
      // =================================================================
    