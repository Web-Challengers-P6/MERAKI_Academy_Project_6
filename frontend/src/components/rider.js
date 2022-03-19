import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./rider.css"
import Swal from "sweetalert2";
function Rider() {
  const [rider, setrider] = useState([]);
  const [email, setemail] = useState("");
  const tripId = localStorage.getItem("id");
  const getallrider = async () => {
    console.log(tripId);
    await axios
      .get(`http://localhost:5000/rider/${tripId}`)
      .then((result) => {
        console.log(result);
        setrider(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reject = async (id) => {
    console.log({ riderid: id });
    await axios
      .put(`http://localhost:5000/rider/${id}`)
      .then((result) => {
        console.log(result);
        getallrider();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallrider();
  }, []);

  return (
    <>
      {rider.map((elem, i) => {
        return (
          <div id="divmodal">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>
                 <h5>Request to join trip from</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                  <p><span id="modalspan">Name:</span> {elem.Username} </p>
                  <p><span id="modalspan">Email:</span> {elem.email}</p>
                  <p><span id="modalspan">Phone number:</span> {elem.Phone_number}</p>
                  </Card.Text>
                </Card.Body>
                <div id="buttons_modal">
                <Button onClick={() => { setemail(elem.email)
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Acceptance has been sent',
                  showConfirmButton: false,
                  timer: 1500
                }) 
            } }>Accept</Button>
                <Button id="buttons_modal2"
              onClick={() => {
                reject(elem.id_);
              } }
            >
              Reject
            </Button>
             </div>
              </Card>
              <br />
            </div>
          );
            })}
            </>
      )
          }
       
export default Rider;
