import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import RenderInTheProfile from "./RenderInProfile";
import Modal from "react-modal";
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
    data.append("upload_preset", "whatEver");
    data.append("cloud_name", "abdullahhalammoush");
    fetch(" https://api.cloudinary.com/v1_1/abdullahhalammoush/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        const urlSave = localStorage.setItem("url", url);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const profilePicutue = (img) => {
    console.log("USER ID : ", userId, " \nIMAGE URL : ", image);
    axios
      .put(`http://localhost:5000/profile/${userId}`, { image })
      .then((nateeja) => {
        console.log(nateeja);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  //check the router to resume the pic operation

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

        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5" id="profilename">
              <img
                className="rounded-circle mt-5"
                width="250px"
                height="250px"
                id="imageprofile"
                src={url}
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
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              <button onClick={uploadImage}>Upload</button>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right" id="profileinfo">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Your profile</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <h5>{allResult.map((elem) => {
                      return elem.Username;
                    })}</h5>
                </div>
                <div className="col-md-6">
                  <label className="labels">Email</label>
                  <h5>{allResult.map((elem) => {
                      return elem.email;
                    })}</h5>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <h5>{allResult.map((elem) => {
                      return elem.Phone_number;
                    })}</h5>
                </div>
              </div>
              <div className="mt-5 text-center">
              </div>
            </div>
            <RenderInTheProfile></RenderInTheProfile>
          </div>
        </div>
      
      {/* <button onClick={getAllInformationFE}>getAllInformation</button> */}
    </div>
  );
};
export default Profile;

//working on the get all information function
