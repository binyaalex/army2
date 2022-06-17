import React from "react";

import { Link } from "react-router-dom";

const HospitalSqaure = ({ image, title, detail, review, star_image, link }) => {
  return (
    <>
      <Link
        className="hospitalServicesListLink"
        to={"" + link + ""}
      >
        <div className="hospitalServicesListBox">
          <div className="boxCon">
            <div className="boxHeading">
              <h4>{title}</h4>
              <p>{detail}</p>
              <div className="boxDetails">
                <img src={star_image.star} alt="star" /> <span>{review}</span>
              </div>
            </div>
          </div>
          <div className="boxImg">
            <img src={image} alt="Online" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default HospitalSqaure;
