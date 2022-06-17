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
      image: '',
      title: "המרכז לטיפול בהריון",
      detail: "חולון, הלוחמים 62",
      link: "#",
    },
    {
      image: '',
      title: "מרכז רפואי סורוקה",
      detail: "באר שבע, שדרות רגר  151",
      link: "#",
    },
    {
      image: '',
      title: "בית חולים אסותא",
      detail: "תל -אביב, יגאל אלון 96",
      link: "#",
    },
  ];

  const slides = bannerArr.map((el, i) => (
    <Container>
      <Link to={"" + el.link + ""}>
        <img src={el.image.banner} className="bannerImg" alt="banner" />
        <div className="bannerDiv">
          <h1 className="bannerDivTitle">{el.title}</h1>
          <p className="bannerDivDetail">{el.detail}</p>
        </div>
      </Link>
    </Container>
  ));

  return (
    <>
      <Swiper className="mySwiper">
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