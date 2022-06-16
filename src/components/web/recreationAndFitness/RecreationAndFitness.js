import React from "react";

import Header from "../repeat/Header";

import "./RecreationAndFitness.css";

import { Link as ScrollLink } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import gymNotActive from "../../../assets/images/recreationAndFitness/gym-not-active.svg";
import libraryNotActive from "../../../assets/images/recreationAndFitness/library-not-active.svg";
import poolNotActive from "../../../assets/images/recreationAndFitness/pool-not-active.svg";

import gymActive from "../../../assets/images/recreationAndFitness/gym-active.svg";
import libraryActive from "../../../assets/images/recreationAndFitness/library-active.svg";
import poolActive from "../../../assets/images/recreationAndFitness/pool-active.svg";

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

import pool1 from "../../../assets/images/recreationAndFitness/pool/pool1.jpg";
import pool2 from "../../../assets/images/recreationAndFitness/pool/pool2.jpg";
import pool3 from "../../../assets/images/recreationAndFitness/pool/pool3.jpg";

import girl from "../../../assets/images/recreationAndFitness/girl.svg";
import boy from "../../../assets/images/recreationAndFitness/boy.svg";

import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

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
            <ScrollLink className="gym" smooth spy to="gym">
              <img src={gymNotActive} className="notActiveIcon" />
              <img src={gymActive} className="activeIcon" />
              <div className="hover-text">כושר</div>
            </ScrollLink>
            <ScrollLink className="pool" smooth spy to="pool">
              <img src={libraryNotActive} className="notActiveIcon" />
              <img src={libraryActive} className="activeIcon" />
              <div className="hover-text">בריכה</div>
            </ScrollLink>
            <ScrollLink className="library" smooth spy to="library">
              <img src={poolNotActive} className="notActiveIcon" />
              <img src={poolActive} className="activeIcon" />
              <div className="hover-text">ספרייה</div>
            </ScrollLink>
          </div>
          <div className="textArea">
            <div id="gym" className="gymText">
              <div className="titleDiv">
                <div className="title">כושר</div>
                <img className="titleUnderline" src={textUnderlineBlue} />
              </div>
              <div className="accordionDiv">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div id="pool" className="poolText">
              <div className="titleDiv">
                <div className="title">בריכה</div>
                <img className="titleUnderline" src={textUnderlineBlue} />
              </div>
              <div className="poolDiv">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={pool1} className="poolSwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={pool2} className="poolSwiperImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={pool3} className="poolSwiperImg" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="details">
                <div className="contentTopped">
                  <img src={detailsTime} className="icon" alt="time" />
                  <div className="openingHours">
                    <div className="hoursOne">
                      <div className="emphasis">א׳: </div>
                      <div>
                        <div>18:00 - 14:00</div>
                        <div>21:00 - 18:30</div>
                      </div>
                    </div>
                    <div className="hoursTwo">
                      <div className="emphasis">ב׳ - ד׳: </div>
                      <div>
                        <div>09:00 - 06:30</div>
                        <div>14:00 - 18:00</div>
                        <div>21:00 - 18:30</div>
                      </div>
                    </div>
                    <div className="hoursThree">
                      <div className="emphasis">ה׳: </div>
                      <div>
                        <div>09:00 - 06:30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="titleDiv">
                  <div className="title">זמני רחצה מוגדרים</div>
                  <img className="titleUnderline" src={textUnderlineBlack} />
                </div>
                <div className="flexible">
                  <div className="noBottomMargin">
                    <img src={girl} className="icon" alt="girl" />
                    <div className="openingHours">
                      <div className="hoursOne">
                        <div className="emphasis">ב׳: </div>
                        <div>08:00 - 06:30</div>
                      </div>
                      <div className="hoursTwo">
                        <div className="emphasis">ד׳: </div>
                        <div>21:00 - 20:00</div>
                      </div>
                    </div>
                  </div>
                  <div className="noBottomMargin">
                    <img src={boy} className="icon" alt="girl" />
                    <div className="openingHours">
                      <div className="hoursOne">
                        <div className="emphasis">ב׳: </div>
                        <div>21:00 - 20:00</div>
                      </div>
                      <div className="hoursTwo">
                        <div className="emphasis">ד׳: </div>
                        <div>07:30 - 09:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                        <div className="emphasis">א׳ - ה׳: </div>
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
                        to={"tel:+972523393349"}
                      >
                        <div className="detailsPhoneImgDivLinkNumber">
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
                    <div className="emphasis">שם, מספר אישי וטלפון.</div>
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
