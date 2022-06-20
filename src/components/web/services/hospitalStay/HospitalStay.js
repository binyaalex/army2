import React from "react";

import HospitalStaySquare from "./hospitalStaySquare/HospitalStaySquare";

import "./HospitalStay.css";

const HospitalStay = () => {
  const hospitalStayArr = [
    {
      img: "/images/hospitalStay/hospitalStay1.jpg",
      text: "תוכנית לידה",
      link: "#",
    },
    {
      img: "/images/hospitalStay/hospitalStay2.jpg",
      text: "האבחונים שלי",
      link: "#",
    },
    {
      img: "/images/hospitalStay/hospitalStay3.jpg",
      text: "הפרוצדורות שלי",
      link: "#",
    },
    {
      img: "/images/hospitalStay/hospitalStay4.jpg",
      text: "מידע על המטופל",
      link: "#",
    },
    {
      img: "/images/hospitalStay/hospitalStay5.jpg",
      text: "דיווח יומי",
      link: "#",
    },
  ];

  return (
    <div className="PageDad">
      <div className="hospitalStayPage">
        <main className="hospitalStayPageList">
          {hospitalStayArr.map((el, i) => {
            return (
              <HospitalStaySquare
                img={el.img}
                text={el.text}
                link={el.link}
                key={i}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default HospitalStay;
