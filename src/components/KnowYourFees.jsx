import React, { useState } from "react";
import "./KnowYourFees.css";
import yenepoya from "../assets/yenepoya.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { mangaloreCourses } from "../mangalore";
import { bangaloreCourses } from "../bangalore";
import axios from "axios";

const KnowYourFees = () => {
  const [phoneView, setPhoneView] = useState(false);
  const [courseView, setCourseView] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const location = useLocation();
  const currentPlace = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const CallFun = async (cc, ce) => {
    console.log("name :", name);
    console.log("phone :", phone);
    console.log("course :", cc);
    //privyr integration

    // var myHeaders = new Headers();
    // myHeaders.append("X-TOKEN", "Cs4ifdp3");
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   name: "abdul shakoor",
    //   lead_source: "Avengers Website",
    //   email: "tony@avengers.com",
    //   phone: "+15559876543",
    //   other_fields: {
    //     Country: "Wakanda",
    //     "net worth": "Over $10,000,000",
    //   },
    // });

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   mode: "no-cors",
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://www.privyr.com/integrations/api/v1/incoming-webhook",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    //nodejs axios
    var data = JSON.stringify({
      name: "abdulshakoor",
      lead_source: "Avengers Website",
      email: "tony@avengers.com",
      phone: "+15559876543",
      other_fields: {
        Country: "Wakanda",
        "net worth": "Over $10,000,000",
      },
    });

    // var config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "https://www.privyr.com/integrations/api/v1/incoming-webhook",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "POST",
    //     "Access-Control-Allow-Headers":
    //       "Origin, X-Requested-With, Content-Type, Accept,X-TOKEN",
    //     "Content-Type": "application/json",
    //     "X-TOKEN": "Cs4ifdp3",
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const headers = {
      "Access-Control-Allow-Headers": "X-TOKEN",
      "Content-Type": "application/json",
      "X-TOKEN": "Cs4ifdp3",
    };

    axios
      .post(
        "https://www.privyr.com/integrations/api/v1/incoming-webhook",
        data,
        { headers }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //navigation
    navigate(`/fees/${currentPlace}/${cc}`);
  };

  return (
    <div className="know">
      <div className="knowInner">
        <div className="knowWrapper">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <span className="HomeLink">Home</span>
          </Link>
          <div className="otherElements">
            <img src={yenepoya} alt="" className="logo" />
            <h2 className="knowTitle">KNOW YOUR FEES - {currentPlace}</h2>
            <span className="text">
              Enter Your Name, Phone number, and then select your course to know
              the fees and other necessary information.
            </span>
            <div className="textAndLink">
              <span className="text">
                If you have further doubts, or need assistance,
              </span>
              <span className="link"> Click Here</span>
            </div>
            <div className="inputItem">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="input"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                  let length = name.length;
                  if (length > 2) {
                    setPhoneView(true);
                  }
                }}
              />
            </div>
            {phoneView && (
              <div className="inputItem">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="input"
                  id="phone"
                  minlength="10"
                  maxlength="10"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                    let length = phone.length;
                    if (length > 8) {
                      setCourseView(true);
                    }
                  }}
                />
              </div>
            )}
            {courseView && (
              <div className="inputItem">
                <label htmlFor="course">Select Course</label>
                <div className="options">
                  {currentPlace == "mangalore" ? (
                    <div>
                      {mangaloreCourses.map((c) => (
                        <div
                          value={c.COURSE}
                          key={c.id}
                          className="option"
                          onClick={() => {
                            CallFun(c.id, c.COURSE);
                          }}
                        >
                          {c.COURSE}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {bangaloreCourses.map((c) => (
                        <div
                          value={c.COURSE}
                          key={c.id}
                          className="option"
                          onClick={() => {
                            CallFun(c.id, c.COURSE);
                          }}
                        >
                          {c.COURSE}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowYourFees;
