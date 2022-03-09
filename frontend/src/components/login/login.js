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
  