import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Swal from "sweetalert2";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../reducers/login";
//===============================================================
export const UserContext = createContext();
const Login = () => {
  const history = useNavigate();

  // ---------------------------------------------
  const state = useSelector((state) => {
    return { isLoggedIn: state.loginReducer.isLoggedIn };
  });

  const dispatch = useDispatch();
  // ---------------------------------------------
  //hi
  const [Username, setUsername] = useState("");
  const [Phone_number, setPhone_number] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");
  const User = localStorage.getItem("User");


  const [status, setStatus] = useState(false);
  // const [saveToken, setSaveToken] = useState("");
  //===============================================================

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data) {
        console.log(res.data)
        setMessage("true");
        localStorage.setItem("User", res.data.results.id);
        localStorage.setItem("token", res.data.token)

        dispatch(login(res.data.token));
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };
  const addNewUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/users", {
        Username,
        Phone_number,
        email,
        password,
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

  useEffect(() => {
    if (state.isLoggedIn) {
      history("/Home");
    } else history("/login");
  }, [state.isLoggedIn]);
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  
  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });
  
  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });
      return (
        <>
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#" onSubmit={addNewUser}>
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name"   onChange={(e) => setUsername(e.target.value)} />
			<input type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
			<button>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#" onSubmit={loginUser}>
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
			<input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer>        </>
      );
    };
    
    export default Login;
    