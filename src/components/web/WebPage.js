import "./WebPage.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";
import Home from "./home/Home";

const WebPage = () => {
  return (
    <div className="webPage main">
      <Nav />
      {/*<div className="scrollable">*/}
        <Routes>
            <Route path="home" element={<Home />} />
        </Routes>
      {/*</div>*/}
      <Footer />
    </div>
  );
};

export default WebPage;
