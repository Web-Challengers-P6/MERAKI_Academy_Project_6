import React from "react";
// import AllTrips from "./all trips/alltrips"
import Trips from "./all trips/alltrips";
import Filter from "./filter/filter";
import Carouselimage from "./Carousel/carousel";
import Aboutus from "./aboutus/aboutus";
import Booktrip from "./booktrip/booktrip";



const Home = () => {
  return (
    <div>
      <Carouselimage />
      <Aboutus/>
      <Booktrip />
    </div>
  );
};
export default Home;
