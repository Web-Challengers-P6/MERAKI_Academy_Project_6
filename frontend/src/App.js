import "./App.css";
import "./components/Navbar.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import NewTrip from "./components/add trip/addtrip";
import Login from "./components/login/login";
import Booktrip from "./components/booktrip/booktrip";



import MapContainer from "./components/map"
import Footer from "./components/footer/footer"

import Register from "./components/regester/regester"

import Filter from "./components/filter/filter"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addTrip" element={<NewTrip />} />
        <Route path="/MapContainer" element={<MapContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trips" element={<Filter />} />

        <Route path="/Register" element={<Register />} />

      </Routes>{" "}
      <Footer />
    </>
  );
};
export default App;
//
