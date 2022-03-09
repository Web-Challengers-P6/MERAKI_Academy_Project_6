import "./App.css";
import NewTrip from "./components/add trip/addtrip";
import { Route, Routes } from "react-router-dom";





function App() {
  return (
    <>
    <div className="App">
      <h1>Start project 6</h1>
      <Routes>
      <Route path="/addtrip" element={<NewTrip/>} />{" "}
      </Routes>
    </div>
    </>
  );
}

export default App;
