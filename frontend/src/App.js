import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/navbar" element={<NavBar />} /> */}
      </Routes>{" "}
    </>
  );
};

export default App;
