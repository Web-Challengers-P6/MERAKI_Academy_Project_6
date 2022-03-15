import React from "react";
// import AllTrips from "./all trips/alltrips"
import Trips from "./all trips/alltrips";
import Filter from "./filter/filter";

const Home = () => {
  return (
    <div>
      <Trips />
      <Filter />
    </div>
  );
};
export default Home;
