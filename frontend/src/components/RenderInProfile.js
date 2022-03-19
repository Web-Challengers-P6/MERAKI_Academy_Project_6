import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "../components/RenderInProfile.css";
import Modal from "react-modal";
import Rider from "./rider";
const RenderInTheProfile = () => {
  const [ownTrips, setOwnTrips] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const renderOwnTrips = async () => {
    const userId = localStorage.getItem("User");
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
    renderOwnTrips();
  }, []);
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const rejectRider = (tripId, seats) => {
    seats -= 1;
    axios
      .put(`http://localhost:5000/reject/${tripId}`, { seats })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [softZero, setSoftZero] = useState(0);
  //what is left is to return the result using HOF
  const rejectAndHide = (tripId) => {
    axios.put(`http://localhost:5000/reject/${tripId}`);
  };
  const setModalIsOpenToTrue = (id) => {
    setModalIsOpen(true);
    const prdctId = localStorage.setItem("id", id);
  };
  return (
    <>
      
      <div id="MyTrips">
        <h4>My trips</h4>
      </div>

      <div className="gridcontainer"
      id="profilegrid">
        {ownTrips.map((elem, index) => {
          return (
            <div id="spacing">
              <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header>
                  <h5>Trip: {elem.TRIPfrom} &#8594; {elem.TRIPto}  </h5>
                  
                </Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                    <p>Number of seats: {elem.numberOfSeats}</p>

                    <p>Number of passengers: {elem.passengers}</p>

                    <p>Charge per passenger: {elem.Price} JD</p>
                    <p>Date of trip: {elem.Datetrip} </p>
                    <p>Time of trip: {elem.Timetrip} </p>
                  </Card.Text>
                </Card.Body>{" "}
               
                      <Button
                        className="homebuttons"
                        onClick={() => {
                          setModalIsOpenToTrue(elem.id);
                        }}
                      >
                        Passengers requests
                      </Button>
                   

                <Modal isOpen={modalIsOpen}>
                      <Button onClick={setModalIsOpenToFalse}>x</Button>
                      <br/>
                      {/* <Exmodal /> */}
                      <Rider></Rider>
                    </Modal>
              </Card>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RenderInTheProfile;
