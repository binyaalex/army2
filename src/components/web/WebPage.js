import "./WebPage.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Transport from "./transport/Transport";
import Dining from "./dining/Dining";

const WebPage = () => {
  return (
    <div className="webPage main">
      <Nav />
      {/*<div className="scrollable">*/}
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="transport" element={<Transport />} />
            <Route path="dining" element={<Dining />} />
        </Routes>
      {/*</div>*/}
      <Footer />
    </div>
  );
};

export default WebPage;
