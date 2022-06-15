import React from "react";

import Header from "../repeat/Header";

import "./RecreationAndFitness.css";

import { Link } from "react-scroll";

import gymNotActive from "../../../assets/images/recreationAndFitness/gym-not-active.svg";
import libraryNotActive from "../../../assets/images/recreationAndFitness/library-not-active.svg";
import poolNotActive from "../../../assets/images/recreationAndFitness/pool-not-active.svg";

import gymActive from "../../../assets/images/recreationAndFitness/gym-active.svg";
import libraryActive from "../../../assets/images/recreationAndFitness/library-active.svg";
import poolActive from "../../../assets/images/recreationAndFitness/pool-active.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import library1 from "../../../assets/images/recreationAndFitness/library/library1.jpg";
import library2 from "../../../assets/images/recreationAndFitness/library/library2.jpg";
import library3 from "../../../assets/images/recreationAndFitness/library/library3.jpg";
import library4 from "../../../assets/images/recreationAndFitness/library/library4.jpg";
import library5 from "../../../assets/images/recreationAndFitness/library/library5.jpg";
import library6 from "../../../assets/images/recreationAndFitness/library/library6.jpg";
import library7 from "../../../assets/images/recreationAndFitness/library/library7.jpg";
import library8 from "../../../assets/images/recreationAndFitness/library/library8.jpg";
import library9 from "../../../assets/images/recreationAndFitness/library/library9.jpg";
import library10 from "../../../assets/images/recreationAndFitness/library/library10.jpg";

import textUnderlineBlue from "../../../assets/images/icon/title-underline-blue.svg";
import textUnderlineBlack from "../../../assets/images/icon/title-underline-black.svg";

import detailsTime from "../../../assets/images/icon/time.svg";
import detailsPhone from "../../../assets/images/icon/phone.svg";

const RecreationAndFitness = () => {
  return (
    <>
      <div className="page recreationAndFitnessPage">
        <Header
          header="פנאי וכושר"
          text="ישנם אטרקציות מגוונות עבור שעות הפנאי שלכם, שמרו על כושרכם הפיזי והמנטלי!"
        />

        <div className="content">
          <div className="navigator">
            <Link className="gym" smooth spy to="gym">
              <img src={gymNotActive} className="notActiveIcon" />
              <img src={gymActive} className="activeIcon" />
              <div className="hover-text">כושר</div>
            </Link>
            <Link className="pool" smooth spy to="pool">
              <img src={libraryNotActive} className="notActiveIcon" />
              <img src={libraryActive} className="activeIcon" />
              <div className="hover-text">בריכה</div>
            </Link>
            <Link className="library" smooth spy to="library">
              <img src={poolNotActive} className="notActiveIcon" />
              <img src={poolActive} className="activeIcon" />
              <div className="hover-text">ספרייה</div>
            </Link>
          </div>
          <div className="textArea">
            <div id="gym" className="gymText">
              ABOUT
            </div>
            <div id="pool" className="poolText">
              PROJECTS
            </div>
            <div id="library" className="libraryText">
              <div className="titleDiv">
                <div className="title">ספרייה</div>
                <img className="titleUnderline" src={textUnderlineBlue} />
              </div>
              <div className="libraryDiv">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={library1} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library2} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library3} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library4} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library5} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library6} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library7} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library8} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library9} className="librarySwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={library10} className="librarySwiperImg" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="details">
                <div className="flexible">
                  <div className="detailsTimeImgDiv">
                    <img
                      src={detailsTime}
                      className="detailsTimeImgDivImg"
                      alt="time"
                    />
                    <div className="detailsTimeTextDiv">
                      <div>
                        <div class="emphasis">א׳ - ה׳: </div>
                        <div className="detailsTimeTextDivTime">
                          <div>13:00 - 08:00</div>
                          <div>16:30 - 14:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detailsPhoneImgDiv">
                    <img
                      src={detailsPhone}
                      className="detailsPhoneImgDivImg"
                      alt="phone"
                    />
                    <div>
                      אתי הספרנית:
                      <Link
                        className="detailsPhoneImgDivLink"
                        href="tel:+972523393349"
                      >
                        <div class="detailsPhoneImgDivLinkNumber">
                          0523393349
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flexEnd">
                  <div className="titleDiv">
                    <div className="title">הגיעו מוכנים!</div>
                    <img
                      src={textUnderlineBlack}
                      className="titleUnderline"
                      alt="underline"
                    />
                  </div>
                  <div className="flexEndTextDiv">
                    בכדי להשאיל ספר צריך פרטים אישיים:
                    <br />
                    <div class="emphasis">שם, מספר אישי וטלפון.</div>
                    <br />
                    יש להחזיר את הספר עד חודש ימים מההשאלה.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecreationAndFitness;
