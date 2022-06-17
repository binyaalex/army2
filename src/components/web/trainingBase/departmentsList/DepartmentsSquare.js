import React from "react";
import { Link } from "react-router-dom";

const DepartmentsSquare = ({ img, link, title }) => {
  return (
    <Link className="hospitalDepartmentsBoxImg" to={link}>
      <img src={img} alt="hospital" />
      <div className="hospitalDepartmentsBoxTitle">{title}</div>
    </Link>
  );
};

export default DepartmentsSquare;
