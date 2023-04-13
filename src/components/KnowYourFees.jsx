import React, { useState } from "react";
import "./KnowYourFees.css";
import yenepoya from "../assets/yenepoya.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { bangaloreCourses, mangaloreCourses } from "../wesiteData";
const KnowYourFees = () => {
  const [phoneView, setPhoneView] = useState(false);
  const [courseView, setCourseView] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const location = useLocation();
  const currentPlace = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const CallFun = (cc) => {
    console.log("name :", name);
    console.log("phone :", phone);
    console.log("course :", cc);
    navigate("/fees");
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
                          value={c.course}
                          key={c.id}
                          className="option"
                          onClick={() => {
                            CallFun(c.course);
                          }}
                        >
                          {c.course}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {bangaloreCourses.map((c) => (
                        <div
                          value={c.course}
                          key={c.id}
                          className="option"
                          onClick={() => {
                            CallFun(c.course);
                          }}
                        >
                          {c.course}
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
