import React from "react";
import { Link } from "react-router-dom";

const HospitalStaySquare = ({ img, text, link }) => {
  return (
    <Link to={link} className="hospitalStaySquare">
      <img className="hospitalStaySquareImg" src={img} />
      <h1 className="hospitalStaySquareHeader">{text}</h1>
    </Link>
  );
};

export default HospitalStaySquare;
