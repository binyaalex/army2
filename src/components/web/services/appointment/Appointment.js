import React, { useState } from "react";
// import Head from "../../repeats/head/Head";
// import DoctorList from "../../regularPages/doctorList/DoctorList";
// import ThisWeek from "./ThisWeek";
// import MeetBtn from "./MeetBtn";

import "./Appointment.css";

// import ShapIcon from "../../../assets/images/Shape.png";
// import CheckCircleIcon from "../../../assets/images/Checkcircle.png";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function Appointment() {
  const [startDate, setStartDate] = useState(new Date());

  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const [timeCalendarIsOpen, setTimeCalendarIsOpen] = useState(false);

  return (
    <>
      <div className="PageDad">
      <div className="appointment_pages">
          <div className="searchbox_container">
            <div className="searchbox_heading">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <h2>בחרי רופא</h2>
            </div>

            <div className="searchbox">
              <input
                id="search"
                type="search"
                placeholder="חפשי לפי שם או התמחות"
              />
              <i className="fa fa-search"></i>
            </div>
          </div>

          {/* <DoctorList /> */}

          <div className="dateselector_container">
            <div className="dateselector_heading">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <h2>בחרי תאריך</h2>
            </div>
            <div
              className="dateselector"
              onClick={() => setCalendarIsOpen(!calendarIsOpen)}
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                id="dateselector"
                placeholderText=" Open calendar"
                open={calendarIsOpen}
                onClickOutside={() => setCalendarIsOpen(!calendarIsOpen)}
              />

              {/* <img src={ShapIcon} alt="shap" /> */}
            </div>
          </div>

          {/* <ThisWeek /> */}

          <div className="timeselector_container">
            <div className="timeselector_heading">
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                style={{ fontSize: "15px" }}
              ></i>
              <h2>בחרי שעה</h2>
            </div>
            <div
              className="timeselector"
              onClick={() => setTimeCalendarIsOpen(!timeCalendarIsOpen)}
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="h:mm aa"
                open={timeCalendarIsOpen}
                onClickOutside={() =>
                  setTimeCalendarIsOpen(!timeCalendarIsOpen)
                }
              />
              {/* <img src={CheckCircleIcon} alt="circle" /> */}
            </div>
          </div>

          <div className="timeselectoroption_container">
            {/* <MeetBtn text="פגישה" />
            <MeetBtn text="שיחת וידאו" />
            <MeetBtn text="שיחת טלפון" /> */}
          </div>
          <div className="box_btn">
            <div className="container">
              <div className="btn_area">
                <Link to="/confirm" className="go_btn">
                  שלחי
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
