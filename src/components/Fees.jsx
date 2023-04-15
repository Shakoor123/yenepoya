import React, { useEffect, useState } from "react";
import "./Fees.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { mangaloreCourses } from "../mangalore";
import { bangaloreCourses } from "../bangalore";

const Fees = () => {
  const location = useLocation();
  const currentPlace = location.pathname.split("/")[2];
  const courseId = location.pathname.split("/")[3];
  const [course, setCourse] = useState({});
  useEffect(() => {
    if (currentPlace == "mangalore") {
      for (const courses of mangaloreCourses) {
        if (courses.id == courseId) {
          setCourse(courses);
        }
      }
    } else {
      for (const courses of bangaloreCourses) {
        if (courses.id == courseId) {
          setCourse(courses);
        }
      }
    }
  }, [currentPlace, courseId]);

  return (
    <div className="fees">
      <div className="feesWrapper">
        <Link to={"/"}>
          <button className="goback">Go Back</button>
        </Link>
        <div className="feesDetails">
          <div className="logowrapper">
            <img src={logo} alt="" className="sublogo" />
            <h2 className="logoText">{course.COURSE}</h2>
          </div>
          <div className="bookingWrapper">
            <span className="bookingPrice">Booking: ₹{course.TOTAL}</span>
            <span className="bookingCampus">YENEPOYA - BANGALORE CAMPUS</span>
          </div>
          <table className="semesterFees">
            <tr className="row">
              <th>Semester</th>
              <th>Fees</th>
            </tr>
            <tr className="row">
              <td>sem1</td>
              <td>${course.sem1}</td>
            </tr>
            <tr className="row">
              <td>sem2</td>
              <td>${course.sem2}</td>
            </tr>
            <tr className="row">
              <td>sem3</td>
              <td>${course.sem3}</td>
            </tr>
            <tr className="row">
              <td>sem4</td>
              <td>${course.sem4}</td>
            </tr>
            <tr className="row">
              <td>sem5</td>
              <td>${course.sem5}</td>
            </tr>
            <tr className="row">
              <td>sem6</td>
              <td>${course.sem6}</td>
            </tr>
            {course.sem7 != 0 && (
              <tr className="row">
                <td>sem7</td>
                <td>${course.sem7}</td>
              </tr>
            )}
            {course.sem8 != 0 && (
              <tr className="row">
                <td>sem8</td>
                <td>${course.sem8}</td>
              </tr>
            )}
            {course.sem9 != 0 && (
              <tr className="row">
                <td>sem9</td>
                <td>${course.sem9}</td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fees;
