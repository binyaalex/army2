import './BlogSquareList.css'
import React from "react";
import { Link } from "react-router-dom";
import ServiceListHeader from '../serviceList/ServiceListHeader'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const BlogSquareList = () => {
    const BlogListArr = [
        {
            image: "/images/hospital/blog1.jpg",
            title: `כך תשרדו את  בה"ד 6 - המדריך המלא `,
            link: "/postpage2",
        },
        {
            image: "/images/hospital/blog2.jpg",
            title: `עיר הבה"דים  - כך תוכלו למצוא כל מה שחיפשתם`,
            link: "/postpage1",
        },
        {
            image: "/images/hospital/blog3.jpg",
            title: "טור אישי  של קצינת הלוגיסטיקה מור אלעד ",
            link: "/postpage2",
        },
    ];

    const slides = BlogListArr.map((el, index) => (
        <Link to={"" + el.link + ""} key={index}>
            <img className='blogImg' src={el.image} alt="images" />
            <h6 className="image_des_1">{el.title}</h6>
        </Link>
    ));

    return (
        <div className='webBlogList'>
            <ServiceListHeader text='הבלוגים שלנו' link='/blog' />
            <Swiper spaceBetween={30} slidesPerView={3}>
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlogSquareList;