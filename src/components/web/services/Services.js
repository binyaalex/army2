import "./Services.css";
import Header from "../repeat/Header";
import Barbershop from "./Barbershop";
import Faults from "./Faults";
import Religion from "./Religion";
import Navigator from "../repeat/navigator/Navigator";
import Sidebar from "./../repeat/sidebar/Sidebar";
import Appointment from "./appointment/Appointment";

import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Services = () => {
  const [openAppointmentSideBar, setOpenAppointmentSideBar] = useState(false);
  const [openHospitalSideBar, setOpenHospitalSideBar] = useState(false);

  const openSideBarComponent = (name) => {
    setOpenAppointmentSideBar(name === 'appointment')
    setOpenHospitalSideBar(name === 'hospitalstay')
  }

  const closeSideBarComponent = () => {
    setOpenAppointmentSideBar(false);
    setOpenHospitalSideBar(false);
  }

  const NavigatorArr = [
    {
      img: faScissors,
      text: "מספרה",
    },
    {
      img: faWrench,
      text: "תקלות",
    },
    {
      img: faStarOfDavid,
      text: "רבנות",
    },
  ];

  return (
    <div className="services page">
      <Header
        header="שירותים כלליים"
        text="משהו התקלקל? צריכים להסתפר? אולי להתייעץ עם הרב? כל הפרטים כאן!"
      />
      <navigatable>
        <div className="content">
          <Navigator NavigatorArr={NavigatorArr} />
          <Barbershop
            openSideBarComponent={openSideBarComponent}
          />
          <Faults
          openSideBarComponent={openSideBarComponent}
          />
          <Religion />
        </div>
      </navigatable>
      <Sidebar
        openAppointmentSideBar={openAppointmentSideBar}
        setOpenAppointmentSideBar={setOpenAppointmentSideBar}
        openHospitalSideBar={openHospitalSideBar}
        setOpenHospitalSideBar={setOpenHospitalSideBar}
        closeSideBarComponent={closeSideBarComponent}
      />
    </div>
  );
};

export default Services;
