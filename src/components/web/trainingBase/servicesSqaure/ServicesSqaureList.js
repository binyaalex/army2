import React from "react";

import ServiceListHeader from "../serviceList/ServiceListHeader";
import ServicesSqaure from "./ServicesSqaure";

import star from "../../../../assets/images/star.svg";
import { Container } from "react-bootstrap";

const ServicesSqaureList = () => {
  const serviceListArr = [
    {
      image: "/images/web/hospital/services/service1.jpg",
      title: "בניית ארים",
      detail: "דברי עם הרופאה שלך בכל זמן",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/web/hospital/services/service2.jpg",
      title: "חיבורי תקשורת",
      detail: "כללי או תלת מימד",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/web/hospital/services/service3.jpg",
      title: "עיצוב אתרים",
      detail: "פגישות עם רופאים וכד'.",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/web/hospital/services/service4.jpg",
      title: "טלפונים אדומים",
      detail: "פגישה עם רופא מיילד",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/web/hospital/services/service5.jpg",
      title: "תשתיות מחשוב",
      detail: "כל האבחונים כולל מורכבים",
      review: "4.6 (1192 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/web/hospital/services/service1.jpg",
      title: "בניית ארים",
      detail: "דברי עם הרופאה שלך בכל זמן",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/web/hospital/services/service2.jpg",
      title: "חיבורי תקשורת",
      detail: "כללי או תלת מימד",
      review: "4.8 (1474 ביקורות)",
      star_image: { star },
      link: "#",
    },
    {
      image: "/images/web/hospital/services/service3.jpg",
      title: "עיצוב אתרים",
      detail: "פגישות עם רופאים וכד'.",
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
