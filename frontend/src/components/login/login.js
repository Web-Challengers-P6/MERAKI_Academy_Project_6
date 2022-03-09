import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reducers/login";

//===============================================================
const Login = () => {
    const history = useNavigate();
  
    // ---------------------------------------------
    const state = useSelector((state) => {
      return { isLoggedIn: state.loginReducer.isLoggedIn };
    });
  
    const dispatch = useDispatch();
    // ---------------------------------------------
  
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(false);
    //===============================================================

    const loginUser = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post("http://localhost:5000/login", {
            email,
            password,
          });
          if (res.data.success) {
            setMessage("");
            localStorage.setItem("token", res.data.token);
            // saveToken(res.data.token);
            dispatch(login(res.data.token));
          } else throw Error;
        } catch (error) {
          if (error.response && error.response.data) {
            return setMessage(error.response.data.message);
          }
          setMessage("Error happened while Login, please try again");
        }
      };
    
      //===============================================================
    
      useEffect(() => {
        if (state.isLoggedIn) {
          history("/dashboard");
        }
        else
        history("/login")
      }, [state.isLoggedIn]);
    
      //===============================================================
    