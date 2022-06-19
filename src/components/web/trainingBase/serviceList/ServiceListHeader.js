import "./ServiceListHeader.css";
import { Link } from "react-router-dom";

const ServiceListHeader = ({ text, link }) => {
  return (
    <div
      className="service_heading d-flex align-center justify-between row-reverse"
      id="serviceListHeader"
    >
      <Link to={link}>
        <img
          className="ServiceListHeaderImg"
          src="/images/hospital/viewheb.png"
        />
      </Link>
      <h3>{text}</h3>
    </div>
  );
};

export default ServiceListHeader;
