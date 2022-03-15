import React from "react";
// import AllTrips from "./all trips/alltrips"
import Trips from "./all trips/alltrips";
import Filter from "./filter/filter";
import Carouselimage from "./Carousel/carousel";

const Home = () => {
  return (
    <div>
      <Carouselimage />
      <Filter />

    </div>
  );
};
export default Home;
