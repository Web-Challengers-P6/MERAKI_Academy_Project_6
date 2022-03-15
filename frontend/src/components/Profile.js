import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Profile = () => {
  const userId = localStorage.getItem("User");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [allResult, setAllResult] = useState([]);
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const getAllInformationFE = async () => {
    await axios
      .get(`http://localhost:5000/profile/${userId}`)
      .then((result) => {
        console.log(result);
        setAllResult(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "breellz");
    fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  const sendInfo = () => {
    console.log("it was sent");
    axios
      .put(`http://localhost:5000/profile/edit/${userId}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getAllInformationFE();
  }, []);
  return (
    <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">
                {allResult.map((elem) => {
                  return elem.Username;
                })}
              </span>
              <span className="text-black-50">
                {allResult.map((elem) => {
                  return elem.email;
                })}
              </span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    placeholder={allResult.map((elem) => {
                      return elem.Username;
                    })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder={allResult.map((elem) => {
                      return elem.email;
                    })}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    placeholder={allResult.map((elem) => {
                      return elem.Phone_number;
                    })}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={sendInfo}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={getAllInformationFE}>getAllInformation</button> */}
    </div>
  );
};
export default Profile;

//working on the get all information function
