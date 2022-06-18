import React from "react";

import Header from "../repeat/Header";

import "./RecreationAndFitness.css";

import { Link as ScrollLink } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Accordion from "react-bootstrap/Accordion";

import gymNotActive from "../../../assets/images/icons/gym-not-active.svg";
import libraryNotActive from "../../../assets/images/icons/library-not-active.svg";
import poolNotActive from "../../../assets/images/icons/pool-not-active.svg";

import gymActive from "../../../assets/images/icons/gym-active.svg";
import libraryActive from "../../../assets/images/icons/library-active.svg";
import poolActive from "../../../assets/images/icons/pool-active.svg";

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

import textUnderlineBlue from "../../../assets/images/icons/title-underline-blue.svg";
import textUnderlineBlack from "../../../assets/images/icons/title-underline-black.svg";

import detailsTime from "../../../assets/images/icons/time.svg";
import detailsPhone from "../../../assets/images/icons/phone.svg";

import pool1 from "../../../assets/images/recreationAndFitness/pool/pool1.jpg";
import pool2 from "../../../assets/images/recreationAndFitness/pool/pool2.jpg";
import pool3 from "../../../assets/images/recreationAndFitness/pool/pool3.jpg";

import girl from "../../../assets/images/icons/girl.svg";
import boy from "../../../assets/images/icons/boy.svg";

import gym1 from "../../../assets/images/recreationAndFitness/gym/gym/gym1.jpg";
import gym2 from "../../../assets/images/recreationAndFitness/gym/gym/gym2.jpg";
import gym3 from "../../../assets/images/recreationAndFitness/gym/gym/gym3.jpg";
import gym4 from "../../../assets/images/recreationAndFitness/gym/gym/gym4.jpg";
import gym5 from "../../../assets/images/recreationAndFitness/gym/gym/gym5.jpg";
import gym6 from "../../../assets/images/recreationAndFitness/gym/gym/gym6.jpg";
import gym7 from "../../../assets/images/recreationAndFitness/gym/gym/gym7.jpg";
import gym8 from "../../../assets/images/recreationAndFitness/gym/gym/gym8.jpg";
import gym9 from "../../../assets/images/recreationAndFitness/gym/gym/gym9.jpg";
import gym10 from "../../../assets/images/recreationAndFitness/gym/gym/gym10.jpg";
import gym11 from "../../../assets/images/recreationAndFitness/gym/gym/gym11.jpg";

import location from "../../../assets/images/icons/location.svg";
import register from "../../../assets/images/icons/register.svg";

import studioRooms1 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms1.jpg";
import studioRooms2 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms2.jpg";
import studioRooms3 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms3.jpg";
import studioRooms4 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms4.jpg";
import studioRooms5 from "../../../assets/images/recreationAndFitness/gym/studioRooms/studioRooms5.jpg";

import glove from "../../../assets/images/icons/glove.svg";
import weights from "../../../assets/images/icons/weights.svg";

import hallAndSports1 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports1.jpg";
import hallAndSports2 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports2.jpg";
import hallAndSports3 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports3.jpg";
import hallAndSports4 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports4.jpg";
import hallAndSports5 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports5.jpg";
import hallAndSports6 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports6.jpg";
import hallAndSports7 from "../../../assets/images/recreationAndFitness/gym/hallAndSports/hallAndSports7.jpg";

import fitnessGardens1 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens1.jpg";
import fitnessGardens2 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens2.jpg";
import fitnessGardens3 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens3.jpg";
import fitnessGardens4 from "../../../assets/images/recreationAndFitness/gym/fitnessGardens/fitnessGardens4.jpg";

import close from "../../../assets/images/icons/close.svg";
import towel from "../../../assets/images/icons/towel.svg";
import doctor from "../../../assets/images/icons/doctor.svg";
import ChatBot from "../chat/ChatBot";

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
            <ScrollLink
              offset={-50}
              duration={50}
              className="gym"
              smooth
              spy
              to="gym"
            >
              <img src={gymNotActive} className="notActiveIcon" />
              <img src={gymActive} className="activeIcon" />
              <div className="hoverText">כושר</div>
            </ScrollLink>
            <ScrollLink
              offset={-50}
              duration={50}
              className="pool"
              smooth
              spy
              to="pool"
            >
              <img src={libraryNotActive} className="notActiveIcon" />
              <img src={libraryActive} className="activeIcon" />
              <div className="hoverText">בריכה</div>
            </ScrollLink>
            <ScrollLink
              offset={-50}
              duration={50}
              className="library"
              smooth
              spy
              to="library"
            >
              <img src={poolNotActive} className="notActiveIcon" />
              <img src={poolActive} className="activeIcon" />
              <div className="hoverText">ספרייה</div>
            </ScrollLink>
            <ChatBot />
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
                    <Accordion.Header>חדר כושר</Accordion.Header>
                    <Accordion.Body>
                      <div className="gymContent">
                        <div className="gymImageAndText">
                          <div className="row">
                            <div className="col-lg-5 col-sm-12">
                              <div className="imageDisplay">
                                <Swiper
                                  spaceBetween={30}
                                  centeredSlides={true}
                                  autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                  }}
                                  pagination={{
                                    clickable: true,
                                  }}
                                  navigation={true}
                                  modules={[Autoplay, Pagination, Navigation]}
                                  className="mySwiper"
                                >
                                  <SwiperSlide>
                                    <img src={gym1} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym2} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym3} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym4} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym5} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym6} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym7} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym8} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym9} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym10} className="gymSwiperImg" />
                                  </SwiperSlide>
                                  <SwiperSlide>
                                    <img src={gym11} className="gymSwiperImg" />
                                  </SwiperSlide>
                                </Swiper>
                              </div>
                            </div>
                            <div className="col-lg-7 col-sm-12">
                              <div className="details">
                                <div className="locationDiv">
                                  <img
                                    src={location}
                                    className="icon"
                                    alt="location"
                                  />
                                  קריית הספורט, קומה 1
                                </div>
                                <div className="timeDiv">
                                  <img
                                    src={detailsTime}
                                    className="icon"
                                    alt="time"
                                  />
                                  <div className="openingHours">
                                    <div className="hoursOne">
                                      <div className="emphasis">א׳ - ד׳: </div>
                                      <div>22:00 - 07:00</div>
                                    </div>
                                    <div className="hoursTwo">
                                      <div className="emphasis">ה׳: </div>
                                      <div>10:30 - 07:00</div>
                                    </div>
                                    <div className="hoursThree">
                                      <div className="emphasis">ו׳: </div>
                                      <div>13:00 - 07:00</div>
                                    </div>
                                    <div className="note">bsd</div>
                                  </div>
                                </div>
                                <div className="registerDiv">
                                  <img
                                    src={register}
                                    className="icon"
                                    alt="register"
                                  />
                                  <div className="openingHours">
                                    <div>
                                      <div className="emphasis">א׳ - ד׳: </div>
                                      <div>22:00 - 07:00</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="date">מתוקף ל-9/12/1911</div>
                          <div className="gymFacility">
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <div className="bhdSchedule">
                                  <div className="gymFacilityTitleDiv">
                                    <div className="title"> שיבוצי שעות</div>
                                    <img
                                      className="titleUnderline"
                                      src={textUnderlineBlack}
                                    />
                                  </div>
                                  <div className="coronaWarn">
                                    <div className="warnSign">!</div>
                                    <div className="warnBody">
                                      {" "}
                                      בתקופת הקורונה, הכניסה לחד"כ היא על בסיס
                                      קפסולות. למידע, פנו למפקדיכם!{" "}
                                    </div>
                                  </div>
                                  <div className="emphasis">
                                    יש להרשם מראש אצל מדא"ג הבה"ד בכדי להכנס
                                    לחד"כ
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <div className="prepNote">
                                  <div className="gymFacilityTitleDiv">
                                    <div className="title"> שיבוצי שעות</div>
                                    <img
                                      className="titleUnderline"
                                      src={textUnderlineBlack}
                                    />
                                  </div>
                                  <div className="notes">
                                    <div className="contentTopped">
                                      <img
                                        src={register}
                                        className="icon"
                                        alt="register"
                                      />
                                      הכניסה לחדר הכושר מותנת בהצגת
                                      <div className="emphasis">
                                        מנוי וחוגר בלבד{" "}
                                      </div>
                                    </div>
                                    <div className="contentTopped">
                                      <img
                                        src={close}
                                        className="icon"
                                        alt="close"
                                      />
                                      <div className="emphasis">אין להכנס</div>
                                      לחדר הכושר
                                      <div className="emphasis">ללא מדריך</div>
                                      נוכח או
                                      <div className="emphasis">
                                        לאחר שעות הפעילות
                                      </div>
                                    </div>
                                    <div className="contentTopped">
                                      <img
                                        src={towel}
                                        className="icon"
                                        alt="towel"
                                      />
                                      כל מתאמן מחויב להגיע
                                      <br /> על
                                      <div className="emphasis">
                                        מדי ספורט תקניים
                                      </div>
                                      <br /> ועם
                                      <div className="emphasis">מגבת אישית</div>
                                    </div>
                                    <div className="contentTopped">
                                      <img
                                        src={doctor}
                                        className="icon"
                                        alt="doctor"
                                      />
                                      כל מתאמן
                                      <div className="emphasis">
                                        מעל גיל 23{" "}
                                      </div>
                                      או מתחת
                                      <div className="emphasis">לפרופיל 72</div>
                                      נדרש
                                      <div className="emphasis">
                                        {" "}
                                        לאישור רופא{" "}
                                      </div>
                                      המאשר לו פעילות בחד”כ.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>חדרי סטודיו</Accordion.Header>
                    <Accordion.Body>
                      <div className="studioRoomsContent">
                        <div className="row">
                          <div className="col-lg-5 col-sm-12">
                            <div className="imageDisplay">
                              <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                  delay: 2500,
                                  disableOnInteraction: false,
                                }}
                                pagination={{
                                  clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                  <img
                                    src={studioRooms1}
                                    className="studioRoomsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={studioRooms2}
                                    className="studioRoomsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={studioRooms3}
                                    className="studioRoomsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={studioRooms4}
                                    className="studioRoomsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={studioRooms5}
                                    className="studioRoomsSwiperImg"
                                  />
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                          <div className="col-lg-7 col-sm-12">
                            <div className="details">
                              <div className="flexible">
                                <div className="firstCentered">
                                  <img src={glove} className="icon" />
                                  <div>
                                    <b>אימוני אירובי:</b>
                                    <div className="openingHours">
                                      <div className="hours">
                                        <div className="emphasis">א׳: </div>
                                        <div>22:00 - 07:00</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="firstCentered">
                                  <img src={weights} className="icon" />
                                  <div>
                                    <b>אימוני עיצוב וחיטוב:</b>
                                    <div className="openingHours">
                                      <div className="hours">
                                        <div className="emphasis">א׳: </div>
                                        <div>22:00 - 07:00</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="altColor">
                                <div>
                                  3 חדרי סטודיו שונים עם
                                  <div className="emphasis">
                                    מראות ומערכת שמע
                                  </div>
                                  .
                                </div>
                                <br />
                                <div>
                                  אחד מחדרי הסטודיו מותאם
                                  <div className="emphasis">
                                    לשיעורי ספינינג{" "}
                                  </div>
                                  הכולל מספר רב של אופני ספינינג.
                                </div>
                                <div className="flexEnd">
                                  <img
                                    src={detailsPhone}
                                    className="icon"
                                    alt="phone"
                                  />
                                  <div>
                                    אימוני סטודיו זמינים לכל הבהדים בתאום מול
                                    ירין:
                                    <a
                                      className="link"
                                      href="tel:97254-467-5273"
                                    >
                                      {" "}
                                      <div className="text">
                                        054-467-5273
                                      </div>{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>אולם ומגרשי ספורט</Accordion.Header>
                    <Accordion.Body>
                      <div className="hallAndSportsContent">
                        <div className="row">
                          <div className="col-lg-5 col-sm-12">
                            <div className="imageDisplay">
                              <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                  delay: 2500,
                                  disableOnInteraction: false,
                                }}
                                pagination={{
                                  clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                  <img
                                    src={hallAndSports1}
                                    className="hallAndSportsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={hallAndSports2}
                                    className="hallAndSportsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={hallAndSports3}
                                    className="hallAndSportsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={hallAndSports4}
                                    className="hallAndSportsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={hallAndSports5}
                                    className="hallAndSportsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={hallAndSports6}
                                    className="hallAndSportsSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={hallAndSports7}
                                    className="hallAndSportsSwiperImg"
                                  />
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                          <div className="col-lg-7 col-sm-12">
                            <div className="details">
                              <div className="flexStart">
                                מחוץ לקריית הספורט ישנם
                                <div className="emphasis">8 חלקות מגרשים</div>,
                                הניתנים
                                <div className="emphasis">
                                  לתיאום מול מדא”ג הבה”ד
                                </div>
                                .
                                <br />
                                בקשה לשריון מגרש תעשה
                                <div className="emphasis">לפחות שבוע מראש</div>.
                              </div>
                              <div>
                                השימוש במתקני אולם הספורט מתאפשר רק
                                <div className="emphasis">בהשגחת מדא”ג </div>.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>גינות כושר</Accordion.Header>
                    <Accordion.Body>
                      <div className="fitnessGardensContent">
                        <div className="row">
                          <div className="col-lg-5 col-sm-12">
                            <div className="imageDisplay">
                              <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                  delay: 2500,
                                  disableOnInteraction: false,
                                }}
                                pagination={{
                                  clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                  <img
                                    src={fitnessGardens1}
                                    className="fitnessGardensSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={fitnessGardens2}
                                    className="fitnessGardensSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={fitnessGardens3}
                                    className="fitnessGardensSwiperImg"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src={fitnessGardens4}
                                    className="fitnessGardensSwiperImg"
                                  />
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                          <div className="col-lg-7 col-sm-12">
                            <div className="details">
                              ברחבי הבסיס באזורי בהד”ים שונים ישנן גינות כושר
                              חיצוניות ובהן
                              <div className="emphasis">מתקני כושר</div>
                              שונים הניתנים לשימוש
                              <div className="emphasis">בכל מהלך היום</div>
                            </div>
                          </div>
                        </div>
                      </div>
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
              <div className="row">
                <div className="col-lg-5 col-sm-12">
                  <div className="poolDiv">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
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
                </div>
                <div className="col-lg-7 col-sm-12">
                  <div className="details">
                    <div className="contentTopped">
                      <div className="openingHours">
                        <div className="hoursOne">
                          <img src={detailsTime} className="icon" alt="time" />
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
                      <img
                        className="titleUnderline"
                        src={textUnderlineBlack}
                      />
                    </div>
                    <div className="flexible">
                      <div className="row">
                        <div className="col-md-6 col-xs-12">
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
                        </div>
                        <div className="col-md-6 col-xs-12">
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
                  </div>
                </div>
              </div>
            </div>
            <div id="library" className="libraryText">
              <div className="titleDiv">
                <div className="title">ספרייה</div>
                <img className="titleUnderline" src={textUnderlineBlue} />
              </div>
              <div className="row">
                <div className="col-lg-5 col-sm-12">
                  <div className="libraryDiv">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
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
                </div>
                <div className="col-lg-7 col-sm-12">
                  <div className="details">
                    <div className="flexible">
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
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
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="detailsPhoneImgDiv">
                            <img
                              src={detailsPhone}
                              className="detailsPhoneImgDivImg"
                              alt="phone"
                            />
                            <div>
                              אתי הספרנית:
                              <a
                                className="detailsPhoneImgDivLink"
                                href="tel:+972523393349"
                              >
                                <div className="detailsPhoneImgDivLinkNumber">
                                  0523393349
                                </div>
                              </a>
                            </div>
                          </div>
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
        </div>
      </div>
    </>
  );
};

export default RecreationAndFitness;
