import './DoctorListSqaure.css'
import React from "react";
import { Link } from "react-router-dom";
import ServiceListHeader from '../serviceList/ServiceListHeader'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import star from "../../../../assets/images/star.svg";

const DoctorListSqaure = () => {
  const DoctorListArr = [
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "חנה לוי",
      p_text: "גניקולוגית",
      span_text: "4.9",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "חווה פרישברג",
      p_text: "מילדת",
      span_text: "4.8",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "דנה בלום",
      p_text: "דולה",
      span_text: "4.7",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "לאה מזרחי",
      p_text: "אחות",
      span_text: "4.6",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "חנה לוי",
      p_text: "גניקולוגית",
      span_text: "4.9",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "חווה פרישברג",
      p_text: "מילדת",
      span_text: "4.8",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "דנה בלום",
      p_text: "דולה",
      span_text: "4.7",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "לאה מזרחי",
      p_text: "אחות",
      span_text: "4.6",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "חנה לוי",
      p_text: "גניקולוגית",
      span_text: "4.9",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "חווה פרישברג",
      p_text: "מילדת",
      span_text: "4.8",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "דנה בלום",
      p_text: "דולה",
      span_text: "4.7",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "לאה מזרחי",
      p_text: "אחות",
      span_text: "4.6",
      star_image: { star },
      link: "/doctor",
    },
    {
      image: "/images/hospital/officer1.jpg",
      h6_text: "חנה לוי",
      p_text: "גניקולוגית",
      span_text: "4.9",
      star_image: { star },
      link: "/doctor",
    },
  ];

  const slides = DoctorListArr.map((el, index) => (
    <div className="" key={index}>
      <Link to={"" + el.link + ""}>
        <div className="doctor_box">
          <div className="box_img">
            <img src={el.image} alt="doctor" className="doctor_box_img" />
          </div>
          <h6>{el.h6_text}</h6>
          <p>{el.p_text}</p>
          <div className="start_con">
            <span>{el.span_text}</span>
            <img src={el.star_image.star} alt="star" />
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className='webDoctorList'>
      <ServiceListHeader text='הרופאות שלנו' link='/doctors' />
      <Swiper
        spaceBetween={0}
        slidesPerView={12}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorListSqaure;
