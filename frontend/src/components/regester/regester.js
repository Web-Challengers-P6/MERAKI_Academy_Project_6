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
  
  