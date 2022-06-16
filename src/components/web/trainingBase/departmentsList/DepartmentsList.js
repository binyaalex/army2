import React from "react";

import ServiceListHeader from "../serviceList/ServiceListHeader";

import DepartmentsSquare from "./DepartmentsSquare";

const DepartmentsList = () => {
  const departmentsListArr = [
    {
      img: "/images/web/hospital/hospital2.jpg",
      title: "יולדות",
      link: "/web/page/department",
    },
    {
      img: "/images/web/hospital/hospital3.jpg",
      title: "גינקולוגיה",
      link: "/web/page/department",
    },
    {
      img: "/images/web/hospital/hospital4.jpg",
      title: "אמהות",
      link: "/web/page/department",
    },
    {
      img: "/images/web/hospital/hospital5.jpg",
      title: "תינוקות",
      link: "/web/page/department",
    },
    {
      img: "/images/web/hospital/hospital6.jpg",
      title: "ילדים",
      link: "/web/page/department",
    },
    {
      img: "/images/web/hospital/hospital7.jpg",
      title: "ניתוחים",
      link: "/web/page/department",
    },
  ];

  return (
    <div className="hospitalDepartments">
      <ServiceListHeader text="המחלקות שלנו" link="/departments" />
      <div className="hospitalDepartmentsArr">
        {departmentsListArr.map((el, i) => {
          return (
            <DepartmentsSquare
              img={el.img}
              link={el.link}
              title={el.title}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentsList;
