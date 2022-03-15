import "./App.css";
import "./components/Navbar.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import NewTrip from "./components/add trip/addtrip";
import Login from "./components/login/login";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addTrip" element={<NewTrip />} />
        <Route path="/login" element={<Login />} />
      </Routes>{" "}
    </>
  );
};
export default App;
