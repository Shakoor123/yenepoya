import React from "react";
import "./Fees.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Fees = () => {
  const bangalore = [
    {
      "SL NO": 1,
      COURSE: "BPT",
      "I Sem": "125000",
      "II Sem": "60000",
      "III Sem": "60000",
      "IV Sem": "60000",
      "V Sem": "60000",
      "VI Sem": "60000",
      "VII Sem": "60000",
      "VIII Sem": "60000",
      "IX Sem": "60000",
      TOTAL: 605000,
    },
    {
      "SL NO": 2,
      COURSE: "BSC CLINICAL PSYCHOLOGY",
      "I Sem": 75000,
      "II Sem": 65000,
      "III Sem": 65000,
      "IV Sem": 65000,
      "V Sem": 65000,
      "VI Sem": 65000,
      TOTAL: 400000,
    },
    {
      "SL NO": 3,
      COURSE: "BSC PSYCHOLOGY",
      "I Sem": 75000,
      "II Sem": 65000,
      "III Sem": 65000,
      "IV Sem": 65000,
      "V Sem": 65000,
      "VI Sem": 65000,
      "VII Sem": 65000,
      "VIII Sem": 65000,
      TOTAL: 530000,
    },
    {
      "SL NO": 4,
      COURSE: "BOT",
      "I Sem": 150000,
      "II Sem": 50000,
      "III Sem": 50000,
      "IV Sem": 50000,
      "V Sem": 50000,
      "VI Sem": 50000,
      "VII Sem": 50000,
      "VIII Sem": 50000,
      "IX Sem": 50000,
      TOTAL: 550000,
    },
    {
      "SL NO": 5,
      COURSE: "BSC MLT",
      "I Sem": 147500,
      "II Sem": 47500,
      "III Sem": 47500,
      "IV Sem": 47500,
      "V Sem": 47500,
      "VI Sem": 47500,
      "VII Sem": 47500,
      "VIII Sem": 47500,
      TOTAL: 480000,
    },
    {
      "SL NO": 6,
      COURSE: "BSC CVT",
      "I Sem": 300000,
      "II Sem": 100000,
      "III Sem": 100000,
      "IV Sem": 100000,
      "V Sem": 100000,
      "VI Sem": 100000,
      "VII Sem": 100000,
      "VIII Sem": 100000,
      TOTAL: 1000000,
    },
    {
      "SL NO": 7,
      COURSE: "BSC AT &amp; OT",
      "I Sem": 160000,
      "II Sem": 60000,
      "III Sem": 60000,
      "IV Sem": 60000,
      "V Sem": 60000,
      "VI Sem": 60000,
      "VII Sem": 60000,
      "VIII Sem": 60000,
      TOTAL: 580000,
    },
    {
      "SL NO": 8,
      COURSE: "BSC MIT",
      "I Sem": 160000,
      "II Sem": 60000,
      "III Sem": 60000,
      "IV Sem": 60000,
      "V Sem": 60000,
      "VI Sem": 60000,
      "VII Sem": 60000,
      "VIII Sem": 60000,
      TOTAL: 580000,
    },
    {
      "SL NO": 9,
      COURSE: "RESPIRATORY CARE",
      "I Sem": 165000,
      "II Sem": 65000,
      "III Sem": 65000,
      "IV Sem": 65000,
      "V Sem": 65000,
      "VI Sem": 65000,
      "VII Sem": 65000,
      "VIII Sem": 65000,
      TOTAL: 620000,
    },
    {
      "SL NO": 10,
      COURSE: "NEUROSCIENCE",
      "I Sem": 140000,
      "II Sem": 45000,
      "III Sem": 45000,
      "IV Sem": 45000,
      "V Sem": 45000,
      "VI Sem": 45000,
      "VII Sem": 45000,
      "VIII Sem": 45000,
      TOTAL: 455000,
    },
    {
      "SL NO": 11,
      COURSE: "EMERGENCY AND TRAUMA CARE",
      "I Sem": 140000,
      "II Sem": 45000,
      "III Sem": 45000,
      "IV Sem": 45000,
      "V Sem": 45000,
      "VI Sem": 45000,
      "VII Sem": 45000,
      "VIII Sem": 45000,
      TOTAL: 455000,
    },
  ];
  return (
    <div className="fees">
      <div className="feesWrapper">
        <Link to={"/"}>
          <button className="goback">Go Back</button>
        </Link>
        <div className="feesDetails">
          <div className="logowrapper">
            <img src={logo} alt="" className="sublogo" />
            <h2 className="logoText">{bangalore[1].COURSE}</h2>
          </div>
          <div className="bookingWrapper">
            <span className="bookingPrice">Booking: ₹{bangalore[0].TOTAL}</span>
            <span className="bookingCampus">YENEPOYA - BANGALORE CAMPUS</span>
          </div>
          <table className="semesterFees">
            <tr className="row">
              <th>Semester</th>
              <th>Fees</th>
            </tr>
            <tr className="row">
              <td>sem1</td>
              <td>${bangalore[0]["I Sem"]}</td>
            </tr>
            <tr className="row">
              <td>sem2</td>
              <td>${bangalore[0]["II Sem"]}</td>
            </tr>
            <tr className="row">
              <td>sem3</td>
              <td>${bangalore[0]["III Sem"]}</td>
            </tr>
            <tr className="row">
              <td>sem4</td>
              <td>${bangalore[0]["IV Sem"]}</td>
            </tr>
            <tr className="row">
              <td>sem5</td>
              <td>${bangalore[0]["V Sem"]}</td>
            </tr>
            <tr className="row">
              <td>sem6</td>
              <td>${bangalore[0]["VI Sem"]}</td>
            </tr>
            <tr className="row">
              <td>sem7</td>
              <td>${bangalore[0]["VII Sem"]}</td>
            </tr>
            <tr className="row">
              <td>sem8</td>
              <td>${bangalore[0]["VIII Sem"]}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fees;
