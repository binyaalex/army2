import React from "react";

import Appointment from "../../services/appointment/Appointment";
import HospitalStay from "../../services/hospitalStay/HospitalStay";
import "./Sidebar.css";

import CloseIcon from "@mui/icons-material/Close";

const Sidebar = (props) => {
  return (
    <div
      className={
        props.openAppointmentSideBar == true
          ? "customizer border-left-blue-grey border-left-lighten-4 open"
          : props.openHospitalSideBar == true
          ? "customizer border-left-blue-grey border-left-lighten-4 open"
          : "customizer border-left-blue-grey border-left-lighten-4 d-none d-md-block"
      }
    >
      <div className="customizer-content pt-2">
        <div className="closeBtnHeader">
          <div
            className="closeBtnDiv"
            onClick={() => props.closeSideBarComponent(false)}
          >
            <CloseIcon />
          </div>
        </div>
        {props.openAppointmentSideBar == true ? (
          <Appointment />
        ) : props.openHospitalSideBar == true ? (
          <HospitalStay />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Sidebar;
