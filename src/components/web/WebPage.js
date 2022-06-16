import "./WebPage.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import TrainingBase from "./trainingBase/TrainingBase";
import Transport from "./transport/Transport";
import Dining from "./dining/Dining";
import Services from "./services/Services";
import Equipment from "./equipment/Equipment";
import Healthcare from "./healthcare/Healthcare";
import Media from "./media/Media";
import RecreationAndFitness from "./recreationAndFitness/RecreationAndFitness";

const WebPage = () => {
  return (
    <div className="webPage main">
      <Nav />
      <div className="scrollable">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trainingbase" element={<TrainingBase />} />
          <Route path="transport" element={<Transport />} />
          <Route path="dining" element={<Dining />} />
          <Route path="services" element={<Services />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="healthcare" element={<Healthcare />} />
          <Route path="media" element={<Media />} />
          <Route
            path="recreation-and-fitness"
            element={<RecreationAndFitness />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default WebPage;
