import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
// import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import loginReducer from "../../reducers/loginReducer";
import Swal from "sweetalert2";

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
  const [Password, setPassword] = useState("");
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
        Password,
      });
      if (res.data) {
        console.log(res.data);
        setMessage("true");
        localStorage.setItem("User", res.data.results.id);
        localStorage.setItem("token", res.data.token);
        setStatus(true);
        console.log(status);
        dispatch(loginReducer(res.data.token));
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };
  //hi
  console.log(state.isLoggedIn);
  useEffect(() => {
    if (token) {
      console.log(token);
      history("/home");
    } else {
      history("/login");
    }
  }, []);
  if (token) {
    history("/home");
  }

  return (
    <>
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div class="d-table-cell align-middle">
              <div class="text-center mt-4">
                <h1 class="h2"> Start adding trips, and join your favourite trip to many places in Jordan</h1>
                <p class="lead">    
                  Please sign up if you do not have an account, or Login to your account if you have one
                </p>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="m-sm-4">
                    <form onSubmit={loginUser}>
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          class="form-control form-control-lg"
                          id="login-input"
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input
                          class="form-control form-control-lg"
                          id="login-input"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          name="password"
                          placeholder="Enter password"
                        />
                      </div>
                      <div class="text-center mt-3">
                        <button onClick={()=>{Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Login Successful',
  showConfirmButton: false,
  timer: 1500
})
}} type="submit" class="btn btn-lg btn-primary">
                          Login
                        </button>
                        <br />
                        <a href="/Register"> SignUp</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
