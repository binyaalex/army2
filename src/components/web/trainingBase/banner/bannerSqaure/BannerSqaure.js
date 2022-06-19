import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import banner from "../../../../../assets/images/web/hospital/banner.jpg";

const BannerSqaure = () => {
  const bannerArr = [
    {
      image: '/images/hospital/banner.jpg',
      title: `בה"ד 6`,
      detail: "לוגיסטיקה",
      link: "#",
    },
    {
      image: '/images/hospital/banner.jpg',
      title: `בה"ד 6`,
      detail: "לוגיסטיקה",
      link: "#",
    },
    {
      image: '/images/hospital/banner.jpg',
      title: `בה"ד 6`,
      detail: "לוגיסטיקה",
      link: "#",
    },
  ];

  const slides = bannerArr.map((el, i) => (
    <Container>
      <Link to={"" + el.link + ""}>
        <img src={el.image} className="bannerImg" alt="banner" />
        <div className="bannerDiv">
          <h1 className="bannerDivTitle">{el.title}</h1>
          <p className="bannerDivDetail">{el.detail}</p>
        </div>
      </Link>
    </Container>
  ));

  return (
    <>
      <Swiper className="mySwiper" slidesPerView={1} >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSqaure;