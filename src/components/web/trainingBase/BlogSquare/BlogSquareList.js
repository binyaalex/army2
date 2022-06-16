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
            image: "/images/web/blogList/blog1.jpg",
            title: "תרופות לטיפול בכאב וסימפטומים אחרי לידה ",
            link: "/postpage2",
        },
        {
            image: "/images/web/blogList/blog2.jpg",
            title: "איך לבנות לוח זמנים לשינה של התינוק שלך ",
            link: "/postpage1",
        },
        {
            image: "/images/web/blogList/blog3.jpg",
            title: "8 תחליפי הנקה שכל אמא  טרייה צריכה להכיר",
            link: "/postpage2",
        },
    ];

    const slides = BlogListArr.map((el, index) => (
        <Link to={"" + el.link + ""} key={index}>
            <img src={el.image} alt="images" />
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