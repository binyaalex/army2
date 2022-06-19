import React from "react";

import ServiceListHeader from "../serviceList/ServiceListHeader";
import ServicesSqaure from "./ServicesSqaure";

import star from "../../../../assets/images/star.svg";
import { Container } from "react-bootstrap";

const ServicesSqaureList = () => {
  const serviceListArr = [
    {
      image: "/images/hospital/uniform.jpg",
      title: "מדים ",
      detail: "הזמנת מדים כולל במידות מיחודות",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/hospital/cables1.jpg",
      title: "חיבורי תקשורת",
      detail: "חיבור המשרד לכל התקשורת  הצבאית הדרושה",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/hospital/shoes.jpg",
      title: "נעליים",
      detail: "נעליים לכל חייל כולל במידות מיחודות",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/hospital/redPhone.jpg",
      title: "טלפונים  למשרדים",
      detail: "התקנת טלפונים במשרדי קצינים",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
  ];

  return (
    <>
      <ServiceListHeader text="השירותים שלנו" link="#" />
      <Container>
        <div className="hospitalServicesList">
          {serviceListArr.map((el, i) => {
            return (
              <ServicesSqaure
                image={el.image}
                title={el.title}
                detail={el.detail}
                review={el.review}
                star_image={el.star_image}
                link={el.link}
                key={i}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default ServicesSqaureList;
