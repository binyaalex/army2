import React from "react";

import ServiceListHeader from "../serviceList/ServiceListHeader";

import DepartmentsSquare from "./DepartmentsSquare";

const DepartmentsList = () => {
  const departmentsListArr = [
    {
      img: "/images/hospital/pc.jpg",
      title: "מחלקת תקשוב",
      link: "/web/page/department",
    },
    {
      img: "/images/hospital/afsenaut.jpg",
      title: "מחלקת אפסנאות",
      link: "/web/page/department",
    },
    {
      img: "/images/hospital/tikshuv.jpg",
      title: "מחלקת תקשורת",
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
