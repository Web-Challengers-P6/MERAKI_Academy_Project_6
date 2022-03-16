import React, { useEffect } from "react";

const RenderInTheProfile = () => {
  const [ownTrips, setOwnTrips] = useState([]);

  const renderOwnTrips = async () => {
    await axios
      .get(`http://localhost:5000/profileRender/${userId}`)
      .then((result) => {
        console.log(result);
        setOwnTrips(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    renderOwnTrips;
  }, []);
  //what is left is to return the result using HOF
  return (
    <div>
      <h1>ggg</h1>
      <p>
        {" "}
        {ownTrips.map((elem) => {
          return elem;
        })}
      </p>
    </div>
  );
};

export default RenderInTheProfile;
